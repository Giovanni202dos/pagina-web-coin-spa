import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
    const hash = getHash();
    //console.log('desde home: ',hash)

    const coins = await getData(hash);//como entro a la pagina principal le muestro todos los personajes
    //console.log('coins: ',coins);
    //console.log('pagess: ',coins?coins.info.pages:'no tiene paginas');


    let cantiPaginas=coins?Math.floor(coins.info.coins_num / 100):0;//obtengo la cantidad de paginas q muestran solo 100 coin
    let paginaActual =calcualarPaginaActual();

    const view = `
    <section id="section-cambio-page">
        <button " onclick="cambioPage(-1,'${paginaActual}','${cantiPaginas}');"  class="retroceder-boton" id="retroceder-boton"> <-- </button>
        <p class="conteo-de-paginas">${paginaActual}</p>
        <p class="conteo-de-paginas"> de </p>
        <p class="conteo-de-paginas">${cantiPaginas}</p>
        <button " onclick="cambioPage(1,'${paginaActual}','${cantiPaginas}');" class="avanzar-boton" id="avanzar-boton"> --> </button>
    </section>

    <div class="Characters">
    ${
      coins
        ? coins.data.map(coin => `
            <article class="Character-item" id="Characters-item">
                <a href="#/ticker/?id=${coin.id}">
                    <div>
                        <h2>${coin.symbol}</h2>
                    </div>
                    <h3>${coin.name}</h3>
                    <p>${coin.rank}</p>
                    
                    <p class="${coin.percent_change_24h>=0?'valor-positivo':'valor-negativo'}">${coin.percent_change_24h}</p>
                    <p>precio en USD: ${coin.price_usd}</p>
                </a>
            </article>
        `).join('')
        : '<div class="nada-para-mostrar">No hay coins disponibles</div>'
    }
  </div>


    `;
    return view;
}

export default Home;