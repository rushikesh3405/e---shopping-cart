let shop = document.getElementById("shop");
let = shopItemsData = [
  {
    id: "1",
    name: "casual shoes",
    price: 45,
    desc: "Lorem ajk dfakl sdakf;l fdkja;l",
    img: "images/casual shoes.jfif"
  },
  {
    id: "2",
    name: "foraml shoes",
    price: 55,
    desc: "Lorem ajk dfakl sdakf;l fdkja;l",
    img: "images/formal shoes.jfif"
  },
  {
    id: "3",
    name: "mens watch",
    price: 45,
    desc: "Lorem ajk dfakl sdakf;l fdkja;l",
    img: "images/mens watch.jpg"
  },
  {
    id: "4",
    name: "night shirt",
    price: 45,
    desc: "Lorem ajk dfakl sdakf;l fdkja;l",
    img: "images/night dress.jfif"
  },
];



let genereteShop = () => {
  return (shop.innerHTML = shopItemsData.map((shopItem) => {
      let {id, name, price, desc, img } = shopItem;
      return `<div id=product-id-${id} class="item">
     <img width="219" src="${img}" alt="">
     <div class="details">
       <h3>${name}</h3>
       <p>${desc}</p>
       <div class="price-quantity">
         <h2>$ ${price}</h2>
         <div class="buttons">
         <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
         <div id = ${id} class="quantity">0</div>
         <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
         </div>
       </div>
     </div>
   </div>
   `;
    })
    .join(""));
};

genereteShop();

let increment = (id) => {
  console.log(id);
};
let decrement = () => {
  console.log("decrement");
};
let update = () => {};