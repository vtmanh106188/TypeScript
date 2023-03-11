class nhanVien {
    id: number;
    gender: string;
    name: {
        first: string;
        last: string;
    };
    dob: Date;
    point: number;
    image: string;

    constructor(id:number, gender:string, name:{first:string,last:string}, dob:Date, point:number, image:string){
        this.id = id;
        this.gender = gender;
        this.name = name;
        this.dob = dob;
        this.point = point;
        this.image = image;
    }
}


const getUser = async() => {
    try {
        const url: Response = await fetch('http://localhost:3000/user');
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

    for(var i=0; i < users.length; i++) {
        let fullName:string = users[i].name.first + " " + users[i].name.last;
        let gender:string = users[i].gender == 'male' ? 'Nam' : 'Nữ';
        let image:string = users[i].image;

        var user = `<tr>
            <td><img src='${image}'></td>
            <td>${fullName}</td>
            <td>${users[i].dob}</td>
            <td>${gender}</td>
            <td>${users[i].point}</td>
            
        </tr>`

        if(table) table.innerHTML += user;
    }

    

    
})();