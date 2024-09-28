var ProductForm=document.querySelector(".Product_Form");
var ProductName=document.querySelector("#name");
var ProductDescription=document.querySelector("#description");
var ProductPrice=document.querySelector("#price");

var Products=[];
ProductForm.onsubmit=function(e){
    e.preventDefault();
var product={
    name:ProductName.value,
    Description:ProductDescription.value,
    Price:ProductPrice.value,
};
Products.push(product);
console.log(Products);
print();
}

function print(){
    var data=``;
    for(var i=0;i<Products.length;i++)
        data +=`<tr>
        <td>${Products[i].name} </td>
        <td>${Products[i].Description} </td>
        <td>${Products[i].Price} </td>
        </tr>`;
    
    document.querySelector("tbody").innerHTML=data;

}