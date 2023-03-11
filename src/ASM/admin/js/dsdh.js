// Hiển thị danh sách đơn hàng
url = "http://localhost:3000/orders";

fetch(url)
.then(res => res.json())
.then(listDH => {
    listDH.forEach(dh => {
        arr_order = `
        <tr>
        <td class="text-center">
          <input type="checkbox" id="check6-td1" name="check6-td1" />
        </td>
        <td class="text-center">${dh.id}</td>
        <td><a href="javascript:void(0)">${dh.customer_name}</a></td>
        <td class="hidden-xs hidden-sm">${dh.customer_address}</td>
        <td class="hidden-xs hidden-sm">${dh.customer_email}</td>
        <td class="hidden-xs hidden-sm">${dh.customer_phone}</td>
        <td class="hidden-xs hidden-sm">${dh.create_date}</td>
        <td class="hidden-xs hidden-sm">${dh.status}</td>
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
              onclick="xoaSP(${dh.id});"
              data-toggle="tooltip"
              title="Xóa"
              class="btn btn-xs btn-danger"
              ><i class="fa fa-times"></i
            ></a>
          </div>
        </td>
      </tr>
        `;
        document.querySelector('#show_order').innerHTML += arr_order;
    })
})

function xoaSP(id){
    const question = confirm("Chắc chắn xóa đơn hàng?");
    if(question == false) return;
    url = `http://localhost:3000/orders/${id}`;
    fetch(url, {method:"delete"})
    .then(res => res.json())
    .then(data => {
        alert("Xóa thành công");
        document.location = "dsdh.html";
    })
}