
url1 = "http://localhost:3000/categoies";
url2 = "http://localhost:3000/products";

fetch(url1)

.then(res => res.json())

.then(listMenu => {
    
    listMenu.forEach(mn => {
        
            str2 = `
                <button class="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10 how-active1" data-filter=".${mn.name2}">
                    ${mn.name}
                </button>
            `;
            document.querySelector('#categoies2').innerHTML += str2;        
   
    
    
        str = `
                <li><a href="#">${mn.name}</a></li>
            `;
        document.querySelector('#categoies').innerHTML += str;

    })   
        
    
});


fetch(url2)

.then(res => res.json())

.then(listSP => {
    listSP.forEach(sp => {
        str = `
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item laptop">
                <!-- Block1 -->
                    <div class="block1">
                        <div class="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04 p-t-10">
                            <a href="product-single.html?id=${sp.id}"><img src="${sp.image}" alt="${sp.name}" class="image_sp" style="height:268px; width:268px;"></a>	
                            
                            <div class="flex-col-c-m p-b-46">
                                <a href="product-single.html?id=${sp.id}" class="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1 p-t-20">
                                    ${sp.name}
                                </a>

                                <span class="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                    ${sp.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                                </span>

                                <div class="block1-wrap-icon flex-c-m flex-w trans-05">
                                    <a href="product-single.html?id=${sp.id}" class="block1-icon flex-c-m wrap-pic-max-w">
                                        <img src="images/icons/icon-view.png" alt="ICON">
                                    </a>

                                    <a href="#" class="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                        <img src="images/icons/icon-cart.png" alt="ICON"
                                        onclick="addCart(${sp.id},'${sp.name}',${sp.price},'${sp.image}');" >
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
                document.querySelector('#products').innerHTML += str;
    })
})


function addCart(id, ten, gia, hinh){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart==null){
        cart = [];
        cart.push({id: id, name: ten, price: gia, image: hinh, quantity: 1});
    }else{
        let item = cart.find(item => item.id === id);
        if(item) item.quantity++;
        else cart.push({id: id, name: ten, price: gia, image: hinh, quantity: 1});
		
    }
	alert("Thêm vào giỏ hàng thành công");
    localStorage.setItem("cart", JSON.stringify(cart));
	
}

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
						${(item.quantity*item.price)}
					</span>
				</div>
			</div>
		</div>
        `;
        document.querySelector("#show_right").innerHTML += item_add;
    });
}

var cart_arr = JSON.parse(localStorage.getItem("cart")) || "";
var item_add = "";
if (cart_arr) {
    showCartItem(cart_arr);
}

var price_checkout= Array.from(document.querySelectorAll('.total_price_right'));

var arr_total = price_checkout.map(item=>Number(item.innerText)) ;

let total = 0;
    for (let item of arr_total) {
        total += item;
    }


document.querySelector('#total_right').innerText = total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

