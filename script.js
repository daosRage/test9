document.addEventListener("DOMContentLoaded", function() {
product_data = {
        1: {
            name: "notebook1",
            img: "image/img.png",
            price: 12000,
            about: "srt hrt rthrt hrth erg er"
        },
        2: {
            name: "notebook2",
            img: "image/img.png",
            price: 22000,
            about: "r htyj ty utjktyjtyj tyjtyjt"
        },
        3: {
            name: "notebook3",
            img: "image/img.png",
            price: 32000,
            about: ""
        },
        4: {
            name: "notebook4",
            img: "image/img.png",
            price: 42000,
            about: ""
        },
        5: {
            name: "notebook5",
            img: "image/img.png",
            price: 52000,
            about: ""
        },
        6: {
            name: "notebook",
            img: "image/img.png",
            price: 12000,
            about: ""
        },
        7: {
            name: "notebook",
            img: "image/img.png",
            price: 12000,
            about: ""
        },
        8: {
            name: "notebook",
            img: "image/img.png",
            price: 12000,
            about: ""
        },
        9: {
            name: "notebook",
            img: "image/img.png",
            price: 12000,
            about: ""
        }
        
}
basket_data = {

}

let catalog = document.querySelector(".catalog")
let countBuy = document.querySelector(".count-buy")
let basket = document.querySelector(".basket")
let basketList = document.querySelector(".basket-list")
let delete_item = document.querySelector(".delete")
let countPrice = document.querySelector(".sum-price")
        


basket.addEventListener("click", function() {
    location.href = "basket.html"
})
if (delete_item){
    delete_item.addEventListener("click", function(){
        localStorage.clear()
        countPrice.innerHTML = ""
        add_basket_buy()
    })
}



function add_data(){
    for(let i = 1; i <= Object.keys(product_data).length; i += 1)
        catalog.innerHTML += `  
    <article class="product">
        <img src="${product_data[i]['img']}">
        <div class="product-name">${product_data[i]['name']}</div>
        <div class="product-about">${product_data[i]['about']}</div>
        <div class="product-list">
            <div class="product-price">${product_data[i]['price']} грн.</p>
            <a class="product-button">Купити</a>
        </div>
    </article>`
}
if (catalog){
    add_data()
}
let productButton = document.querySelectorAll(".product-button")

//EVENT BUTTON
if (productButton.length != 0){
    for(let i = 1; i <= Object.keys(product_data).length; i += 1){
        productButton[i-1].addEventListener("click", function(){
            countBuy.innerHTML = +countBuy.innerHTML + 1
            countPrice += product_data[i]["price"]
            if ( !localStorage.getItem(i.toString())){
                localStorage.setItem(i, JSON.stringify({  name: product_data[i]["name"],
                                    img: product_data[i]["img"],
                                    price: product_data[i]["price"],
                                    count: 1
                }))

            } else{
                temp = JSON.parse(localStorage.getItem(i.toString()) || "{}")
                temp["count"] += 1 
                localStorage.setItem(i.toString(), JSON.stringify(temp))
            }
        })
    }
}

function add_basket_buy(){
    basketList.innerHTML = ""
    countPrice.innerHTML = ""
    if (localStorage.length == 0){
        basketList.innerHTML = "<h1>У вашому кошику пусто</h1>"
    } else{

        for (let key in localStorage){
            if (localStorage.hasOwnProperty(key)){
                let tempData = JSON.parse(localStorage.getItem(key) || "{}")
                basketList.innerHTML += `<article class="basket-item">
                                    <img src="${tempData["img"]}">
                                    <div class="basket-name-item">${tempData["name"]}</div>
                                    <div class="basket-count-item">${tempData["count"]}</div>
                                    <div class="basket-count-price">${tempData["price"]} грн.</div>
                                </article>`
                countPrice.innerText = +countPrice.innerText + tempData["price"]
            }}
        countPrice.innerText += " грн."
    }
}     
if (basketList){
    add_basket_buy()
}    

})
