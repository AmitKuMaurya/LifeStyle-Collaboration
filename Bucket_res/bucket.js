// let delArr = JSON.parse(localStorage.getItem("items")) || [];
let bucketArr = JSON.parse(localStorage.getItem("products"));

console.log(bucketArr);

let h3 = document.getElementById("P-counter");
h3.innerText = bucketArr.length + " " + "Products";

let displayData = (bucketArr) => {
  bucketArr.forEach(function (ele, i) {
    let contain = document.getElementById("left-bucket");

    let div_cont = document.createElement("div");
    div_cont.setAttribute("id", "div-holder");

    let div1 = document.createElement("div");
    div1.setAttribute("id", "div-img");

    let img = document.createElement("img");
    img.src = ele.img;

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div-content");

    let tit = document.createElement("p");
    tit.innerText = ele.productName;

    let dis = document.createElement("p");
    dis.innerText = ele.discount;

    let size = document.createElement("p");
    size.innerText = "size: " + ele.size;

    let clr = document.createElement("p");
    clr.innerText = "color: " + ele.color;

    let price = document.createElement("p");
    price.innerText = ele.price;

    let m_div = document.createElement("div");
    m_div.setAttribute("id", "middle-div");

    let deli = document.createElement("p");
    deli.innerText = "Delivery in 3-5 days";

    let _quan = document.createElement("div");
    _quan.setAttribute("id", "quants");

    let select = document.createElement("select");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "Qty:");
    option1.innerText = "Qty: ";
    let option2 = document.createElement("option");
    option2.setAttribute("value", "1");
    option2.innerText = "Qty: " + 1;
    let option3 = document.createElement("option");
    option3.setAttribute("value", "2");
    option3.innerText = "Qty: " + 2;
    let option4 = document.createElement("option");
    option4.setAttribute("value", "3");
    option4.innerText = "Qty: " + 3;
    let option5 = document.createElement("option");
    option5.setAttribute("value", "4");
    option5.innerText = "Qty: " + 4;

    select.append(option1, option2, option3, option4, option5);

    _quan.append(select);
    m_div.append(deli, _quan);

    let button_div = document.createElement("div");
    button_div.setAttribute("id", "div-button");

    let remove = document.createElement("button");
    remove.setAttribute("id", "remove-button");
    remove.innerText = "Remove";
    remove.style.color = "orange";
    remove.style.cursor = "pointer";
    remove.addEventListener("click", function () {
      delMyProduct(ele, i);
    });

    let add_to_fav = document.createElement("button");
    add_to_fav.setAttribute("id", "add-button");
    add_to_fav.innerText = "Add To Favourites";
    add_to_fav.style.color = "orange";
    add_to_fav.style.cursor = "pointer";

    div1.append(img);
    div2.append(tit, price, dis, clr, size, m_div);
    button_div.append(remove, add_to_fav);
    div_cont.append(div1, div2, button_div);
    contain.append(div_cont);
  });
};
displayData(bucketArr);

function delMyProduct(ele,i) {
  bucketArr.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(bucketArr));
  window.location.reload();
}

let CalculateMRP = bucketArr.reduce(function (acc, ele) {
    return Math.round(acc + ele.price);
}, 0);

let CalculateDiscount = bucketArr.reduce(function (acc, ele) {
    return Math.round(acc + ele.discount);
}, 0);

let CalculateTotal = bucketArr.reduce(function (acc, ele) {
    return Math.round(acc+(ele.price)-(ele.discount));
}, 0);

document.getElementById('Disocunt-price').innerText = "-₹" + CalculateDiscount;


let q = document.getElementsByTagName('option');
document.getElementById("Purcahse-price").innerText = "₹" + CalculateMRP;

document.getElementById("Total-price").innerText = "₹" + CalculateTotal;

let CheckoutArr = JSON.parse(localStorage.getItem("checkout")) || [];

let chkout_btn = document.getElementById("cheak-out");
chkout_btn.addEventListener("click", function (ele) {
  SentToConfirm(ele);
});


function SentToConfirm() {
  CheckoutArr.push(bucketArr);
  console.log(bucketArr);
  localStorage.setItem("checkout",JSON.stringify(CheckoutArr));
  window.location.reload();
}