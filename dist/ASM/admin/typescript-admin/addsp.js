"use strict";
let btnAdd = document.querySelector("#btn-add");
btnAdd === null || btnAdd === void 0 ? void 0 : btnAdd.addEventListener("click", () => {
    var urlProDucts = "http://localhost:3000/products";
    let sp = {
        name: document.querySelector("#product-name").value.trim(),
        price: document.querySelector("#product-price").value.trim(),
        image: document.querySelector("#product-image").value.trim(),
        detail: document.querySelector("#product-detail").value.trim(),
        cat_id: document.querySelector("#product-loai").value.trim()
    };
    let options = {
        method: "post",
        body: JSON.stringify(sp),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(urlProDucts, options)
        .then(res => res.json())
        .then(data => {
        alert("Đã thêm sản phẩm thành công");
    });
});
