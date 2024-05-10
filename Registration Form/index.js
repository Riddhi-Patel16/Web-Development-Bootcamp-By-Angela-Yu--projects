let fname,lname,state;
const home=document.querySelector(".home");
if(home)
{
const prev=document.getElementsByClassName("prev");
const slidepage=document.querySelector(".slidepage");

for(let i=0;i<prev.length;i++)
{
    prev[i].addEventListener("click",(event)=>{
        event.preventDefault();
        let value=25;
        slidepage.style.marginLeft="-"+value*(i)+"%";
    })
}
function fnamev()
{
    let fname=document.querySelector("#fname").value;
    if(fname.length <= 1)
    {
        document.querySelector("#ferror").innerHTML="Please Enter Name";
        return false;
    }
    else{
    document.querySelector("#ferror").innerHTML="";
    return true;
    }
}
function lnamev()
{
    let lname=document.querySelector("#lname").value;
    if(lname.length <= 1)
    {
        document.querySelector("#lerror").innerHTML="Please Enter Name";
        console.log(lname);
        return false;
    }
    else{
    document.querySelector("#lerror").innerHTML="";
    return true;
    }
}

function page1(event){
    event.preventDefault();
fname=document.querySelector("#fname").value;
lname=document.querySelector("#lname").value;
state=document.querySelector("#state").value;
localStorage.setItem("fname",fname);
localStorage.setItem("lname",lname);
localStorage.setItem("state",state);
if(fnamev() && lnamev())
slidepage.style.marginLeft="-25%";
}
function evalid()
{
    let email=document.querySelector("#email").value;
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.querySelector("#evalid").innerHTML="Please enter valid email";
        return false;
      }
      document.querySelector("#evalid").innerHTML="";
      return true;
}
function numvalid()
{
    let num=document.querySelector("#pnumber").value;
    if(!num.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
        document.querySelector("#numvalid").innerHTML="Enter valid Phoneumber";
        return false;
      }
      document.querySelector("#numvalid").innerHTML="";
      return true;
}
function page2(event){
    event.preventDefault();
    let email=document.querySelector("#email").value;
    let pnumber=document.querySelector("#pnumber").value;
    let address=document.querySelector("#address").value;
    localStorage.setItem("email",email);
    localStorage.setItem("pnumber",pnumber);
    localStorage.setItem("address",address);
    if(evalid() && numvalid())
    slidepage.style.marginLeft="-50%";
}
function dob()
{
    let dob=document.querySelector("#DOB").value;
    if(!dob.match(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(\d{4})$/)){
        document.querySelector("#derror").innerHTML="Enter valid Date";
        return false;
      }
      document.querySelector("#derror").innerHTML="";
      return true;
}
 
    function page3(event){
        event.preventDefault();
        let date=document.querySelector("#DOB").value;
        let gender='0';
        if(document.getElementById('male').checked) {   
               gender = document.getElementById("male").value;   
        }   
        else if(document.getElementById('female').checked) {   
            gender= document.getElementById("female").value;     
        }   
        else if(document.getElementById('other').checked) {   
           gender= document.getElementById("other").value ;     
        }  
        if(gender == '0') 
        {
            document.querySelector("#gerror").innerHTML="Please select Gender";
        }
        else
        {
            document.querySelector("#gerror").innerHTML="";
        }
        let edu=document.querySelector("#education").value;
        localStorage.setItem("date",date);
        localStorage.setItem("gender",gender);
        localStorage.setItem("edu",edu);
        if(dob() && (gender != '0'))
        slidepage.style.marginLeft="-75%";
        }
        
        function uvalid()
        {
            let uname=document.querySelector("#uname").value;
            if(uname.length<5)
            {
                document.querySelector("#uerror").innerHTML="enter Atleast 5 charcater";
                return false;
            }
            document.querySelector("#uerror").innerHTML="";
            return true;
        }
        function passvalid()
        {
            let pswd=document.querySelector("#pswd").value;
            if(pswd.length<5)
            {
                document.querySelector("#perror").innerHTML="enter Atleast 5 charcater";
                return false;
            }
            document.querySelector("#perror").innerHTML="";
            return true;

        }
        function page4(event){
            event.preventDefault();
            let uname=document.querySelector("#uname").value;
            localStorage.setItem("uname",uname);
            if(uvalid()&& passvalid())
            window.location.href = "./profile.html";

            }
}

const profile=document.querySelector(".profile")
if(profile)
{
    document.querySelector("#fname").innerHTML=localStorage.getItem("fname");
    document.querySelector("#lname").innerHTML=localStorage.getItem("lname");
    document.querySelector("#state").innerHTML=localStorage.getItem("state");
    document.querySelector("#email").innerHTML=localStorage.getItem("email");
    document.querySelector("#phone").innerHTML=localStorage.getItem("pnumber");
    document.querySelector("#address").innerHTML=localStorage.getItem("address");
    document.querySelector("#date").innerHTML=localStorage.getItem("date");
    document.querySelector("#gender").innerHTML=localStorage.getItem("gender");
    document.querySelector("#edu").innerHTML=localStorage.getItem("edu");
    document.querySelector("#uname").innerHTML=localStorage.getItem("uname");

    function homep()
    {
        window.location.href = "./index.html";
    };
}