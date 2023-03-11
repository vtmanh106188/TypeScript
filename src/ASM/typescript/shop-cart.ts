// Show cart
function showCartItemInCart(arr:any) {
    arr.forEach((item:any, index:any) => {
        item_add = `
        <tr class="table_row">
            <td class="column-1">
                <div class="flex-w flex-m">
                    <div class="wrap-pic-w size-w-50 bo-all-1 bocl12 m-r-30">
                        <img src="${item.image}" alt="${item.name}">
                    </div>

                    <span>
                        ${item.name}
                    </span>
                </div>
            </td>
            <td class="column-2 gia">
                ${item.price}
            </td>
            <td class="column-3">
                <div class="wrap-num-product flex-m bg12 p-rl-10">
                    <div class="input-group-btn">
                        <button class="btn btn-sm btn-primary btn-minus" onclick="minus(${index})" >
                            <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    
                    <input class="txt-m-102 cl6 txt-center num-product" type="text" name="num-product1" value="${item.quantity}"
                    onkeyup="tinhTien(${item.price},this.value,${index});">

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
                        ${(item.price*item.quantity)}
                    </span>

                    <div class="fs-15 hov-cl10 pointer" id="delete_shopcart">
                        <span class="lnr lnr-cross" onclick="deleteCart(${index})"></span>
                    </div>
                </div>
            </td>
        </tr>
    `;
        (document.querySelector('#shop_cart') as HTMLInputElement).innerHTML+=item_add;
    });
    
}
var cart_arr = JSON.parse(localStorage.getItem("cart")||'[]');
var item_add = "";
if (cart_arr) {
    showCartItemInCart(cart_arr);
}

// caculate Price
const tinhTien = (count:any,index:any)=>{
    let price_item = Number((document.getElementsByClassName('gia')[index] as HTMLInputElement).innerText);
    let total = price_item*count;
    (document.getElementsByClassName('tien')[index] as HTMLInputElement).innerText = String(total);
    tinhTongTien();
}

const tinhTongTien = ()=>{
    let arr_total_element = Array.from(document.getElementsByClassName('tien'));
    const arr_total = arr_total_element.map(item=>Number((item as HTMLInputElement).innerText)) ;
    
    let total = 0;
    for (let item of arr_total) {
        total+=item;
    }

    (document.querySelector('#total_shopcart') as HTMLInputElement).innerText = String(total);
}
tinhTongTien()

// Plus and minuend
const plus = (index:any)=> {
    (document.querySelectorAll('.num-product')[index]as HTMLInputElement).value=(Number((document.querySelectorAll('.num-product')[index]as HTMLInputElement).value)+1).toString();
    let count = (document.querySelectorAll('.num-product')[index]as HTMLInputElement).value;
    cart_arr[index].quantity++;
    let new_carr = [...cart_arr]
    localStorage.setItem('cart', JSON.stringify(new_carr));

    tinhTien(count,index)
}
const minus = (index:any)=> {
    Number((document.querySelectorAll('.num-product')[index]as HTMLInputElement).value)==1 ?
    (document.querySelectorAll('.num-product')[index]as HTMLInputElement).value=(Number((document.querySelectorAll('.num-product')[index]as HTMLInputElement).value)+1).toString() :
    (document.querySelectorAll('.num-product')[index]as HTMLInputElement).value=(Number((document.querySelectorAll('.num-product')[index]as HTMLInputElement).value)-1).toString()

    let count = Number((document.querySelectorAll('.num-product')[index]as HTMLInputElement).value);

    
    if(cart_arr[index].quantity==1) {
        cart_arr[index].quantity=1;
    } else {
        cart_arr[index].quantity--;
    }

    let new_carr = [...cart_arr]
    localStorage.setItem('cart', JSON.stringify(new_carr));
    
    tinhTien(count,index)
}

// Delete 
const deleteCart = (index:any)=> {
    cart_arr.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(cart_arr));
    (document.querySelector('#shop_cart')as HTMLInputElement).innerHTML=''
    showCartItemInCart(cart_arr)
    tinhTongTien();
}


// to page Pay
(document.querySelector('#checkOut')as HTMLInputElement).onclick=()=> {
    document.location='checkout.html'
}

