
const Inicio = async () => {
    // const hash = getHash();
    // //console.log('hassss: ', hash)
    // if(hash =='/'){
    //     //location.hash='/page=1';
    //     //window.location.href=window.location.href;
    // }

    

    const view = `
        <div class="inicio">
            <div id="contenedor-main-1">
            <h1>Criptomonedas</h1>
                <div class="inicio-boton">
                    <a href="#/tickers/?start=0&limit=100">
                        Bienvenido
                    </a>
                </div>
                
            </div>


        </div>
    `;
    return view;
}

export default Inicio;