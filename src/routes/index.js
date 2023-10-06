import Header from '../templates/Header';
import Home from '../pages/Home';
import Coin from '../pages/Coin';
import Error404 from '../pages/Error404';
import About from '../pages/About';
import Inicio from '../pages/Inicio';
import Markets from '../pages/Markets';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';


const routes = {
    '/': Inicio,
    '/tickers': Home,
    '/:id': Coin,
    '/contact':"Contact",
    '/markets':Markets,
    '/about': About,
};

export const header = async ()=>{
    const header = null ||  document.getElementById('header');
    header.innerHTML= await Header();//renderizamos el Header
}
const router = async () => {
    //console.log('router');
    
    const content = null ||  document.getElementById('content');

    
    

    let hash = getHash();   //obtengo la url despues del hash
    //console.log('ff', hash)

    let route = await resolveRoutes(hash);  //resuelvo la ruta(por si ingreso alguna mal)
    //console.log('ff2', route)
    let render = routes[route] ? routes[route] : Error404;  //la busco en las rutas guardadas
    content.innerHTML = await render(); //renderizo

};

export default router;

window.addEventListener('popstate', () => {
    // Aquí debes manejar el cambio de ruta y cargar el contenido correspondiente.
    //console.log('esta leyendo un cambio....');
    router();
  });



