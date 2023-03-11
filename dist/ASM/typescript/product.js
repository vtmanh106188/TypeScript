"use strict";
class Fruit {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    async showFruit() {
        var dataFruit = `
        <li><a href="#">${this.name}</a></li>
        `;
        return dataFruit;
    }
}
var fruitList = [];
async function getFruit() {
    try {
        const url = "http://localhost:3000/nameFruit";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
async function showFruitArray() {
    let data = [];
    data = await getFruit();
    for (let i = 0; i < data.length; i++) {
        const newFruit = new Fruit(data[i].id, data[i].name);
        fruitList.push(await newFruit.showFruit());
    }
    var inforFruit = document.querySelector("#fruit-menu");
    if (inforFruit)
        inforFruit.innerHTML += fruitList.join("");
    fruitList = [];
}
showFruitArray();
class fruitProducts {
    constructor(id, nameProduct, image, price, fr_id) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.image = image;
        this.price = price;
        this.fr_id = fr_id;
    }
    async showFruitProducts() {
        var _a;
        var dataProducts = `
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item">
        <!-- Block1 -->
            <div class="block1">
                <div class="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04 p-t-10">
                    <a href="product-single.html?id=${this.id}"><img src="${this.image}" alt="${this.nameProduct}" class="image_sp" style="height:268px; width:268px;"></a>	
                    
                    <div class="flex-col-c-m p-b-46">
                        <a href="product-single.html?id=${this.id}" class="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1 p-t-20">
                            ${this.nameProduct}
                        </a>

                        <span class="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                            ${(_a = this.price) === null || _a === void 0 ? void 0 : _a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                        </span>

                        <div class="block1-wrap-icon flex-c-m flex-w trans-05">
                            <a href="" class="block1-icon flex-c-m wrap-pic-max-w">
                                <img src="images/icons/icon-view.png" alt="ICON">
                            </a>

                            <a href="#" class="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                <img src="images/icons/icon-cart.png" alt="ICON"
                                onclick="addCartFruit(${this.id},'${this.nameProduct}',${this.price},'${this.image}');" >
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
var productsFruitList = [];
async function getFruitProducts() {
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
async function showFruitProductsArray() {
    let data = [];
    data = await getFruitProducts();
    for (let i = 0; i < data.length; i++) {
        const newFruit = new fruitProducts(data[i].id, data[i].nameProduct, data[i].image, data[i].price, data[i].fr_id);
        productsFruitList.push(await newFruit.showFruitProducts());
    }
    var inforFruitProducts = document.querySelector("#products_fruit");
    if (inforFruitProducts)
        inforFruitProducts.innerHTML += productsFruitList.join("");
    productsFruitList = [];
}
showFruitProductsArray();
function addCartFruit(id, ten, gia, hinh) {
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
// show cart right
// Show cart
function showCartItem(arr) {
    arr.forEach((item, index) => {
        item_add = `
            <div class="flex-w flex-str m-b-25">
                <div class="size-w-15 flex-w flex-t">
                    <a href="product-single.html?id=${item.id}" class="wrap-pic-w bo-all-1 bocl12 size-w-16 hov3 trans-04 m-r-14">
                        <img src="${item.image}" alt="${item.name}">
                    </a>
    
                    <div class="size-w-17 flex-col-l">
                        <a href="product-single.html?id${item.id}" class="txt-s-108 cl3 hov-cl10 trans-04">
                            ${item.name}
                        </a>
    
                        <span class="txt-s-101 cl9">
                            ${item.price}
                        </span>
    
                        <span class="txt-s-109 cl12">
                            x ${item.quantity}
                        </span>
    
                        <span class="txt-s-109 cl9 total_price_right" >
                            ${(item.quantity * item.price)}
                        </span>
                    </div>
                </div>
            </div>
            `;
        document.querySelector("#show_right").innerHTML += item_add;
    });
}
var cart_arr = JSON.parse(localStorage.getItem("cart") || "[]");
var item_add = "";
if (cart_arr) {
    showCartItem(cart_arr);
}
var price_checkout = Array.from(document.querySelectorAll('.total_price_right'));
var arr_total = price_checkout.map(item => Number(item.innerHTML));
let total2 = 0;
for (let item of arr_total) {
    total += item;
}
document.querySelector('#total_right').innerText = total2.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
