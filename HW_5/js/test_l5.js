'use strict';



//// ИНТЕРНЕТ МАГАЗИН ////


var products = [
  {"name":"snikers #1", "price":"125.22", "image":"bg-01.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #2", "price":"225.22", "image":"bg-02.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #3", "price":"155.99", "image":"bg-03.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #4", "price":"125.75", "image":"bg-04.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #5", "price":"129.32", "image":"bg-05.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #6", "price":"155.15", "image":"bg-06.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #7", "price":"325.52", "image":"bg-07.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #8", "price":"425.22", "image":"bg-08.jpg", "discription":"This is a cool snikers"},
];

function creatNewEl(tag, innerContent=null, nameClass=null, attr=null) {
  var el =  document.createElement(tag);
  el.innerHTML = (innerContent)?innerContent:"";
  el.className = (nameClass)?nameClass:"";

  if (attr) {
    attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
  }
  return el;
};

function creatCard(product) {
  var link = creatNewEl("a", "add to cart", "btn btn-primary", [{"name":"href", "value":"#"}]);
  var p = creatNewEl("p", product.discription, "card-text", null);
  var title = creatNewEl("h5", product.name, "card-title", null);
  var priceItem = creatNewEl("h3", "$ " + product.price, "card-price", null);


  var cardBody = creatFamily(creatNewEl("div", null, "card-body", null), [title, p, priceItem, link]);

  var cardImage = creatNewEl("img", null, "card-img-top", [{"name":"src", "value":"img/"+product.image}, {"name":"alt", "value":"img"}]);

  var card = creatNewEl("div", null, "card");
  card.appendChild(cardImage);
  card.appendChild(cardBody);

  var catalogItem = creatNewEl("div", null, "col-lg-3 col-md-6 mb-2 catalog-item");
  catalogItem.appendChild(card);

  return catalogItem;
};
function creatFamily(html, array_el) {
  array_el.map((el)=>html.appendChild(el));
  return html;
}

var catalog = document.getElementById("catalog");
products.map((el)=>catalog.appendChild(creatCard(el)));



// <div class="col-lg-3 col-md-6 mb-2 catalog-item">
//   <div class="card">
//     <img class="card-img-top" src="img/bg-01.jpg" alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// </div>
//
