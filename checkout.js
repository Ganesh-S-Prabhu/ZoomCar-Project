

getdata();

async function getdata(){
  try{
    let id=JSON.parse(localStorage.getItem("bookingid"));
  
  
  
    let res=await fetch(`http://localhost:5000/bookings/${id}`);
 
    let data=await res.json();
    console.log(data)
    appendData(data)
   }catch(err){
     console.log("err:",err);
   }
}



// var carsummary = JSON.parse(localStorage.getItem("carsummary"));


let container = document.getElementById("container")

function appendData(element){
  let first = document.createElement("div");
  first.id="first";
  let cartitle = document.createElement("div");
  let p = document.createElement("h3");
  p.innerText= element.carid.carname;


  let carimage = document.createElement("div");
  let image = document.createElement("img");
   image.src = element.carid.carimage;

   let time = document.createElement("div");
   time.id= "time"
   let start = document.createElement("div")
   let start_time= document.createElement("p");
   let circle = document.createElement("div");
   circle.id = "green";
   

   start_time.innerText= element.startdate;


   let end = document.createElement("div")
   let red = document.createElement("div")
   red.id="red"
   let end_time= document.createElement("p");
   end_time.innerText= element.enddate;

   let rating = document.createElement("div");

   let rating_value = document.createElement("p");
   rating_value.innerText= "Rating-"+"5(234)"+" "+element.carid.driven+" Kms driven"


   let price_div = document.createElement("div");
   price_div.id="price_div";
   let coupon = document.createElement("div")
   coupon.id="coupon";
   let coupon_input = document.createElement("input")
   let coupon_button = document.createElement("button")
   
   coupon_button.addEventListener("click",async()=>{
       if(coupon_input.value=="Zoomcar30"){
        try{
          price_div.innerText= "";
           let price=(element.price-(element.price/100)*30);
           price_div.innerText= "Total Fare:-"+price;
        
           localStorage.setItem("price",price);
          let bookingdata={
            
            price:price,
            
          }
          booking_json_data=JSON.stringify(bookingdata);

           let id=JSON.parse(localStorage.getItem("bookingid"));
  
   
  
    let res=await fetch(`http://localhost:5000/bookings/${id}`,{
                    method:"PATCH",

             body:booking_json_data,


              headers:{
                "Content-Type":'application/json',
                
              },
  });
  let data=await res.json();
  console.log(data);
          
       
        
       }catch(err){
         console.log("err:",err);
       }
      }
      else{
        alert("Token is incorrect")
      }
       
   })
   coupon_button.innerHTML="Apply Coupon"
   coupon_button.id="coupon_button"
   coupon.append(coupon_input,coupon_button)
   

   let price_value = document.createElement("p");
   let price=element.price;
   localStorage.setItem("price",price);
   price_value.innerText="Total Fare:-"+price;
   price_value.style.fontWeight="bold"
   console.log(price);

   let checkout= document.createElement("div")
   checkout_button= document.createElement("button")
   checkout_button.innerHTML="Checkout"
   checkout_button.setAttribute("id","checkout_button");
   checkout_button.addEventListener("click",()=>{
     window.location.href="paymentPage.html"
   })
   checkout.append(checkout_button)

     cartitle.append(p)
     carimage.append(image)
     first.append(cartitle,carimage);


     start.append(circle,start_time)
     start.id="start"
     end.append(red,end_time)
     end.id="end"
     time.append(start,end)


     rating.append(rating_value)

     price_div.append(price_value,coupon);

     container.append(first,time,rating,price_div,checkout)

}