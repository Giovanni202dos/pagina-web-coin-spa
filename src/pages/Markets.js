import getData from '../utils/getData';
import getHash from '../utils/getHash';


const Markets = async () => {
    const markets = await getData(getHash());
    //console.log('desde markets: ', markets)
    const view = `
    <div class="Coin">
        ${markets.map(market => `

            <article class="Characters-card">

                <h2>${market.name}</h2>
                <h4>Precio: ${market.price}</h4>
                <h4>Precio en USD: ${market.price_usd}</h4>

            </article>

            `).join('')}

    </div>

    `;
    return view;
}

export default Markets;