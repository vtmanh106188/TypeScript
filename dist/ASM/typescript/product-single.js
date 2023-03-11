"use strict";
// Lấy chi tiết sản phẩm
let params2 = new URLSearchParams(location.search);
let id2 = params2.get("id");
let url2 = `http://localhost:3000/products/${id2}`;
fetch(url2)
    .then(res => res.json())
    .then(e => {
    console.log(e);
    var str = `
    <div class="container">
    <div class="row">
      <div class="col-md-7 col-lg-6">
        <div class="m-r--30 m-r-0-lg">
          <!-- Slide 100 -->
          <div id="slide100-01">
            <div class="wrap-main-pic-100 bo-all-1 bocl12">
              
                <div class="wrap-main-pic">
                  <div class="main-pic" id="detail-image">
                    <img src="${e.image}" alt="IMG-SLIDE" style="height: 450px; width: 450px; margin-left:80px;"/>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5 col-lg-6">
        <div class="p-l-70 p-t-35 p-l-0-lg">
          <h4 class="js-name1 txt-l-104 cl3 p-b-16" id="detail-name">${e.name}</h4>
                
          <span class="txt-m-117 cl9" id="detail-price"> ${e.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} </span>

          <div class="flex-w flex-m p-t-30 p-b-27">
            <span class="fs-16 cl11 lh-15 txt-center m-r-15">
              <i class="fa fa-star m-rl-1"></i>
              <i class="fa fa-star m-rl-1"></i>
              <i class="fa fa-star m-rl-1"></i>
              <i class="fa fa-star m-rl-1"></i>
              <i class="fa fa-star m-rl-1"></i>
            </span>
          </div>

          <p class="txt-s-101 cl6" id="detail-detail">${e.detail}</p>

          <div class="flex-w flex-m p-t-55 p-b-30">
            <div
              class="wrap-num-product flex-w flex-m bg12 p-rl-10 m-r-30 m-b-30"
            >
              <div class="btn-num-product-down flex-c-m fs-29" onclick="minus2(${e.id});"></div>

              <input
                class="txt-m-102 cl6 txt-center num-product"
                type="text"
                name="num-product"
                id="quantity"
                value="1"
              />

              <div class="btn-num-product-up flex-c-m fs-16" onclick="plus2(${e.id});"></div>
            </div>

            <button
              class="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 m-b-30 js-addcart1"
              onclick="addCart2(${e.id},'${e.name}',${e.price},'${e.image}');" id="btnPS"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab01 -->
    <div class="tab02 p-t-80">
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-toggle="tab"
            href="#description"
            role="tab"
            >Mô Tả</a
          >
        </li>

        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#info" role="tab"
            >Thông số kỹ thuật</a
          >
        </li>

        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#reviews" role="tab"
            >Đánh giá (100k)</a
          >
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <!-- - -->
        <div
          class="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div class="p-t-30">
            <p class="txt-s-112 cl9">
             ${e.detail}
            </p>
          </div>
        </div>

        <!-- - -->
        <div class="tab-pane fade" id="info" role="tabpanel">
          <ul class="p-t-21">
            <li class="txt-s-101 flex-w how-bor2 p-tb-14">
              <span class="cl6 size-w-54"> Màn hình </span>

              <span class="cl9 size-w-55"> OLED6.7"Super Retina XDR </span>
            </li>

            <li class="txt-s-101 flex-w how-bor2 p-tb-14">
              <span class="cl6 size-w-54"> Hệ điều hành </span>

              <span class="cl9 size-w-55"> iOS 16 </span>
            </li>

            <li class="txt-s-101 flex-w how-bor2 p-tb-14">
              <span class="cl6 size-w-54"> Chip </span>

              <span class="cl9 size-w-55"> Apple A16 Bionic 6 nhân </span>
            </li>
          </ul>
        </div>

        <!-- - -->
        <div class="tab-pane fade" id="reviews" role="tabpanel">
          <div class="p-t-36">
            <h5 class="txt-m-102 cl3 p-b-36">1 review for Cauliflower</h5>

            <div class="flex-w flex-sb-t bo-b-1 bocl15 p-b-37">
              <div class="wrap-pic-w size-w-56">
                <img src="images/avatar-03.jpg" alt="AVATAR" />
              </div>

              <div class="size-w-57 p-t-2">
                <div class="flex-w flex-sb-m p-b-8">
                  <div class="flex-w flex-b m-r-20 p-tb-5">
                    <span class="txt-m-103 cl6 m-r-20">
                      Crystal Jimenez
                    </span>

                    <span class="txt-s-120 cl9">
                      ( United States – June 21, 2017 )
                    </span>
                  </div>

                  <span class="fs-16 cl11 lh-15 txt-center m-r-15 p-tb-5">
                    <i class="fa fa-star m-rl-1"></i>
                    <i class="fa fa-star m-rl-1"></i>
                    <i class="fa fa-star m-rl-1"></i>
                    <i class="fa fa-star m-rl-1"></i>
                    <i class="fa fa-star m-rl-1"></i>
                  </span>
                </div>

                <p class="txt-s-101 cl6">
                  Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure
                  Latin words, consectetur.
                </p>
              </div>
            </div>

            <!-- Add review -->
            <form class="w-full p-t-42">
              <h5 class="txt-m-102 cl3 p-b-20">Add a review</h5>

              <p class="txt-s-101 cl6 p-b-10">
                Your email address will not be published. Required fields
                are marked *
              </p>

              <div class="flex-w flex-m p-b-3">
                <span class="txt-s-101 cl6 p-b-5 m-r-10">
                  Your Rating
                </span>

                <span class="wrap-rating fs-16 cl11 pointer">
                  <i class="item-rating pointer fa fa-star-o m-rl-1"></i>
                  <i class="item-rating pointer fa fa-star-o m-rl-1"></i>
                  <i class="item-rating pointer fa fa-star-o m-rl-1"></i>
                  <i class="item-rating pointer fa fa-star-o m-rl-1"></i>
                  <i class="item-rating pointer fa fa-star-o m-rl-1"></i>
                  <input class="dis-none" type="number" name="rating" />
                </span>
              </div>

              <span class="txt-s-101 cl6"> Your review * </span>

              <div class="row p-t-12">
                <div class="col-sm-6 p-b-30">
                  <input
                    class="txt-s-101 cl3 plh1 size-a-25 bo-all-1 bocl11 focus1 p-rl-20"
                    type="text"
                    name="name"
                    placeholder="Name *"
                  />
                </div>

                <div class="col-sm-6 p-b-30">
                  <input
                    class="txt-s-101 cl3 plh1 size-a-25 bo-all-1 bocl11 focus1 p-rl-20"
                    type="text"
                    name="email"
                    placeholder="Email *"
                  />
                </div>

                <div class="col-12 p-b-30">
                  <textarea
                    class="txt-s-101 cl3 plh1 size-a-26 bo-all-1 bocl11 focus1 p-rl-20 p-tb-10"
                    name="review"
                    placeholder="Your review *"
                  ></textarea>
                </div>
              </div>

              <div class="flex-r">
                <button
                  class="flex-c-m txt-s-103 cl0 bg10 size-a-27 hov-btn2 trans-04"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    document.querySelector('#product_item').innerHTML = str;
});
function addCart2(id, ten, gia, hinh) {
    let value_quantity = document.querySelector("#quantity").value;
    var cart = JSON.parse(localStorage.getItem("cart") || '[]');
    if (cart == '') {
        cart = [];
        cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: value_quantity });
    }
    else {
        let item = cart.find((item) => item.id === id);
        if (item)
            item.quantity++;
        else
            cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: value_quantity });
    }
    alert("Thêm vào giỏ hàng thành công");
    localStorage.setItem("cart", JSON.stringify(cart));
    document.location = "shop-cart.html";
}
const plus2 = (index) => {
    document.querySelectorAll('.num-product')[index].value = (Number(document.querySelectorAll('.num-product')[index].value) + 1).toString();
    let count = document.querySelectorAll('.num-product')[index].value;
    cart_arr[index].quantity++;
    let new_carr = [...cart_arr];
    localStorage.setItem('cart', JSON.stringify(new_carr));
};
const minus2 = (index) => {
    Number(document.querySelectorAll('.num-product')[index].value) == 1 ?
        document.querySelectorAll('.num-product')[index].value = (Number(document.querySelectorAll('.num-product')[index].value) + 1).toString() :
        document.querySelectorAll('.num-product')[index].value = (Number(document.querySelectorAll('.num-product')[index].value) - 1).toString();
    let count = Number(document.querySelectorAll('.num-product')[index].value);
    if (cart_arr[index].quantity == 1) {
        cart_arr[index].quantity = 1;
    }
    else {
        cart_arr[index].quantity--;
    }
    let new_carr = [...cart_arr];
    localStorage.setItem('cart', JSON.stringify(new_carr));
};
