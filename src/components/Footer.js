function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-5 p-5" style={{textShadow:'2px 2px 8px white'}}>
      <div className="container">
        <p className="mb-1">© {año} HelioAndes. Todos los derechos reservados.</p>
        <p className="mb-0">
          <a href="/politica-privacidad" className="text-white text-decoration-none mx-2">Política de Privacidad</a> |
          <a href="/terminos-condiciones" className="text-white text-decoration-none mx-2">Términos y Condiciones</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
