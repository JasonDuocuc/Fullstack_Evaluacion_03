import React, { useState } from "react";
function Contacto() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const recargaSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado correctamente");
        setMensaje('');
        setCorreo('');
        setNombre('');
        };

    return (
    <section
      id="sectionContacto"
      className="py-5 p-5"
      style={{
        backgroundColor: "#a0a0a0ff",
        padding: "50px 0",
        borderTop: "3px solid #838181ff",
        borderBottom: "3px solid #e0e0e0",
        textShadow:'2px 2px 8px rgba(0,0,0,0.6)'
      }}
    >
        <form onSubmit={recargaSubmit}>
        <div style={{ maxWidth: "40%", margin: "0 auto 15px auto" }}>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" id="nombre" className="form-control" required 
            style={{ border: "1px solid black" }}
            value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div style={{ maxWidth: "40%", margin: "0 auto 15px auto" }}>
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" id="correo" className="form-control" required 
            style={{ border: "1px solid black" }}
            value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>

        <div style={{ maxWidth: "40%", margin: "0 auto 15px auto" }}>
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea id="mensaje" rows="3" className="form-control" required 
            style={{ border: "1px solid black" }}
            value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>

        <div className="text-center">
            <button type="submit" className="btn btn-moderno px-5 mt-3"  style={{ borderRadius: "10px" }}>Enviar</button >
        </div>
        </form>
    </section>

    );
}
export default Contacto;
