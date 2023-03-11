"use strict";
// show menu 
class Categoies {
    constructor(id, name, name2) {
        this.id = id;
        this.name = name;
        this.name2 = name2;
    }
    async showCategoies() {
        var dataCategoies = `
        <li><a href="#">${this.name}</a></li>
        `;
        return dataCategoies;
    }
    async showCategoies2() {
        var dataCategoies2 = `
            <button class="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10 how-active1" data-filter=".${this.name2}">
                ${this.name}
            </button>
        `;
        return dataCategoies2;
    }
}
// interface
var categoiesList = [];
var categoiesList2 = [];
async function getCategoies() {
    try {
        const url = "http://localhost:3000/categoies";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
async function showCategoiesArray() {
    let data = [];
    data = await getCategoies();
    for (let i = 0; i < data.length; i++) {
        const newCate = new Categoies(data[i].id, data[i].name, data[i].name2);
        categoiesList.push(await newCate.showCategoies());
    }
    var inforCategoies = document.querySelector("#categoies");
    if (inforCategoies)
        inforCategoies.innerHTML += categoiesList.join("");
    categoiesList = [];
}
async function showCategoiesArray2() {
    let data = [];
    data = await getCategoies();
    for (let i = 0; i < data.length; i++) {
        const newCate2 = new Categoies(data[i].id, data[i].name, data[i].name2);
        categoiesList2.push(await newCate2.showCategoies2());
    }
    var inforCategoies2 = document.querySelector("#categoies2");
    if (inforCategoies2)
        inforCategoies2.innerHTML += categoiesList2.join("");
    categoiesList2 = [];
}
showCategoiesArray();
showCategoiesArray2();
// show sản phẩm trang chủ
class Products {
    constructor(id, name, image, price, detail, cat_id) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.detail = detail;
        this.cat_id = cat_id;
    }
    async showProducts() {
        var _a;
        var dataProducts = `
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item laptop">
        <!-- Block1 -->
            <div class="block1">
                <div class="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04 p-t-10">
                    <a href="product-single.html?id=${this.id}"><img src="${this.image}" alt="${this.name}" class="image_sp" style="height:268px; width:268px;"></a>	
                    
                    <div class="flex-col-c-m p-b-46">
                        <a href="product-single.html?id=${this.id}" class="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1 p-t-20">
                            ${this.name}
                        </a>

                        <span class="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                            ${(_a = this.price) === null || _a === void 0 ? void 0 : _a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                        </span>

                        <div class="block1-wrap-icon flex-c-m flex-w trans-05">
                            <a href="product-single.html?id=${this.id}" class="block1-icon flex-c-m wrap-pic-max-w">
                                <img src="images/icons/icon-view.png" alt="ICON">
                            </a>

                            <a href="#" class="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                <img src="images/icons/icon-cart.png" alt="ICON"
                                onclick="addCart(${this.id},'${this.name}',${this.price},'${this.image}');" >
                            </a>

                            <a href="wishlist.html" class="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                <img class="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON">
                                <img class="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
        `;
        return dataProducts;
    }
}
// interface
var productsList = [];
async function getProducts() {
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
async function showProductsArray() {
    let data = [];
    data = await getProducts();
    for (let i = 0; i < data.length; i++) {
        const newUser = new Products(data[i].id, data[i].name, data[i].image, data[i].price, data[i].detail, data[i].cat_id);
        productsList.push(await newUser.showProducts());
    }
    var inforProducts = document.querySelector("#products");
    if (inforProducts)
        inforProducts.innerHTML += productsList.join("");
    productsList = [];
}
showProductsArray();
// Thêm vào giỏ hàng 
function addCart(id, ten, gia, hinh) {
    var cart = JSON.parse(localStorage.getItem("cart") || '[]');
    if (cart == '') {
        cart = [];
        cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 });
    }
    else {
        let item = cart.find((item) => item.id === id);
        if (item)
            item.quantity++;
        else
            cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 });
    }
    alert("Thêm vào giỏ hàng thành công");
    localStorage.setItem("cart", JSON.stringify(cart));
}
