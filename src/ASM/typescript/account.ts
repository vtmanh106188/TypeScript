let btnUS = document.querySelector("#btn-user");
btnUS?.addEventListener("click" ,  () => {
    let url = "http://localhost:3000/users";
    
    let userss = {
        email: (<HTMLInputElement>document.querySelector("#user-email")).value.trim(),
        password: (<HTMLInputElement>document.querySelector("#user-password")).value.trim(),
        name_users: (<HTMLInputElement>document.querySelector("#user-name")).value.trim(),
        phone: (<HTMLInputElement>document.querySelector("#user-phone")).value.trim()
    }

    let options = {
        method: "post",
        body: JSON.stringify(userss),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
            alert("Đã đăng ký tài khoản thành công");
    })
})