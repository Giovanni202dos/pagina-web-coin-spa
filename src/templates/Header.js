const Header = () => {

    //<button onclick="cambioAparaiencia()" id="boton-apariencia"> black </button>

    const view = `
    
        <div class="Header-main">
            <div class="Header-logo">
                <h1 />
                    <a  href='#/'>
                    COIN
                    </a>  
                </h1>
            </div>


            <div class="Header-nav">
                <a href="#/about">
                    About
                </a>

            </div>
        </div>
    <section id="section-boton-apariencia" class="switch-container">
        <label class="switch">
            <input type="checkbox" id="toggleSwitch" onclick="cambioAparaiencia()">
            <span class="slider"></span>
        </label>
        
        
        
    </section>
    `
    return view;
};

export default Header