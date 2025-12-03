import '../App.css';

function Hero(){
    return(
    <section  className="py-5 p-5" style={{backgroundImage:"url('/assets/Banner_fondo.webp')",backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',width:'100%',textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 style={{color:'white', textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Energia solar accesible y confiable para tu hogar o pyme</h3>
                    <h4 style={{color:'white',textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Reduce tus costos energeticos y contribuye a un futuro limpio</h4>
                    <a href="#demo_calculadora" className="btn btn-moderno ms-3"><i className="bi bi-lightning-charge"></i>Ver DEMO</a>
                    <a href="/assets/catalogo-helioandes.docx" download className="btn btn-moderno ms-3"><i className="bi bi-download"></i>Descargar Catálogo</a>
                </div>
            </div>
        </div>
            
           
    
    </section>



    );


}

export default Hero