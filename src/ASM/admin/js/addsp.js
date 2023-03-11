btnAdd = document.querySelector("#btn-add");
btnAdd.onclick = function () {
    url = "http://localhost:3000/products";

    sp = {
        name: document.querySelector("#product-name").value.trim(),
        price: document.querySelector("#product-price").value.trim(),
        image: document.querySelector("#product-image").value.trim(),
        detail: document.querySelector("#product-detail").value.trim(),
        cat_id: document.querySelector("#product-loai").value.trim()
    }

    options = {
        method: "post",
        body: JSON.stringify(sp),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        alert("Đã thêm sản phẩm thành công");
    })
}