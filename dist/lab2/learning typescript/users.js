"use strict";
class nhanVien {
    constructor(id, gender, name, dob, point, image) {
        this.id = id;
        this.gender = gender;
        this.name = name;
        this.dob = dob;
        this.point = point;
        this.image = image;
    }
}
const getUser = async () => {
    try {
        const url = await fetch('http://localhost:3000/user');
        const data = await url.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
};
(async () => {
    var users = [];
    users = await getUser();
    console.log(users.length);
    var table = document.querySelector('table > tbody');
    for (var i = 0; i < users.length; i++) {
        let fullName = users[i].name.first + " " + users[i].name.last;
        let gender = users[i].gender == 'male' ? 'Nam' : 'Nữ';
        let image = users[i].image;
        var user = `<tr>
            <td><img src='${image}'></td>
            <td>${fullName}</td>
            <td>${users[i].dob}</td>
            <td>${gender}</td>
            <td>${users[i].point}</td>
            
        </tr>`;
        if (table)
            table.innerHTML += user;
    }
})();
