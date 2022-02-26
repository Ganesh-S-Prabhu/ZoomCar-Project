var carDataArr = [
  {image:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
  carname:"Renault Triber",
  transmission:"Manual",
  fuel:"Petrol",
  kilometres:"30,842",
  homedilivery:"true",
  pickupadd:"Barve marg- Kurla-East",
  seats:"7",type:"SUV",price:700},



  {image:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/19eca74a7982804ba713dd9485861a7543422115.JPG?1638531037",
  carname:"Tata Tiago",
  transmission:"Manual",
  fuel:"Petrol",
  kilometres:"35,596",
  homedilivery:"true",
  pickupadd:"Barve marg- Kurla-East",
  seats:"5",type:"hatchback",price:690},



  {image:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/6341096e4bdba31fd0790c159dfe72e9be78d12b.JPG?1631177941",
  carname:"Hyundai Venue",
  transmission:"Manual",
  fuel:"Diesel",
  kilometres:"12,343",
  homedilivery:"true",
  pickupadd:"Barve marg- Kurla-East",
  seats:"5",type:"SUV",price:895},


  {image:"https://zoomcar-assets.zoomcar.com/photographs/original/66971516a0ca77f9c2c95571b5fe6a06f726e622.JPG?1642574673",
  carname:"Chevrolet Enjoy",
  transmission:"Manual",
  fuel:"Petrol",
  kilometres:"54,878",
  homedilivery:"true",
  pickupadd:"Barve marg- Kurla-East",
  seats:"8",type:"SUV",price:1200},


  {image:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/fd85b09be071dba64376a2c84edc62a195df6ff3.JPG?1639728465",
  carname:"Honda Mobilio",
  transmission:"Manual",
  fuel:"Petrol",
  kilometres:"26,150",
  homedilivery:"true",
  pickupadd:"Barve marg- Kurla-East",
  seats:"7",type:"SUV",price:1300},


  {image:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/04abd7ab501ffe6d2be4f9940df767bae6d4cd57.png?1584524379",
  carname:"Mahindra Thar",
  transmission:"Manual",
  fuel:"Petrol",
  kilometres:"26,842",
  homedilivery:"true",
  pickupadd:"Barve marg- Kurla-East",
  seats:"6",type:"SUV",price:959},

  {image:"https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/efa1e98bbb81150cf57c98df093de5899dcafcd5.jpg?1640674575",
  carname:"Maruti Ertiga",
  transmission:"Manual",
  fuel:"Petrol",
  kilometres:"25,002",
  homedilivery:"true",
  pickupadd:"Barve marg- Kurla-East",
  seats:"7",type:"SUV",price:959},

]

localStorage.setItem("carData",JSON.stringify(carDataArr))





var carDataArray = JSON.parse(localStorage.getItem("carData"))

function update(){
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  
  localStorage.setItem("start",JSON.stringify(start))
  localStorage.setItem("end",JSON.stringify(end))

}
let start = document.getElementById("start").value;
let end = document.getElementById("end").value;

localStorage.setItem("start",JSON.stringify(start))
localStorage.setItem("end",JSON.stringify(end))
displayData(carDataArray)
function displayData(carDataArray){
  document.getElementById("cars").innerText = null;

  

  carDataArray.map(function(elem){

    let car_box = document.createElement("div");
    car_box.id="car_box"

    let left_div = document.createElement("div");
    let image = document.createElement("img");
    image.src=elem.image;
    left_div.append(image)
    left_div.id="left_div"


    let middle_div = document.createElement("div");
    let pickup = document.createElement("div");
    pickup.innerText= elem.pickupadd
    pickup.id="pickup_div"
    middle_div.id="middle_div"

    let title_div = document.createElement("div");
    title_div.innerText = elem.carname+"."+elem.fuel+"."+elem.seats+" seats";
    let rating_div = document.createElement("div");
    rating_div.innerText = elem.kilometres+" Kms driven"

    middle_div.append(pickup,title_div,rating_div)

    let right_div = document.createElement("div");
    right_div.id="right_div"
     
     
    let price = document.createElement("p");
    price.innerText = "₹ "+elem.price
    let button = document.createElement("button")
    button.innerHTML= "Book now"
    button.addEventListener("click",()=>{
      localStorage.setItem("carsummary",JSON.stringify(elem));
      window.location.href = "checkout.html"
    })
    right_div.append(price,button)

    car_box.append(left_div,middle_div,right_div)
    document.getElementById("cars").append(car_box)

    

    
   
});

}