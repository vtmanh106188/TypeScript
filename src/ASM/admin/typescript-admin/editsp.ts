// Lấy chi tiết sản phẩm
let params = new URLSearchParams(location.search);
let id = params.get("id");
var url = `http://localhost:3000/products/${id}`;
fetch(url)
.then(res => res.json())
.then(detail => {
    (<HTMLInputElement>document.querySelector("#product-name")).value = detail.name;
    (<HTMLInputElement>document.querySelector("#product-price")).value = detail.price;
    (<HTMLInputElement>document.querySelector("#product-image")).value = detail.image;
    (<HTMLInputElement>document.querySelector("#product-detail")).value = detail.detail;
    (<HTMLInputElement>document.querySelector("#product-loai")).value = detail.cat_id;
})

document.querySelector("#btn-add")?.addEventListener("click", () => {
    url = `http://localhost:3000/products/${id}`;

    let sp = {
        name: (<HTMLInputElement>document.querySelector("#product-name")).value.trim(),
        price: (<HTMLInputElement>document.querySelector("#product-price")).value.trim(),
        image: (<HTMLInputElement>document.querySelector("#product-image")).value.trim(),
        detail: (<HTMLInputElement>document.querySelector("#product-detail")).value.trim(),
        cat_id: (<HTMLInputElement>document.querySelector("#product-loai")).value.trim()
    }

    let options = {
        method: "put",
        body: JSON.stringify(sp),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        document.location = "dssp.html"; 
    })
})

    
