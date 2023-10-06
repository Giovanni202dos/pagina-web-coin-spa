function getHashh(){
    const hash =window.location.hash;
    return hash;
}
function setValorDeUnParametroDelHash(desdeRanki, canti){
if(desdeRanki>=0 && canti>=0){
        // Obtiene el hash actual de la URL
        const hash = getHashh();

        // Analiza el hash para extraer los parámetros
        const params = new URLSearchParams(hash.slice(1)); // Elimina el símbolo '#' y crea un objeto URLSearchParams
        
        //console.log('hahsh1: ', hash);
        //console.log('hhhh: ', params);
    
        // Convierte los parámetros nuevamente en una cadena con barras en lugar de porcentaje
        let nuevoHash = '#';
        params.forEach((value, key) => {
            key.includes('start')?value=desdeRanki:value;//para que vuelva a la pagina uno
            key.includes('limit')?value=canti:value;
            nuevoHash += `${key}=${value}&`;
        });
        
        // Elimina el último "&" si es necesario
        if (nuevoHash.endsWith('&')) {
        nuevoHash = nuevoHash.slice(0, -1);
        }
        //console.log('nuevo hash: ', nuevoHash);
    
        // // Actualiza la URL con el nuevo hash
        window.location.hash = nuevoHash;
}else{
    alert('numeros invalidos');
}

}

function setDelHash(hash){
     // // Actualiza la URL con el nuevo hash
     //console.log('setDelHash');
     window.location.hash = hash;
}



function cambioAparaiencia(){
    //console.log('cambiode apariencia');
    let contenedor=document.getElementById('Main')
    if (contenedor) {
        contenedor.id='Main-black';
        
    }else{
        document.getElementById('Main-black').id='Main';//lo volvemos a white 
        
    }
}

function cambioPage(haciaDonde,paginaActual,cantiPaginas){
    //console.log('cambio de pagina');
        // Obtiene el hash actual de la URL
        const hash = getHashh();

        // Analiza el hash para extraer los parámetros
        const params = new URLSearchParams(hash.slice(1)); // Elimina el símbolo '#' y crea un objeto URLSearchParams
        
        //console.log('hahsh1: ', hash);
        //console.log('hhhh: ', params);
    

        // Convierte los parámetros nuevamente en una cadena con barras en lugar de porcentaje
        let nuevoHash = '#';
        params.forEach((value, key) => {
            //key.includes('start')?value=haciaDonde==-1?(value)-100:parseInt(value)+100:value;//para que vuelva a la pagina uno
            if (key.includes('start')) {
                if (haciaDonde==-1) {//quiere retroceder
                    if (paginaActual==0) {
                        document.getElementById("retroceder-boton").style.display='none';
                    }else{
                        value=(value)-100;
                    }
                    
                }else{//quiere avanzar
                    if (cantiPaginas==paginaActual) {
                        document.getElementById("avanzar-boton").style.display='none';
                    }else{
                        value=parseInt(value)+100;
                    }  
                }
            }
            nuevoHash += `${key}=${value}&`;
        });
        
        // Elimina el último "&" si es necesario
        if (nuevoHash.endsWith('&')) {
        nuevoHash = nuevoHash.slice(0, -1);
        }
        //console.log('nuevo hash: ', nuevoHash);
        
    
        // // Actualiza la URL con el nuevo hash
        window.location.hash = nuevoHash;
}

function calcualarPaginaActual(){
        // Obtiene el hash actual de la URL
        const hash = getHashh();

        // Analiza el hash para extraer los parámetros
        const params = new URLSearchParams(hash.slice(1)); // Elimina el símbolo '#' y crea un objeto URLSearchParams
        
        //console.log('hahsh1: ', hash);
        //console.log('hhhh: ', params);
    
        let pagina=0;
        params.forEach((value, key) => {
            //console.log('key: ', key,' value: ',value);
            //key.includes('start')?value=haciaDonde==-1?(value)-100:parseInt(value)+100:value;//para que vuelva a la pagina uno
            if (key.includes('start')) {
                pagina=value/100;
                //console.log('fff: ',pagina)
                return pagina;  
            }

        });

        return pagina;
    
}


