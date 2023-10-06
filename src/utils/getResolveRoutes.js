const resolveRoutes = (route) => {
    //console.log(route);
    // if (route.length <= 3) {
    //     let validRoute = route === '/' ? route : '/:id';
    //     return validRoute;
    // }
    if (route == '/' ) {
        return '/';
    }else if (route == '/about' ){
        return '/about';
    }else if(route.includes('/tickers/')){//si esta haciendo un filtrado
        return '/tickers'; 
    }else if(route.includes('/ticker/?')){//si no tiene el ? es porque se quiere acceder a un personaje
        return '/:id';
    }else if(route.includes('/markets/')){//si no tiene el ? es porque se quiere acceder a un personaje
        return '/markets';
    }
    

    return `/${route}`;

};

export default resolveRoutes;