btnAdd = document.querySelector("#btn-adddm");
btnAdd.onclick = function () {
    url = "http://localhost:3000/categoies";

    sp = {
        name: document.querySelector("#dm-name").value.trim(),
    }

    options = {
        method: "post",
        body: JSON.stringify(sp),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        alert("Đã thêm danh mục sản phẩm thành công");
    })
}

// Hiển thị danh mục sản phẩm
url = "http://localhost:3000/categoies";

fetch(url)
.then(res => res.json())
.then(listDM => {
    listDM.forEach(sp => {
        arr_dm = `
        <tr>
        <td class="text-center">
          <input type="checkbox" id="check6-td1" name="check6-td1" />
        </td>
        <td class="text-center">${sp.id}</td>
        <td><a href="javascript:void(0)">${sp.name}</a></td>
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
              onclick="xoaSP(${sp.id});"
              data-toggle="tooltip"
              title="Xóa"
              class="btn btn-xs btn-danger"
              ><i class="fa fa-times"></i
            ></a>
          </div>
        </td>
      </tr>
        `;
        document.querySelector('#show_categoies').innerHTML += arr_dm;
    })
})

function xoaSP(id){
    const question = confirm("Chắc chắn xóa danh mục sản phẩm?");
    if(question == false) return;
    url = `http://localhost:3000/categoies/${id}`;
    fetch(url, {method:"delete"})
    .then(res => res.json())
    .then(data => {
        alert("Xóa thành công");
        document.location = "adddmsp.html";
    })
}