function signup(){
    console.log("welcom To Sign Up")
   var z= document.querySelector(".popUp-container");
   z.style.display="none"
   z.setAttribute('id','z-popUp')
    var y=document.querySelector(".main-register-popUp");
    y.setAttribute('id','dis-main-register');
    
}
async function signin(e){
    event.preventDefault();
    // var username=document.getElementById('name').value;
    var mobile=document.getElementById('enter-number').value;
    // var user=localStorage.getItem('username1');
    // var data=JSON.parse(user);
    // mobile!==data.mobile
    try{
        let signin_data={
            
            mobilenumber:mobile,
           

        },

//         "password": "secret",
//   "username": "masai-school"
       signin_json_data=JSON.stringify(signin_data);
        let res=await fetch("http://localhost:5000/login",{
            method:"POST",

            body:signin_json_data,


            headers:{
                "Content-Type":'application/json',
            },
        });
        let data=await res.json();
        if(data.message){
            // alert(data.message);
            var p=document.getElementById('text3');
            p.innerHTML='The mobile number +91'+mobile+' has not been registered with us. Lets create a new account.'
            var x=document.querySelector(".register_popUp");
            x.setAttribute('id','dis-register');
            document.getElementById('image1').addEventListener('click',function(){
                x.style.display="none"
            })
        }
    else{
        var t=document.querySelector(".successfully-login-popUp");
        t.setAttribute('id','successfully_login')
        console.log(data);
    localStorage.setItem("userid",data.user._id);
    }
       
        // window.location.href="index.html"
    //    getuser(login_data.username,data.token);

    }catch(err){
        console.log("err",err);
    }






   
}



function cross(){
    document.querySelector(".main-register-popUp").style.display="none";
}



async function main_signup(e){
    event.preventDefault();
    var mobile=document.getElementById('registr-mobile').value;
    var email=document.getElementById('register-email').value;
    var username=document.getElementById('name').value;
    var password=document.getElementById('register-password').value;
    let city=JSON.parse(localStorage.getItem("city"));

    

  var phoneno = /^\d{10}$/; 
  if(mobile=="" || email=="" || username=="" || password==""){
      alert("please Fill all the details");
  }
  else if(!(mobile.match(phoneno)))
        {
            alert("Please enter correct mobile number");
      
        }
        else{
            try{
                let login_data={
                    email:email,
                    fullname:username,
                    password:password,
                    mobilenumber:mobile,
                    city:city,
        
                },
        
        //         "password": "secret",
        //   "username": "masai-school"
               login_json_data=JSON.stringify(login_data);
                let res=await fetch("http://localhost:5000/register",{
                    method:"POST",
        
                    body:login_json_data,
        
        
                    headers:{
                        "Content-Type":'application/json',
                    },
                });
                let data=await res.json();
        if(data.message){
            alert(data.message);
        }
        else{
            localStorage.setItem("userid",JSON.stringify(data.user._id));
            console.log(data);
                window.location.href="index.html";
        }
                
            //    getuser(login_data.username,data.token);
        
            }catch(err){
                console.log(err);
            }
        
            // var json=JSON.stringify(user);
            // localStorage.setItem("username1",json)
           

        }
     


   
    // document.querySelector(".popUp-container").style.display="none";
    // document.querySelector(".main-register-popUp").style.display="none";
    // document.querySelector(".register_popUp").style.display="none";
}




//become host js
function hostFunc(e){
    event.preventDefault();
    var mobile=document.getElementById('hostNumber').value;
    var email=document.getElementById('hostEmail').value;

    var user=localStorage.getItem('username1');
    var data=JSON.parse(user);

    if(mobile==data.mobile&&email==data.email){
        var x=document.querySelector(".hostPopUp");
        x.setAttribute('id','hostPopUp1');
        console.log("You are successfully become a host")
    }
}

function cross1(){
    var x=document.querySelector(".hostPopUp");
    x.style.display="none"
}

function cross(){
    window.location.href="index.html";
}