class userss {
    id: string;
    name: string;
    salary: number;
    bonus?: number;
    allowance?: number;

    constructor(id: string, name: string, salary: number, bonus: number, allowance: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
        this.allowance = allowance;
    }
}

async function getData() {
    try {
        const url = "http://localhost:3000/nhanvien";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

var userList: { id: string; name: string; salary: number; bonus?: number; allowance?: number }[] = [];
var showData = async function () {
    let data = [];
    data = await getData();
    console.log(data);
    var userList = [];

    for (var i = 0; i < data.length; i++) {
        var user = {
            id: data[i].id,
            name: data[i].name,
            salary: data[i].salary,
            bonus: data[i].bonus,
            allowance: data[i].allowance,
        };
        userList.push(user);
    }

    var inforUser = document.querySelector(".infor-user");
    userList.forEach((e) => {
        var addUserDom = `
            <tr >
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.salary}</td>
                <td>${e.bonus}</td>
                <td>${e.allowance}</td>
            </tr>
        `;
        if (inforUser) inforUser.innerHTML += addUserDom;
    });
    userList = [];
};

showData();

// them data vào db.json
async function postData(url = "", data = {}) {
    var option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url, option);
    const dataUser = await response.json();
    return dataUser;
}

// async function putData(url = "", data = {}) {
//     var option = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data),
//     };
//     const response = await fetch(url, option);
//     const dataUser = await response.json();
//     return dataUser;
// }

var save = document.querySelector("#saveButton");

save?.addEventListener("click", async () => {
    var idUser = (<HTMLInputElement>document.querySelector("#id")).value;
    var nameUser = (<HTMLInputElement>document.querySelector("#name")).value;
    var salaryUser = (<HTMLInputElement>document.querySelector("#salary")).value;
    var bonusUser = (<HTMLInputElement>document.querySelector("#bonus")).value;
    var allowanceUser = (<HTMLInputElement>document.querySelector("#allowance")).value;

    var inforNew: userss = {
        id: idUser,
        name: nameUser,
        bonus: Number(bonusUser),
        salary: Number(salaryUser),
        allowance: Number(allowanceUser),
    };

    var dsUser = [];
    dsUser = await getData();
    var check =  dsUser.find((e: { id: string|number; })=> e.id==idUser);

    if (idUser == "") {

    }else if(check){
        alert('Mã nhân viên đã tồn tại');
        var frm = document.querySelector('#frm');
        if(frm){
            
        } 
    } else {
        postData("http://localhost:3000/nhanvien", inforNew);
        showData();
    }
    (<HTMLInputElement>document.querySelector("#labelTab2")).click();
});

document.querySelector("#cancelButton")?.addEventListener("click", () => {
    (<HTMLInputElement>document.querySelector("#id")).value = "";
    (<HTMLInputElement>document.querySelector("#name")).value = "";
    (<HTMLInputElement>document.querySelector("#bonus")).value = "";
    (<HTMLInputElement>document.querySelector("#salary")).value = "";
    (<HTMLInputElement>document.querySelector("#allowance")).value = "";
});


(<HTMLInputElement>document.querySelector("#labelTab2")).click();
// thêm data vào db.json