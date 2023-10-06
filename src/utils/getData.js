
// const API = 'https://rickandmortyapi.com/api'

// const getData = async (hash) => {
//     //const apiURL = id ? `${API}${id}` : API
//     const apiURL = API+hash;
//     console.log(apiURL);

//     try {
//         const response = await fetch(apiURL)
//         const data = await response.json()
//         if(data.error){//por si no esncuentra el personaje
//             console.log('es nulllllll');
//             return null
//         }
//         return data

//     } catch (error) {
//         console.log('Fetch Error, datos no encotrado', error)
        
//     }
// }

// export default getData

//const API = 'https://api.coinlore.net/api/global/'//INFO DE LAS CRIPTO EN EL MUNDO(info global, cuantas monedas hay y eso)

//const API = 'https://api.coinlore.net/api/tickers/'//100 BITCOIN PRINCIPALES EN EL RANKING
const API = 'https://api.coinlore.net/api'

const getData = async (hash) => {
    const apiURL = `${API}${hash}`;
    // const apiURL = API;
    // console.log(apiURL);

    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        if(data.error){//por si no esncuentra el personaje
            //console.log('es nulllllll');
            return null
        }
        return data

    } catch (error) {
        console.log('Fetch Error, datos no encotrado', error)
        
    }
}

export default getData


  