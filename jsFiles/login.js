import {signUpForm,otpForm,emailForm,nameForm} from "./importForm.js";
let otp = Math.floor(Math.random()*100000);
let container = document.getElementById("containerForm");
container.innerHTML = signUpForm();
// ----------->  functions <-----------
// ----> () Appending name <----
let appendingName = ()=>{

    let userName = document.getElementById("login");
    console.log('userName:', userName);
    let naam = JSON.parse(localStorage.getItem('userNameData'))
    console.log('naam:', naam);
    userName.innerText = naam.firstName;
}

// ---> 4th (NameForm)  <---
class UserName{
    constructor(f,l){
        this.firstName = f;
        this.lastName = l;
    }
}

let saveUserName = ()=>{
    let cancel = document.querySelector(".cross_btn>img");
    console.log('cancel:', cancel)
    cancel.addEventListener('click',closeForm);
    let goBack = document.querySelector('#userButtons>.goBack');
    goBack.addEventListener('click',()=>{
        container.style.display = 'none'
        container.innerHTML = emailForm();
        container.style.display = 'block'
        saveEmail()


}) 
   let next = document.querySelector('.next');
next.addEventListener('click',()=>{
    let fName  = document.getElementById('fName').value;
    let lName  = document.getElementById('lName').value;
    let user = new UserName(fName,lName);
    localStorage.setItem('userNameData',JSON.stringify(user));
    appendingName();
    container.style.display = 'none'
})
}
// _ _ _ > 3rd (Email)<---
let saveEmail=()=>{
    let skip = document.querySelector(".cross_btn>p");
    // console.log('skip:', skip)
    skip.addEventListener('click',()=>{
     container.style.display = 'none'
    container.innerHTML = nameForm();
    container.style.display = 'block'
    saveUserName()
    });
let userEmailForm = document.getElementById("userEmail");
userEmailForm.addEventListener('submit',()=>{
    event.preventDefault();
    let userEmail =  document.querySelector("#userEmail>input").value;
    localStorage.setItem('userEmail',JSON.stringify(userEmail));
    container.style.display = 'none'
    container.innerHTML = nameForm();
    container.style.display = 'block'
    saveUserName()
})
}

// _ _ _ > 2nd (oTp)<---
let verifyOtp = ()=>{
    event.preventDefault()
    let otpInputs = document.querySelectorAll(".otpContainer>#verifyOtpForm>.pass");
    // console.log('otpInputs:', otpInputs)
    let bag = '';
    for(let i=0 ; i<otpInputs.length ; i++){
        bag += otpInputs[i].value;
    }
    if(otp == bag ){
        container.style.display = 'none'
        container.innerHTML = emailForm();
        container.style.display = 'block'
        saveEmail();

    }else{
        alert("Wrong Otp")
        genrateOtp();
        console.log('otp:', otp)


    }
    // if(event){
    // }
}

let genrateOtp = ()=>{
    
   alert(`Your one time password is ${otp}`);
   let cancel = document.querySelector(".cross_btn>img");
   cancel.addEventListener('click',closeForm)
   let change = document.getElementById("change");
   change.addEventListener('click',()=>{
    container.style.display = 'none'
    container.innerHTML =signUpForm() ;
    container.style.display = 'block';
    let continueBtn = document.querySelector(".cont_btn>input");
    continueBtn.addEventListener('click',otpPage);
    })
    
    let verifyOtpForm = document.getElementById('verifyOtpForm'); 
    verifyOtpForm.addEventListener('submit',verifyOtp);
    
}
// ---> 1st form(mobileForm) <---
let closeForm = ()=>{
    container.style.display = 'none'
    window.location.reload()

}   
let myForm = ()=>{
    container.style.display = 'block'    
}
let otpPage = ()=>{
    event.preventDefault();
    container.style.display = 'none';
    let number = document.getElementById('number').value;
    if(number.length==10){
        container.innerHTML = otpForm();
        container.style.display = 'block'
        document.getElementById('mobile_number').innerText = number 
        genrateOtp()
    }else{
        alert('Please type correct number');
    }
    
}
// ---> catching button & adding Event in open and close button <---
let btn = document.getElementById('login');
console.log("btn:",btn);
btn.addEventListener('click',myForm);
let close = document.querySelector(".cross_btn>img");
close.addEventListener('click',closeForm);
let continueBtn = document.querySelector(".cont_btn>input");
continueBtn.addEventListener('click',otpPage);