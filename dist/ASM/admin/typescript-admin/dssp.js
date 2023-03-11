"use strict";
class ProductsAD {
    constructor(id, name, image, price, detail, cat_id) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.detail = detail;
        this.cat_id = cat_id;
    }
    async showProductsAD() {
        var dataProductsAD = `
        <tr>
        <td class="text-center">
          <input type="checkbox" id="check6-td1" name="check6-td1" />
        </td>
        <td class="text-center">${this.id}</td>
        <td>
          <a href="javascript:void(0)">${this.name}</a>
        </td>
        <td class="hidden-xs hidden-sm">
          <img
            src="${this.image}"
            alt="${this.name}"
          />
        </td>
        <td class="hidden-xs hidden-sm">${this.price}</td>
        <td class="hidden-xs hidden-sm">
        ${this.detail}
        </td>
        <td class="hidden-xs hidden-sm">
        ${this.cat_id}
        </td>
        <td class="text-center">
          <div class="btn-group">
            <a
              href="javascript:void(0)"
              data-toggle="tooltip"
              title="Chi Tiết"
              class="btn btn-xs btn-info"
              ><i class="fa fa-info-circle"></i
            ></a>
            <a
              href="editsp.html?id=${this.id}"
              data-toggle="tooltip"
              title="Sửa"
              class="btn btn-xs btn-success"
              ><i class="fa fa-pencil"></i
            ></a>
            <a
              href="#" onclick="xoaSP(${this.id});"
              data-toggle="tooltip"
              title="Xóa"
              class="btn btn-xs btn-danger"
              ><i class="fa fa-times"></i
            ></a>
          </div>
        </td>
      </tr>
        `;
        return dataProductsAD;
    }
    async editProductsAD(url, method = "PUT" || "POST") {
        const data = {
            id: this.id,
            name: this.name,
            image: this.image,
            price: this.price,
            detail: this.detail,
            cat_id: this.cat_id
        };
        var option = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, option);
        const dataProductsAD = await response.json();
    }
}
// interface
var productsADList = [];
async function getProductsAD() {
    try {
        const url = "http://localhost:3000/products";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
async function showProductsADArray() {
    let data = [];
    data = await getProductsAD();
    for (let i = 0; i < data.length; i++) {
        const newProductsAD = new ProductsAD(data[i].id, data[i].name, data[i].image, data[i].price, data[i].detail, data[i].cat_id);
        productsADList.push(await newProductsAD.showProductsAD());
    }
    var inforProductsAD = document.querySelector("#show_products");
    if (inforProductsAD)
        inforProductsAD.innerHTML += productsADList.join("");
    productsADList = [];
}
showProductsADArray();
const xoaSP = (id) => {
    const accept = confirm('Bạn có chắc sẽ xóa sản phẩm này');
    if (!accept)
        return;
    let url = `http://localhost:3000/products/${id}`;
    fetch(url, { method: 'delete' })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        alert('Đã xóa');
        document.location = 'dssp.html';
    });
};
