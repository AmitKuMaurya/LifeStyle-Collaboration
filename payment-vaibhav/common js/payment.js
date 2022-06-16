

//  1...........................................................................................//

let homeDelivery =document.getElementById("home-delivery").addEventListener("click",HomeDelivery)
 homeDelivery =document.getElementById("home-delivery").style.border="2px solid orange"

// const api_key="07a51eea324d30f39c87a220dc518de8";

function HomeDelivery(){
    
    window.location.reload()
    
}

// 2.................................................................................................//

let storeDelivery= document.getElementById("store-delivery").addEventListener("click",StoreDelivery)

function StoreDelivery(){
   let HideDiv1=document.getElementById("delivery-info").style.display="none";
   let HideDiv2=document.getElementById("location-info").style.display="block";
   
   let homeDelivery =document.getElementById("home-delivery").style.border="1px solid #bdc6ce";
   let storeDelivery= document.getElementById("store-delivery").style.border="2px solid orange"
    let city=document.getElementById("city_search").value;



            let iframe=document.getElementById("gmap_canvas");
            iframe.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

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

let input_tag=document.querySelector("input").addEventListener("input",checkInput)

function checkInput(){
    let input_tag=document.querySelector("input")
    let input_value=document.querySelector("input").value;
    if(input_value===null){
       console.log("hello")
    }else{
        input_tag.style.borderBlock="rad"
    }
    
}

//..............................button Event...........................................................

let button_show=document.getElementById("pay-btn").addEventListener("click",ShowStatus)

function ShowStatus(){
    
}
