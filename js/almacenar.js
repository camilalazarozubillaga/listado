const entrada = document.getElementById("item");
const btn = document.getElementById("agregar")
const lista = document.getElementById("contenedor");
const limpiar = document.getElementById("limpiar")
let arr = [];

if (localStorage.getItem("items")) {
  arr = JSON.parse(localStorage.getItem("items"));
  mostrarItems();
}

function mostrarItems(){
    lista.innerHTML = "";
    arr.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    })
}


btn.addEventListener("click", function(e){
    arr.push(entrada.value);
    localStorage.setItem("items", JSON.stringify(arr));
    entrada.value = "";
    mostrarItems(); 
})

limpiar.addEventListener("click", () => {
  arr = [];
  localStorage.removeItem("items");
  mostrarItems();
});
