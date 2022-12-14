var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }


  function getProduct_info(){
var mainContainer=document.getElementById("product_list")
var right_container=document.createElement("div")
right_container.className = "right_container"
var left_container=document.createElement("div")
left_container.className = "left_container"

var productDescription2 = document.createElement("div")
productDescription2.className="productDescription2"
var productDescDiv=document.createElement("div")
productDescDiv.className="productDescDiv"

for (var item in productData){
//console.log(item)
if(item=="preview"){

var img1=document.createElement("img");
//console.log(productData[item])
img1.className="prev-img"
img1.src=productData[item];
//console.log(img)

left_container.appendChild(img1)


//console.log(mainContainer)
mainContainer.appendChild(left_container)


}

if(item=="name"){
  var itemName=document.createElement("h1");
  itemName.innerHTML=productData[item];
  productDescDiv.appendChild(itemName);
 
  right_container.appendChild(  productDescDiv);
  mainContainer.appendChild( right_container)
}

if(item=="brand"){
  var itemBrand=document.createElement("h4");
  itemBrand.className="brand"
  itemBrand.innerHTML=productData[item];
  productDescDiv.insertBefore(itemBrand,  productDescDiv.children[1]);

//productDescDiv.appendChild(itemBrand);
right_container.appendChild(  productDescDiv);
mainContainer.appendChild( right_container)
}
if(item=="price"){
  var itemPrice=document.createElement("h3");
  itemPrice.innerHTML= "Price: Rs "+"<span id='price'> "+ productData[item]+ "</span>";
  productDescDiv.insertBefore(itemPrice,  productDescDiv.children[2]);
  //productDescDiv.appendChild(itemPrice);
right_container.appendChild(  productDescDiv);
mainContainer.appendChild( right_container)

}
if(item=="description"){
var desc= document.createElement("h3");
desc.className="item-desc"
desc.innerHTML="Description";
var info=document.createElement("p");
info.innerHTML=productData[item];
productDescription2.appendChild(desc);
productDescription2.appendChild( info);
productDescDiv.insertBefore(productDescription2,  productDescDiv.children[1]);
//productDescDiv.appendChild(productDescription2);
right_container.appendChild(  productDescDiv);
mainContainer.appendChild( right_container)
}



if(item=="photos"){
  var productPreviewContainer=document.createElement("div");
  productPreviewContainer.className="productPreviewContainer"
console.log(productPreviewContainer.className ="productPreviewContainer")
  var prevHeading=document.createElement("h3");
  prevHeading.innerHTML="Product Preview";
  var prevImgCont=document.createElement("div");
  
  prevImgCont.className="prevImgCont"
  for(var i=0;i<item.length;i++){
    img2=document.createElement("img");
    img2.className="sm-prev-img"
    img2.src=productData[item][i];
    img2.addEventListener("click",abc)
   // img2.setAttribute("style", "width:15%;height: 30%;");
    prevImgCont.appendChild(img2)
  }
  
  
  //x[0].setAttribute("style","border:2px solid #009688;border-radius:none")
  productPreviewContainer.appendChild(prevHeading)
  productPreviewContainer.appendChild(prevImgCont)
  productDescDiv.appendChild(productPreviewContainer);
  right_container.appendChild(  productDescDiv);
 mainContainer.appendChild( right_container)
 var x= document.getElementsByClassName("sm-prev-img");
 console.log(x[0]);
 x[0].setAttribute("style","border:2px solid #009688;border-radius:none")

  
}

function abc(e){
var x= document.getElementsByClassName("sm-prev-img");
var y= document.getElementsByClassName("prev-img");
console.log(y)
//console.log(x)
  for(var i=0; i<x.length;i++){
    console.log(x[i])
x[i].style.border="none";

  }
   y[0].src=e.path[0].src
   
  e.path[0].setAttribute("style","border:2px solid #009688;border-radius:none")
  // console.log(e.path[0].src)
  console.log('red')
}



}
btn=document.createElement("button");
btn.innerHTML="Add to Cart";
btn.className="btn"
right_container.appendChild(btn);
 mainContainer.appendChild( right_container)

//console.log(prevImgCont)



  }


  getProduct_info()


