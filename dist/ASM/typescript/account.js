"use strict";
let btnUS = document.querySelector("#btn-user");
btnUS === null || btnUS === void 0 ? void 0 : btnUS.addEventListener("click", () => {
    let url = "http://localhost:3000/users";
    let userss = {
        email: document.querySelector("#user-email").value.trim(),
        password: document.querySelector("#user-password").value.trim(),
        name_users: document.querySelector("#user-name").value.trim(),
        phone: document.querySelector("#user-phone").value.trim()
    };
    let options = {
        method: "post",
        body: JSON.stringify(userss),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
        alert("Đã đăng ký tài khoản thành công");
    });
});
