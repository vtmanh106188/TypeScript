class  tea {
    name  :string ;
    price : number;
    image : string;

    constructor(name:string, price:number, image:string) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
};

async function getPhucLong () {
    try {
        const url = "http://localhost:3000/data";
        const response = await fetch(url);
        const data = await response.json();
        return data;
        

    } catch (e) {
        console.log(e);
        
    }
}


(async ()=> {
    var data=[];
    data = await getPhucLong ();
    console.log(data);
    
    data.forEach ((e : any, index : number) => {

        var tea : tea = {
            name : e.name,
            price : e.price,
            image : e.image
        }
        

        var element = document.createElement('div');
        var name = document.createElement('h1');
        var image = document.createElement('img');
        var price = document.createElement('p');
        var content = document.createElement('div');
        content.setAttribute('class','contetn-pl');

        document.querySelector('.container')?.appendChild(element);
        var button = document.createElement('button');
        button.innerText = 'Đặt hàng';
        name.innerText = e.name;
        image.src = e.image;
        price.innerText = e.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

        content.appendChild(price);
        content.appendChild(button);
        element.appendChild(image);
        element.appendChild(name);
        element.appendChild(content);


    })
})()