let imagelink=["https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-2-20May2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-14Apr2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-3-06June2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-1-11April2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-4-19May2022.gif",
"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-3-15June2022.jpg"
]

// var obj={ 
// img1:"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-2-20May2022.jpg",
// img2:"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-14Apr2022.jpg",
// img3:"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-3-06June2022.jpg",
// img4:"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-1-11April2022.jpg",
// img5:"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-1-11April2022.jpg"
// }

let container=document.getElementById("Slide-show")
let i=0;
setInterval(function(){
    if(i==imagelink.length){
        i=0;
    }
    container.innerHTML=null;
    let image=imagelink[i];
     let img=document.createElement("img");
     img.src=image;
     container.append(img);
     i++
     },2000)

function myContainer(){
    location.href="./ScrachProduct_sharun/women.html";
}
container.addEventListener("click",myContainer);


import {upperNavbar,navbar,footer} from './components/navbar.js'

let upperNav = document.getElementById("top-bar");
upperNav.innerHTML = upperNavbar();

let nav = document.getElementById('navbar');
console.log(navbar)
console.log(nav)

nav.innerHTML = navbar(); 

let foot = document.getElementById('footer')

foot.innerHTML = footer();

console.log(foot)



