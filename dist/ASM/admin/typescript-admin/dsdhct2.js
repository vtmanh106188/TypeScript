"use strict";
// Hiển thị danh sách đơn hàng chi tiết
const getURL = async (url) => {
    let response = await fetch(url);
    let data = response.json();
    return data;
};
const showDataOrder = async () => {
    let urlOrderDetail = "http://localhost:3000/order_detail";
    let urlProduct = "http://localhost:3000/products";
    let dataArrayOrderDetail = await Promise.all([getURL(urlOrderDetail), getURL(urlProduct)]);
    dataArrayOrderDetail[0].forEach((e) => {
        let nameProduct = dataArrayOrderDetail[1].find((iteam) => iteam.id == e.product_id);
        console.log(nameProduct.name);
        let arr_order_detail = `
          <tr>
          <td class="text-center">
            <input type="checkbox" id="check6-td1" name="check6-td1" />
          </td>
          <td class="text-center">${e.id}</td>
          <td><a href="javascript:void(0)">${e.order_id}</a></td>
          <td class="hidden-xs hidden-sm">${nameProduct.name}</td>
          <td class="hidden-xs hidden-sm">${e.quantity}</td>
          <td class="hidden-xs hidden-sm">${e.unti_price}</td>
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
                href="javascript:void(0)"
                data-toggle="tooltip"
                title="Sửa"
                class="btn btn-xs btn-success"
                ><i class="fa fa-pencil"></i
              ></a>
              <a
                href="javascript:void(0)"
                onclick="xoaSP();"
                data-toggle="tooltip"
                title="Xóa"
                class="btn btn-xs btn-danger"
                ><i class="fa fa-times"></i
              ></a>
            </div>
          </td>
          </tr>
          `;
        document.querySelector('#show_bill_detail').innerHTML += arr_order_detail;
    });
};
showDataOrder();
