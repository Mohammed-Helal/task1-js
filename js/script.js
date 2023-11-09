var allproducts = document.querySelectorAll(".card .btn")
var div1 = document.querySelector("#div1")
var btncart = document.querySelector("#btn-cart")
var number = document.querySelector("#number")
var modal = document.querySelector(".price")
var x = 0
var totalprice = 0

allproducts.forEach (function (item){
    item.onclick = function(){
        div1.innerHTML += this.getAttribute("Name") + " - "
        number.innerHTML = ++x
        totalprice += +(item.getAttribute("price"))
    }
})

btncart.onclick = function(){
    modal.innerHTML = (totalprice)
}