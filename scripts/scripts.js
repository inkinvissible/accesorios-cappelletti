const showProducts = (jsonObj) => {
    const productos = jsonObj["productos"];
    let section = document.getElementById("sectionEcommerce");
    for (const producto of productos) {
        let div = document.createElement('div');
        let codigo =parseInt(producto.Codigo);
        div.className = 'rounded-lg shadow-lg bg-white max-w-sm'
        div.innerHTML = `<a href="#!">
                        <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="Foto" />
                        </a>
                        <div class="p-6">
                         <h5 class="text-gray-900 text-xl font-medium mb-2">${producto.Detalle}</h5>
                            <p class="text-gray-700 text-base mb-4">
                               Marca: ${producto.Marca}
                            </p>
                            <a type="button"
                                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                href="https://api.whatsapp.com/send?phone=+5493517693907&text=Buenas%20Accesorios%20Cappelletti!%20%C2%BFC%C3%B3mo%20estan?%20Quer%C3%ADa%20realizar%20una%20consulta%20sobre%20el%20producto%20${codigo}.%20Tienen%20stock?%20Cuanto%20saldria?">Consultar</a>
                        </div>`;
    section.appendChild(div);
    }

}
//Pedir el Json
const requestURL = 'https://inkinvissible.github.io/accesorios-cappelletti/json-cappelletti.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const productsJson = request.response;
    showProducts(productsJson);

}

