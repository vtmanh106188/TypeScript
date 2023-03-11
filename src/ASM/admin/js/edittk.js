// Lấy chi tiết sản phẩm
let params = new URLSearchParams(location.search);
let id = params.get("id");
url = `http://localhost:3000/users/${id}`;
fetch(url)
.then(res => res.json())
.then(detail => {
    console.log(detail);
    document.querySelector("#user-email").value = detail.email;
    document.querySelector("#user-password").value = detail.password;
    document.querySelector("#user-name").value = detail.name_users;
    document.querySelector("#user-phone").value = detail.phone;
})

btnAdd = document.querySelector("#btn-add");
btnAdd.onclick = function () {
    url = `http://localhost:3000/users/${id}`;

    sp = {
        email: document.querySelector("#user-email").value.trim(),
        password: document.querySelector("#user-password").value.trim(),
        name_users: document.querySelector("#user-name").value.trim(),
        phone: document.querySelector("#user-phone").value.trim(),
    }

    options = {
        method: "put",
        body: JSON.stringify(sp),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        document.location = "dstk.html"; 
    })
}