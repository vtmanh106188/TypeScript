let btnAdd = document.querySelector("#btn-add");
btnAdd?.addEventListener("click", () => {
    var urlProDucts = "http://localhost:3000/products";

    let sp = {
        name: (<HTMLInputElement>document.querySelector("#product-name")).value.trim(),
        price: (<HTMLInputElement>document.querySelector("#product-price")).value.trim(),
        image: (<HTMLInputElement>document.querySelector("#product-image")).value.trim(),
        detail: (<HTMLInputElement>document.querySelector("#product-detail")).value.trim(),
        cat_id: (<HTMLInputElement>document.querySelector("#product-loai")).value.trim()
    }

    let options = {
        method: "post",
        body: JSON.stringify(sp),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(urlProDucts, options)
    .then(res => res.json())
    .then(data => {
        alert("Đã thêm sản phẩm thành công");
    })
})