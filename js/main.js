var product_Name=document.getElementById("productName");
var product_Price=document.getElementById("productPrice");
var product_category=document.getElementById("productCategory");
var product_desc=document.getElementById("productDesc");
var addButton=document.getElementById("addProduct");
var inputs=document.getElementsByClassName("form-control");
var searchInput=document.getElementById("search")
var products=[];
var currentIndex=0;
if(JSON.parse(localStorage.getItem("productList"))!=null){
    products=JSON.parse(localStorage.getItem("productList"))
    displayProduct()
}

addButton.onclick=function (){
    if(addButton.innerHTML=="submit"){
        addProduct()
    }else{
        updateProduct()
    }
  
displayProduct()
clearForm()
}
function addProduct(){
    var product={
        name:product_Name.value,
        price:product_Price.value,
        category:product_category.value,
        description:product_desc.value,
       }
       products.push(product)
    localStorage.setItem("productList",JSON.stringify(products))
}
function displayProduct(){
    var box="";
    for(var i=0;i<products.length;i++){
        box+=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].description}</td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
        <td><button onclick="productInfo(${i})" class="btn btn-warning">update</button></td>

        </tr>
        `
    }
    document.getElementById("data").innerHTML=box
}
function productInfo(index){
    currentIndex=index;
   var currentProduct=products[index]
product_Name.value=currentProduct.name;
product_Price.value=currentProduct.price;
product_category.value=currentProduct.category;
product_desc.value=currentProduct.description;
    addButton.innerHTML="update"
    
}

function deleteProduct(index){
    products.splice(index,1)
    displayProduct()
    localStorage.setItem("productList",JSON.stringify(products))
    
}
function clearForm(){
   for(var i=0;i<inputs.length;i++){
    inputs[i].value="";
   }

}
searchInput.onkeyup=function searchValue(){
    var box="";
    for(var i=0;i<products.length;i++){
        if(products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())){
        box+=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].description}</td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
        <td><button class="btn btn-warning">update</button></td>

        </tr>
        `
    }}
    document.getElementById("data").innerHTML=box

}
function updateProduct(){
var product={
    name:product_Name.value,
        price:product_Price.value,
        category:product_category.value,
        description:product_desc.value,
}
products[currentIndex]=product
localStorage.setItem("productList",JSON.stringify(products) )
addButton.innerHTML="submit"

}

alert_Name=document.getElementById("alertName")
product_Name.onkeyup=function(){
    var regexName=/^[A-Z][a-z]{2,8}$/
    if(regexName.test(product_Name.value)){
        addButton.removeAttribute("disabled")
        product_Name.classList.add("is-valid")
        product_Name.classList.remove("is-invalid")
        alert_Name.classList.add("d-none")
    }else{
        addButton.disabled="true";
        product_Name.classList.remove("is-valid")
        product_Name.classList.add("is-invalid")
        alert_Name.classList.remove("d-none")


    }
}
var alert_Price=document.getElementById("alertPrice")
product_Price.onkeyup=function(){
    var regexPrice=/^[1-9]$/
    if(regexPrice.test(product_Price.value)){
        addButton.removeAttribute("disabled")
        product_Price.classList.add("is-valid")
        product_Price.classList.remove("is-invalid")
        alert_Price.classList.add("d-none")
    }else{
        addButton.disabled="true";
        product_Price.classList.remove("is-valid")
        product_Price.classList.add("is-invalid")
        alert_Price.classList.remove("d-none")

    }}

    var alert_category=document.getElementById("alertCategory")
product_category.onkeyup=function(){
    var regexCategory=/^[A-Z][a-z]{4,20}$/
    if(regexCategory.test(product_category.value)){
        addButton.removeAttribute("disabled")
        product_category.classList.add("is-valid")
        product_category.classList.remove("is-invalid")
        alert_category.classList.add("d-none")
    }else{
        addButton.disabled="true";
        product_category.classList.remove("is-valid")
        product_category.classList.add("is-invalid")
        alert_category.classList.remove("d-none")

    }}







