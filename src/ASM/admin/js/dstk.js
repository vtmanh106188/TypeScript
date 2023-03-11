// Hiển thị danh sách sản phẩm
url = "http://localhost:3000/users";

fetch(url)
.then(res => res.json())
.then(listUS => {
    listUS.forEach(us => {
        arr_us = `
        <tr>
        <td class="text-center">
          <input type="checkbox" id="check6-td1" name="check6-td1" />
        </td>
        <td class="text-center">${us.id}</td>
        <td><a href="javascript:void(0)">${us.email}</a></td>
        <td class="hidden-xs hidden-sm">${us.password}</td>
        <td class="hidden-xs hidden-sm">${us.name_users}</td>
        <td class="hidden-xs hidden-sm">${us.phone}</td>
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
              href="edittk.html?id=${us.id}"
              data-toggle="tooltip"
              title="Sửa"
              class="btn btn-xs btn-success"
              ><i class="fa fa-pencil"></i
            ></a>
            <a
              href="javascript:void(0)"
              onclick="xoaSP(${us.id});"
              data-toggle="tooltip"
              title="Xóa"
              class="btn btn-xs btn-danger"
              ><i class="fa fa-times"></i
            ></a>
          </div>
        </td>
      </tr>
        `;  
        document.querySelector('#show_users').innerHTML += arr_us;
    })
})

function xoaSP(id){
    const question = confirm("Chắc chắn xóa tài khoản?");
    if(question == false) return;
    url = `http://localhost:3000/users/${id}`;
    fetch(url, {method:"delete"})
    .then(res => res.json())
    .then(data => {
        alert("Xóa thành công");
        document.location = "dstk.html";
    })
}