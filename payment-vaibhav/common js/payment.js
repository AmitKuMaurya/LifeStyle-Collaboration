

//  1...........................................................................................//

let homeDelivery =document.getElementById("home-delivery").addEventListener("click",HomeDelivery)
 homeDelivery =document.getElementById("home-delivery").style.border="2px solid orange"

// const api_key="07a51eea324d30f39c87a220dc518de8";

function HomeDelivery(){
    
    window.location.reload()
    
}

// 2.......................Search City By Input..........................................................................//





let storeDelivery= document.getElementById("store-delivery").addEventListener("click",StoreDelivery)

function StoreDelivery(){
   let HideDiv1=document.getElementById("delivery-info").style.display="none";
   let HideDiv2=document.getElementById("location-info").style.display="block";
   let input_tag=document.getElementById("city_search").style.display="block";
   
   let homeDelivery =document.getElementById("home-delivery").style.border="1px solid #bdc6ce";
   let storeDelivery= document.getElementById("store-delivery").style.border="2px solid orange";
   
   let iframe=document.getElementById("gmap_canvas");
   iframe.src=`https://maps.google.com/maps?q=nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed` 

   let city=document.getElementById("city").addEventListener("oninput",ShowMap)
   function ShowMap(){
    let city=document.getElementById("city").value;
    console.log(city)
   }
}





//  3....Debit And Credit Card Div.....................................................................//

let debitCard=document.getElementById("debit-card").addEventListener("click",DebitCard)
function DebitCard(){
    let card_details=document.querySelector("#card-details")
    if(card_details.style.display==="none")
    {
        card_details.style.display="block";
    }
    else{
        card_details.style.display="none"
    }
}

// let debit_card=document.getElementById("card-details").addEventListener("click",stop)
// function stop(){
//     let stopdiv=document.getElementById("card-details")
//     if(stopdiv.style.display==="none"){
//         stopdiv.style.display==="block"
//     }else{
//         stopdiv.style.display==="none"
//     }
// }

//  4.......EMI div.....................

let EMI=document.getElementById("emi").addEventListener("click",Emi)
function Emi(){
    let card_details=document.querySelector("#emi-card-1")
    if(card_details.style.display==="none")
    {
        card_details.style.display="block";
    }
    else{
        card_details.style.display="none"
    }
}


//  4.......Net Banking-div......................................................................//

let netBank=document.getElementById("net-bank").addEventListener("click",NetBank)
function NetBank(){
    let card_details=document.querySelector("#net-banking-div")
    if(card_details.style.display==="none")
    {
        card_details.style.display="block";
    }
    else{
        card_details.style.display="none"
    }
}

//  4.......Wallet-div..............................................................................//

let Wallet =document.getElementById("wallets").addEventListener("click",WalletInput)

function WalletInput(){
    let card_details=document.querySelector("#wallet-div")
    if(card_details.style.display==="none")
    {
        card_details.style.display="block";
    }
    else{
        card_details.style.display="none"
    }
}

    let Wallet_input =document.getElementById("wallet-div").addEventListener("click",WalletOpt)
    function WalletOpt(){
    let card_details=document.querySelector("#wallet-div-info")
    if(card_details.style.display==="none")
    {
        card_details.style.display="block";
    }
    else{
        card_details.style.display="none"
    }

}


// 5. UPI..................................................../......................

let UPI_pay=document.getElementById("upi").addEventListener("click",upi_Pay)
function upi_Pay(){
    let card_details=document.querySelector("#Upi-Opt")
    if(card_details.style.display==="none")
    {
        card_details.style.display="block";
    }
    else{
        card_details.style.display="none"
    }
}


//.......................for input tag ..................


//..............................button Event...........................................................

let button_show=document.getElementById("pay-now").addEventListener("click",ShowStatus)

function ShowStatus(){
let UserArray=[]
    let userData=document.getElementById("user-form-datails")
    
    let UserData={
        Uname:userData.user_name.value,
        flat:userData.user_flat.value,
        buildingName:userData.user_building_name.value,
        City:userData.user_city.value,
        state:userData.user_state.value,
        pincode:userData.user_pin_cd.value,
        contactNo:userData.user_contact.value,
        
    }
    UserArray.push(UserData)
    console.log(UserArray)
    









    let div_show =document.getElementById("out-put")
    div_show.style.display="block"
    let time =document.getElementById("order-process");
    time.style.display="block"
    let count=5;
let id=setInterval(function(){
    count--;
    if(count===0){
    clearInterval(id);
    let time =document.getElementById("order-process");
    time.style.display="none"
    let div_show =document.getElementById("order-placed")
    div_show.style.display="block"
}
},1000);

let more_shop=document.getElementById("more-shop").addEventListener("click",moreShop)
function moreShop(){
   window.location.reload()
}

}
