class Order {
    public id: number | undefined;
    public customer_name: string | undefined;
    public customer_address: string | undefined;
    public customer_email: string | undefined;
    public customer_phone: string | undefined;
    public create_date: Date | undefined;
    public status: string | undefined;
    
    constructor(id: number, customer_name: string,customer_address: string, customer_email: string, customer_phone: string, create_date: Date, status: string) {
        this.id = id;
        this.customer_name = customer_name;
        this.customer_address = customer_address;
        this.customer_email = customer_email;
        this.customer_phone = customer_phone;
        this.create_date = create_date;
        this.status = status;
    }

    public async showOrder(): Promise<any> {
        var dataOrder = `
        <tr>
        <td class="text-center">
          <input type="checkbox" id="check6-td1" name="check6-td1" />
        </td>
        <td class="text-center">${this.id}</td>
        <td><a href="javascript:void(0)">${this.customer_name}</a></td>
        <td class="hidden-xs hidden-sm">${this.customer_address}</td>
        <td class="hidden-xs hidden-sm">${this.customer_email}</td>
        <td class="hidden-xs hidden-sm">${this.customer_phone}</td>
        <td class="hidden-xs hidden-sm">${this.create_date}</td>
        <td class="hidden-xs hidden-sm">${this.status}</td>
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
              onclick="xoaSP3(${this.id});"
              data-toggle="tooltip"
              title="Xóa"
              class="btn btn-xs btn-danger"
              ><i class="fa fa-times"></i
            ></a>
          </div>
        </td>
      </tr>
        `;
        return dataOrder;
    }

}

// interface
var orderList: { id: number, customer_name: string,customer_address: string, customer_email: string, customer_phone: string, create_date: Date, status: string}[] = [];

async function getOrder() {
    try {
        const url = "http://localhost:3000/orders";
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

async function showOrderArray() {
        let data=[];
        data =await getOrder();

        for (let i = 0; i < data.length; i++) {
            const newOrder = new Order(data[i].id, data[i].customer_name, data[i].customer_address, data[i].customer_email, data[i].customer_phone, data[i].create_date, data[i].status);
            orderList.push(await newOrder.showOrder());
        }

        var inforOrder = document.querySelector("#show_order");
        if (inforOrder) inforOrder.innerHTML += orderList.join("");
        orderList=[]
}

showOrderArray()

const xoaSP3 = (id:any) => {
  const accept = confirm('Bạn có chắc sẽ xóa đơn hàng này')
  if(!accept) return
  let url = `http://localhost:3000/orders/${id}`
  fetch(url,{method:'delete'})
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
      alert('Đã xóa')
      document.location = 'dsdh.html'
  })
}