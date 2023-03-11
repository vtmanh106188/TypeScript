"use strict";
var _a;
// Show cart
function showCartItem(arr) {
    arr.forEach((item, index) => {
        item_add = `
				<span>
					${item.name}
					<img class="m-rl-3" src="images/icons/icon-multiply.png" alt="icon">
					${item.quantity}
				</span>

				<span class="total_price_checkout">
					${(item.price * item.quantity)}
				</span>
        `;
        document.querySelector("#show_checkout").innerHTML += item_add;
    });
}
var cart_arr = JSON.parse((localStorage.getItem("cart")) || '[]');
var item_add = "";
if (cart_arr) {
    showCartItem(cart_arr);
}
var price_checkout = Array.from(document.querySelectorAll('.total_price_checkout'));
var arr_total = price_checkout.map(item => Number(item.innerHTML));
let total = 0;
for (let item of arr_total) {
    total += item;
}
document.querySelector('#total_checkout').innerText = total.toLocaleString();
// xác nhận thanh toán
(_a = document.querySelector('#btn-order')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    let valid = document.querySelector("#valid");
    let first_name = document.querySelector("#first-name").value.trim();
    let last_name = document.querySelector("#last-name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let address = document.querySelector("#address").value.trim();
    if ((first_name == '') || (last_name == '')) {
        alert("Chưa nhập họ tên");
        return;
    }
    if (address == "") {
        alert("Chưa nhập địa chỉ");
        return;
    }
    if (phone == "") {
        alert("Chưa nhập số điện thoại");
        return;
    }
    if (email == "") {
        alert("Chưa nhập email");
        return;
    }
    let orderInfor = {
        customer_name: `${first_name} ${last_name}`,
        customer_address: address,
        customer_email: email,
        customer_phone: phone,
        create_date: new Date().toISOString().slice(0, 10),
        status: "Chờ xác nhận",
    };
    let url = "http://localhost:3000/orders";
    let options = {
        method: "POST",
        body: JSON.stringify(orderInfor),
        headers: { "Content-Type": "application/json" },
    };
    fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
        var order_id = data.id;
        saveDetailOrder(order_id);
    });
});
// save order details
const saveDetailOrder = async (order_id) => {
    let cart_to_order = JSON.parse(localStorage.getItem("cart") || '{}');
    cart_to_order.forEach(async (item) => {
        let objItem = {
            order_id: order_id,
            product_id: item.id,
            quantity: item.quantity,
            unti_price: item.price,
        };
        var url = "http://localhost:3000/order_detail";
        let options = {
            method: "POST",
            body: JSON.stringify(objItem),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(url, options);
        return response.json();
    });
    document.location = "successful.html";
};
