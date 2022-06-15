

//  1...........................................................................................//

let homeDelivery =document.getElementById("home-delivery").addEventListener("click",HomeDelivery)
let HideDiv=document.getElementById("delivery-info").style.display="block"

function HomeDelivery(){
    let HideDiv=document.getElementById("delivery-info").style.display="block"
}

// 2.................................................................................................//

let storeDelivery= document.getElementById("store-delivery").addEventListener("click",StoreDelivery)

function StoreDelivery(){
   let HideDiv=document.getElementById("delivery-info").style.display="none"

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


