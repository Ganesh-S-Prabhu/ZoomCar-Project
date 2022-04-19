
getdata();
async function getdata(){
 try{
  let city=JSON.parse(localStorage.getItem("city"));

  // let res=await fetch(`http://localhost:5000/${city}`);

  let res=await fetch(`http://localhost:5000/cars/${city}`);
// >>>>>>> f28cb4ff8c92ca9e03eeac609898be88d58268f5
  let data=await res.json();
  console.log(data)
  displayData(data);
 }catch(err){
   console.log("err:",err);
 }

}
getdata()


async function getsuvdata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   console.log(city)
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.types == "suv" || elem.types=="SUV")
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }

 async function getsedandata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   console.log(city)
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.types == "sedan" || elem.types=="Sedan")
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }


 async function gethatchbackdata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   console.log(city)
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.types == "hatchback" || elem.types=="Hatchback")
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }

 async function getmanualdata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.transmission == "manual" || elem.types=="Manual")
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }

 async function getautodata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.transmission == "automatic" || elem.types=="Automatic")
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }

 async function getfivedata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.seates == 5)
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }

 async function getsevendata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.seates == 7)
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }


 async function getpetroldata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.fuel == "petrol" || elem.fuel=="Petrol")
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }
 

 async function getdieseldata(){
  try{
    let city=JSON.parse(localStorage.getItem("city"));
   
   
   let res=await fetch(`http://localhost:5000/cars/${city}`);
   let data=await res.json();
   //displayData(data);
   var newdata = data.filter(myfunction)
   displayData(newdata);
   function myfunction(elem){
     return (elem.fuel == "diesel" || elem.fuel=="Diesel")
   }
   console.log(newdata)
  }catch(err){
    console.log("err:",err);
  }
 }





// <<<<<<< HEAD

// =======
// >>>>>>> f28cb4ff8c92ca9e03eeac609898be88d58268f5
// displayData(carDataArray);
async function displayData(carDataArray){
  document.getElementById("cars").innerText = null;

  

  carDataArray.map(async function(elem){

    let car_box = document.createElement("div");
    car_box.id="car_box"

    let left_div = document.createElement("div");
    let image = document.createElement("img");
    image.src=elem.carimage;
    left_div.append(image)
    left_div.id="left_div"


    let middle_div = document.createElement("div");
    let pickup = document.createElement("div");
    pickup.innerText= elem.carname;
    pickup.id="pickup_div"
    middle_div.id="middle_div"

    let title_div = document.createElement("div");
    title_div.innerText = elem.transmission+" .   "+elem.fuel+" .    "+elem.seates+" seats";
    let rating_div = document.createElement("div");
    rating_div.innerText = elem.driven+" Kms driven"

    middle_div.append(pickup,title_div,rating_div)

    let right_div = document.createElement("div");
    right_div.id="right_div"
     
     
    let price = document.createElement("p");
    price.innerText = "₹ "+elem.price;
    let button = document.createElement("button")
    button.innerHTML= "Book now"

    button.addEventListener("click",async ()=>{
// >>>>>>> f28cb4ff8c92ca9e03eeac609898be88d58268f5
      let start = document.getElementById("start").value;
      let end = document.getElementById("end").value;
      let address=document.getElementById("place").value;
      let token=(localStorage.getItem("token"));
      if(address=="" || start=="" || end==""){
       
        console.log(address,start,end);
        alert("Please fill all the Details")
      }
      else{
        try{
          let bookingdata={
            address:address,
            startdate:start,
            enddate:end,
            price:elem.price,
            carid:elem._id,
            userid:(localStorage.getItem("userid"))
          }
          booking_json_data=JSON.stringify(bookingdata);
          let res=await fetch("http://localhost:5000/bookings",{
                    method:"POST",

             body:booking_json_data,


              headers:{
                "Content-Type":'application/json',

                // authorization:token,
              },
  });
  let data=await res.json();
  console.log(data);
 localStorage.setItem("bookingid",JSON.stringify(data._id));
        // window.location.href = "checkout.html"

        }catch(err){
          console.log("err:",err);
        }
        
        
      }
      
    })
    right_div.append(price,button)

    car_box.append(left_div,middle_div,right_div)
    document.getElementById("cars").append(car_box)

    

    
   
});


}







// try{
//   let login_data={
//       email:email,
//       fullname:username,
//       password:password,
//       mobilenumber:mobile,
//       city:city,

//   },

// //         "password": "secret",
// //   "username": "masai-school"
//  login_json_data=JSON.stringify(login_data);
//   let res=await fetch("https://localhost:5000/register",{
//       method:"POST",

//       body:login_json_data,


//       headers:{
//           "Content-Type":'application/json',
//       },
//   });
//   let data=await res.json();