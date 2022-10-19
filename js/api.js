/* Consumo de api */

const api_url = "https://randomuser.me/api/?results=6";

async function obtenerPersonas(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);

  for(let i=1; i<=6; i++){
    let imagen = `#img-${i} img`;
    let nombre = `#img-${i} .tarjeta-titulo`;
    let email = `#img-${i} .tarjeta-email`;
    console.log(document.querySelector(email));
    document.querySelector(imagen).src = data.results[i-1].picture.large;
    document.querySelector(nombre).innerHTML = data.results[i-1].name.first + " " + data.results[i-1].name.last;
    document.querySelector(email).textContent = data.results[i-1].email;
}
 
  console.log(tarjeta)
}

obtenerPersonas();