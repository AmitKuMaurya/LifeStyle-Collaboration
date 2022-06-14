let homeDelivery =document.getElementById("home-delivery").addEventListener("click",HomeDelivery)

function HomeDelivery(){
    console.log("hello")
}

let storeDelivery= document.getElementById("store-delivery").addEventListener("click",StoreDelivery)

function StoreDelivery(){
    console.log("hi")
}

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