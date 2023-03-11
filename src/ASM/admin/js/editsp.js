// Lấy chi tiết sản phẩm
let params = new URLSearchParams(location.search);
let id = params.get("id");
url = `http://localhost:3000/products/${id}`;
fetch(url)
.then(res => res.json())
.then(detail => {
    document.querySelector("#product-name").value = detail.name;
    document.querySelector("#product-price").value = (detail.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    document.querySelector("#product-image").value = detail.image;
    document.querySelector("#product-detail").value = detail.detail;
    document.querySelector("#product-loai").value = detail.cat_id;
})

btnAdd = document.querySelector("#btn-add");
btnAdd.onclick = function () {
    url = `http://localhost:3000/products/${id}`;

    sp = {
        name: document.querySelector("#product-name").value.trim(),
        price: document.querySelector("#product-price").value.trim(),
        image: document.querySelector("#product-image").value.trim(),
        detail: document.querySelector("#product-detail").value.trim(),
        cat_id: document.querySelector("#product-loai").value.trim()
    }

    options = {
        method: "put",
        body: JSON.stringify(sp),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        document.location = "dssp.html"; 
    })
}