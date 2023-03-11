
function showCartItem(arr) {
	arr.forEach((sp, index) => {
		document.querySelector('#shop_cart').innerHTML += `
			<tr class="table_row">
				<td class="column-1">
					<div class="flex-w flex-m">
						<div class="wrap-pic-w size-w-50 bo-all-1 bocl12 m-r-30">
							<img src="${sp.image}" alt="${sp.name}">
						</div>

						<span>
							${sp.name}
						</span>
					</div>
				</td>
				<td class="column-2 gia">
					${sp.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
				</td>
				<td class="column-3">
					<div class="wrap-num-product flex-m bg12 p-rl-10">
						<div class="input-group-btn">
							<button class="btn btn-sm btn-primary btn-minus" onclick="minus(${index})" >
								<i class="fa fa-minus"></i>
							</button>
						</div>
						
						<input class="txt-m-102 cl6 txt-center num-product" type="text" name="num-product1" value="${sp.quantity}"
						onkeyup="tinhTien(${sp.price},this.value,${index});">

						<div class="input-group-btn">
							<button class="btn btn-sm btn-primary btn-plus" onclick="plus(${index})" >
								<i class="fa fa-plus"></i>
							</button>
						</div>
					</div>
				</td>
				<td class="column-4">
					<div class="flex-w flex-sb-m">
						<span class="tien">
							${(sp.price*sp.quantity).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
						</span>

						<div class="fs-15 hov-cl10 pointer" id="delete_shopcart">
							<span class="lnr lnr-cross" onclick="deleteCart(${index})"></span>
						</div>
					</div>
				</td>
			</tr>
		`;
	});
}

var cart_arr = JSON.parse(localStorage.getItem("cart"));

if (cart_arr) {
    showCartItem(cart_arr);
}

function tinhTien(gia,soluong,index){
	var gia =  Number(document.getElementsByClassName("gia")[index].innerText.slice(0,-3).replaceAll('.',''))
	tien = gia*soluong;
	document.getElementsByClassName("tien")[index].innerHTML = tien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
	tinhTongTien();
}
function tinhTongTien(){
	arrTien = Array.from(document.getElementsByClassName("tien"));
	var arr_tongTien = arrTien.map(item=>Number(item.innerText.slice(0,-3).replaceAll('.','')));
	total = 0;
	for(let item of arr_tongTien){
		total += item;
	}
	document.querySelector('#total_shopcart').innerText = total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
tinhTongTien();

// Plus and minuend
const plus = (index)=> {
document.querySelectorAll('.num-product')[index].value++;
let count = document.querySelectorAll('.num-product')[index].value;
cart_arr[index].quantity++;
let new_carr = [...cart_arr]
localStorage.setItem('cart', JSON.stringify(new_carr));

tinhTien(count,index);
}
const minus = (index)=> {
    document.querySelectorAll('.num-product')[index].value==1 ?
    document.querySelectorAll('.num-product')[index].value=1 :
    document.querySelectorAll('.num-product')[index].value--

    let count = document.querySelectorAll('.num-product')[index].value;

    
    if(cart_arr[index].quantity==1) {
        cart_arr[index].quantity=1;
    } else {
        cart_arr[index].quantity--;
    }

    let new_carr = [...cart_arr]
    localStorage.setItem('cart', JSON.stringify(new_carr));
    
    tinhTien(count,index);
}

// Delete 
const deleteCart = (index)=> {
    cart_arr.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(cart_arr));
    document.querySelector('#shop_cart').innerHTML=''
    showCartItem(cart_arr);
    tinhTongTien();
}


// Chuyển trang đến checkout
	document.querySelector('#checkOut').onclick = function(){
		document.location = "checkout.html";
	}
