// Hiển thị danh sách đơn hàng chi tiết
url = "http://localhost:3000/order_detail";
url2 = "http://localhost:3000/products";
fetch(url)
.then(res => res.json())
.then(listOrDetail => {
    listOrDetail.forEach( or => {
        arr_order_detail = `
        <tr>
        <td class="text-center">
          <input type="checkbox" id="check6-td1" name="check6-td1" />
        </td>
        <td class="text-center">${or.id}</td>
        <td><a href="javascript:void(0)">${or.order_id}</a></td>
        <td class="hidden-xs hidden-sm">${or.product_id}</td>
        <td class="hidden-xs hidden-sm">${or.quantity}</td>
        <td class="hidden-xs hidden-sm">${or.unti_price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
        <td class="text-center">
          <div class="btn-group">
            <a
              href="javascript:void(0)"
              data-toggle="tooltip"
              title="Chi Tiết"
              class="btn btn-xs btn-info"
              ><i class="fa fa-info-circle"></i
            ></a>
            <a
              href="javascript:void(0)"
              data-toggle="tooltip"
              title="Sửa"
              class="btn btn-xs btn-success"
              ><i class="fa fa-pencil"></i
            ></a>
            <a
              href="javascript:void(0)"
              onclick="xoaSP(${or.id});"
              data-toggle="tooltip"
              title="Xóa"
              class="btn btn-xs btn-danger"
              ><i class="fa fa-times"></i
            ></a>
          </div>
        </td>
      </tr>
        `;
        document.querySelector('#show_bill_detail').innerHTML += arr_order_detail;
    })
})

function xoaSP(id){
    const question = confirm("Chắc chắn xóa đơn hàng chi tiết?");
    if(question == false) return;
    url = `http://localhost:3000/order_detail/${id}`;
    fetch(url, {method:"delete"})
    .then(res => res.json())
    .then(data => {
        alert("Xóa thành công");
        document.location = "dsdhct.html";
    })
}