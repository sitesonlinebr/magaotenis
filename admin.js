const LS_PRODUCTS = "magao_products";

function read(key){
  try{return JSON.parse(localStorage.getItem(key)||"[]")}
  catch{return []}
}
function write(key,val){
  localStorage.setItem(key,JSON.stringify(val));
}

function saveProduct(){
  const products = read(LS_PRODUCTS);

  const p = {
    id: crypto.randomUUID(),
    name: name.value,
    price: Number(price.value),
    desc: desc.value,
    image: image.value
  };

  products.push(p);
  write(LS_PRODUCTS,products);

  renderAdmin();
}

function removeProduct(id){
  const products = read(LS_PRODUCTS).filter(p=>p.id!==id);
  write(LS_PRODUCTS,products);
  renderAdmin();
}

function renderAdmin(){
  const products = read(LS_PRODUCTS);

  adminList.innerHTML = products.map(p=>`
    <div class="adminItem">
      <img src="${p.image}">
      <div>
        <b>${p.name}</b>
        <div>R$ ${p.price.toFixed(2)}</div>
      </div>
      <button onclick="removeProduct('${p.id}')">Remover</button>
    </div>
  `).join("");
}

renderAdmin();