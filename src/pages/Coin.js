import getData from '../utils/getData';
import getHash from '../utils/getHash';


const Coin = async () => {
    const coin = await getData(getHash());
    //console.log('desde coin: ', coin)
    const view = `
    <div class="Coin">
        ${coin.map(coinn => `
        <article>
        
            <article class="Characters-card">
                <h2>${coinn.symbol}</h2>
            </article>

            <article class="Characters-card">
                <h3>Episodes:</h3>
                <h3>Last Rank:</h3>  
                <p>${coinn.rank}</p>
                <p>Cambio del precio en 1hs:</p>
                <p class="${coinn.percent_change_1h>=0?'valor-positivo':'valor-negativo'}">${coinn.percent_change_1h}</p>
                <p>Cambio del precio en 24hs:</p>
                <p class="${coinn.percent_change_24h>=0?'valor-positivo':'valor-negativo'}">${coinn.percent_change_24h}</p>
                <p>Cambio del precio en 7 dias:</p>
                <p class="${coinn.percent_change_7d>=0?'valor-positivo':'valor-negativo'}">${coinn.percent_change_7d}</p>
                <p>Volumen de negociacion principal en 24hs:</p>
                <p>${coinn.volume24}</p>
                <p>Precio en BTC: ${coinn.price_btc}</p>
                <h3>precio en USD:</h3>
                <p>${coinn.price_usd}</p>
                <a href="#/coin/markets/?id=${coinn.id}">markets</a>
            </article>
        </article>

            `).join('')}

    </div>

    `;
    return view;
}

export default Coin;