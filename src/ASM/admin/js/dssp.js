// Hiển thị danh sách sản phẩm
url = "http://localhost:3000/products";

fetch(url)
.then(res => res.json())
.then(listSP => {
    listSP.forEach(sp => {
        arr_sp = `
        <tr>
        <td class="text-center">
          <input type="checkbox" id="check6-td1" name="check6-td1" />
        </td>
        <td class="text-center">${sp.id}</td>
        <td>
          <a href="javascript:void(0)">${sp.name}</a>
        </td>
        <td class="hidden-xs hidden-sm">
          <img
            src="${sp.image}"
            alt="${sp.name}"
          />
        </td>
        <td class="hidden-xs hidden-sm">${sp.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
        <td class="hidden-xs hidden-sm">
        ${sp.detail}
        </td>
        <td class="hidden-xs hidden-sm">
        ${sp.cat_id}
        </td>
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
              href="editsp.html?id=${sp.id}"
              data-toggle="tooltip"
              title="Sửa"
              class="btn btn-xs btn-success"
              ><i class="fa fa-pencil"></i
            ></a>
            <a
              href="#" onclick="xoaSP(${sp.id});"
              data-toggle="tooltip"
              title="Xóa"
              class="btn btn-xs btn-danger"
              ><i class="fa fa-times"></i
            ></a>
          </div>
        </td>
      </tr>
        `;
        document.querySelector('#show_products').innerHTML += arr_sp;
    })
})

function xoaSP(id){
    const question = confirm("Chắc chắn xóa sản phẩm?");
    if(question == false) return;
    url = `http://localhost:3000/products/${id}`;
    fetch(url, {method:"delete"})
    .then(res => res.json())
    .then(data => {
        alert("Xóa thành công");
        document.location = "dssp.html";
    })
}