import React, { useState } from "react";
import { Table } from "react-bootstrap";
import '../App.css';

function CalculadoraIntegral() {
  const [potenciaPanel, setPotenciaPanel] = useState(null);
  const [cantidadPanel, setCantidadPanel] = useState(null);

  const [inversor, setInversor] = useState(null);

  const [baterias, setBaterias] = useState(null);
  const [cantidadBaterias, setCantidadBaterias] = useState(null);

  const [estructuraCableado, setEstructuraCableado] = useState(null);
  const [tipoTecho, setTipoTecho] = useState("");

  const [region, setRegion] = useState("");

  const [complejidadInstalacion, setComplejidadInstalacion] = useState("");
  const [subsidio, setSubsidio] = useState("");
  const [metodoEnvio, setMetodoEnvio] = useState("");
  const [garantia, setGarantia] = useState("");
  const [planPago, setPlanPago] = useState("");
  const [tipoPie, setTipoPie] = useState("");
  

  const [valorPie, setValorPie] = useState(null);

  const [instalacionBase, setInstalacionBase] = useState(null);
  const [pesoEstimado, setPesoEstimado] = useState(null);

  const resultadoPotenciaPanel = parseInt(potenciaPanel) || 0;
  const resultadoCantidadPanel = parseInt(cantidadPanel) || 0;

  const resultadoInversor = parseInt(inversor) || 0;

  const resultadoBaterias = parseInt(baterias) || 0;
  const resultadoCantidadBaterias = parseInt(cantidadBaterias) || 0;

  const resultadoTipoTecho = parseInt(tipoTecho) || 0;

  const resultadoRegion = parseInt(region) || 0;

  const resultadoComplejidadInstalacion = parseInt(complejidadInstalacion) || 0;
  const resultadoSubsidio = parseInt(subsidio) || 0;
  const resultadoMetodoEnvio = parseInt(metodoEnvio) || 0;
  const resultadoGarantia = parseInt(garantia) || 0;
  const resultadoPlanPago = parseInt(planPago) || 0;
  const resultadoTipoPie = parseInt(tipoPie) || 0;

  const resultadoValorPie = parseInt(valorPie) || 0;

  const resultadoEstructuraCableado = parseInt(estructuraCableado) || 0;
  const resultadoInstalacionBase = parseInt(instalacionBase) || 0;
  const resultadoPesoEstimado = parseInt(pesoEstimado) || 0;

  const porcentajeRecargoPorTecho = 
  resultadoTipoTecho === 1 ? 1.05 :
  resultadoTipoTecho === 2 ? 1.02 :
  resultadoTipoTecho === 3 ? 1.07 :
  1;

  const baseRegion =
  resultadoRegion === 1 ? 5000 :
  resultadoRegion === 2 ? 9000 :
  resultadoRegion === 3 ? 10000 :
  resultadoRegion === 4 ? 15000 :
  0;

  const porcentajeComplejidadInstalacion =
  resultadoComplejidadInstalacion === 1 ? 1.00 :
  resultadoComplejidadInstalacion === 2 ? 1.08 :
  resultadoComplejidadInstalacion === 3 ? 1.15 :
  1.00;

  const porcentajeSubsidioReferencial =
  resultadoSubsidio === 1 ? 0.00 :
  resultadoSubsidio === 2 ? 0.08 :
  resultadoSubsidio === 3 ? 0.05 :
  0.00;

  const porcentajeMetodoEnvio =
  resultadoMetodoEnvio === 1 ? 1.00 :
  resultadoMetodoEnvio === 2 ? 1.20 :
  1.00;

  const porcentajeGarantiaExtendida =
  resultadoGarantia === 1 ? 1.02 :
  resultadoGarantia === 2 ? 1.04 :
  resultadoGarantia === 3 ? 1.06 :
  1.00;

  const porcentajePlanPago =
  resultadoPlanPago === 1 ? 0.00 :
  resultadoPlanPago === 2 ? 0.02 :
  resultadoPlanPago === 3 ? 0.015 :
  resultadoPlanPago === 4 ? 0.01 :
  0.00;

  const potenciaEstimada = (resultadoPotenciaPanel * resultadoCantidadPanel) / 1000;

  const subtotalEquipos = (resultadoInversor + (resultadoBaterias * resultadoCantidadBaterias) + resultadoEstructuraCableado + (resultadoPotenciaPanel ? resultadoPotenciaPanel * resultadoCantidadPanel : 0)) * porcentajeRecargoPorTecho;
 // 

  const recargoPorTecho = subtotalEquipos * (porcentajeRecargoPorTecho - 1);

  const instalacionFinal = resultadoInstalacionBase * porcentajeComplejidadInstalacion;

  const subsidioFinal = subtotalEquipos * porcentajeSubsidioReferencial;

  const aplicarIVA = (((subtotalEquipos + recargoPorTecho) - subsidioFinal) + instalacionFinal) * 0.19;

  const calculoEnvio = (baseRegion + (resultadoPesoEstimado * 700)) * porcentajeMetodoEnvio;

  const calculoGarantia = subtotalEquipos * (porcentajeGarantiaExtendida - 1);

  const totalAntesFinanciamiento = 
  (subtotalEquipos + recargoPorTecho - subsidioFinal) + 
  instalacionFinal + 
  aplicarIVA + 
  calculoEnvio + 
  calculoGarantia;

  const calcularPie =
  resultadoTipoPie === 1 && resultadoValorPie < totalAntesFinanciamiento ? totalAntesFinanciamiento * (resultadoValorPie / 100):
  resultadoTipoPie === 2 && resultadoValorPie < totalAntesFinanciamiento ? resultadoValorPie:
  0;

  const montoFinanciar = totalAntesFinanciamiento - calcularPie;

  const interesSimple =
  montoFinanciar * porcentajePlanPago * (
  resultadoPlanPago === 2 ? 6 :
  resultadoPlanPago === 3 ? 12 :
  resultadoPlanPago === 4 ? 24 : 0
  );

  const cuota =
  resultadoPlanPago === 1 ? montoFinanciar :
  resultadoPlanPago === 2 ? (montoFinanciar + interesSimple) / 6 :
  resultadoPlanPago === 3 ? (montoFinanciar + interesSimple) / 12 :
  resultadoPlanPago === 4 ? (montoFinanciar + interesSimple) / 24 :
  0;

 const advertenciaPotencia = potenciaEstimada > 7 && resultadoCantidadBaterias  === 0 ? "Recomendado considerar almacenamiento para estabilidad del sistema": "";




  const botonReset = () => {
  setPotenciaPanel('');
  setCantidadPanel('');
  setInversor('');
  setBaterias('');
  setCantidadBaterias('');
  setEstructuraCableado('');
  setTipoTecho('');
  setRegion('');
  setComplejidadInstalacion('');
  setSubsidio('');
  setMetodoEnvio('');
  setGarantia('');
  setPlanPago('');
  setTipoPie('');
  setValorPie('');
  setInstalacionBase('');
  setPesoEstimado('');
  };

  const totalFinal = montoFinanciar + calcularPie + interesSimple;



  return (
    <section id="demo_calculadora" className="py-5 p-5" style={{
      color:'black',
    backgroundColor: '#f0f0f0ff',
    padding: '50px 0',
    borderTop: '3px solid #838181ff',
    borderBottom: '3px solid #e0e0e0',textShadow:'2px 2px 8px rgba(0,0,0,0.6)'
    }}>
      <div>
        <div className="row mt-3">
          <div className="col-lg-12 text-left">
            <h3 style={{ color:'white',textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}> DEMO Calculadora </h3>
          </div>
        </div>

        <div className="row g-4 mt-3" style={{ textAlign: "left" }}>
          <div className="col-lg-6 ">
            <h5 className="my-3">Resultados</h5>
            <div className="form-group mt-3">
              <label className="form-label" htmlFor="potenciaPanel">
                Potencia del panel (W)
              </label>
              <input
                className="form-control"
                id="potenciaPanel"
                name="potenciaPanel"
                placeholder="450"
                value={potenciaPanel}
                onChange={(e) => setPotenciaPanel(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="cantidadPanel">
                Cantidad de paneles
              </label>
              <input
                className="form-control"
                id="cantidadPanel"
                name="cantidadPanel"
                placeholder="8"
                value={cantidadPanel}
                onChange={(e) => setCantidadPanel(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="inversor">
                Inversor (precio){" "}
              </label>
              <input
                className="form-control"
                id="inversor"
                name="inversor"
                placeholder="650000"
                value={inversor}
                onChange={(e) => setInversor(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="baterias">
                baterias
              </label>
              <input
                className="form-control"
                id="baterias"
                name="baterias"
                placeholder="320000"
                value={baterias}
                onChange={(e) => setBaterias(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="cantidadBaterias">
                Cantidad de baterias
              </label>
              <input
                className="form-control"
                id="cantidadBaterias"
                name="cantidadBaterias"
                placeholder="1"
                value={cantidadBaterias}
                onChange={(e) => setCantidadBaterias(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="estructuraCableado">
                Estructura de cableado
              </label>
              <input
                className="form-control"
                id="estructuraCableado"
                name="estructuraCableado"
                placeholder="180000"
                value={estructuraCableado}
                onChange={(e) => setEstructuraCableado(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="valorPie">
                Valor pie
              </label>
              <input
                className="form-control"
                id="valorPie"
                name="valorPie"
                placeholder="10"
                value={valorPie}
                onChange={(e) => setValorPie(e.target.value)}
              ></input>
              <small className="text-muted">Si es porcentaje, 10 = 10%.</small>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="instalacionBase">
                Instalacion base
              </label>
              <input
                className="form-control"
                id="instalacionBase"
                name="instalacionBase"
                placeholder="350000"
                value={instalacionBase}
                onChange={(e) => setInstalacionBase(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="tipoTecho">
                Tipo de techo
              </label>
              <select
                className="form-select"
                id="tipoTecho"
                name="tipoTecho"
                value={tipoTecho}
                onChange={(e) => setTipoTecho(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>Teja/Asfalto</option>
                <option value={2}>Zinc/Planchas</option>
                <option value={3}>Hormigón </option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="region">
                Region
              </label>
              <select
                className="form-select"
                id="region"
                name="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>RM</option>
                <option value={2}>Norte</option>
                <option value={3}>Sur</option>
                <option value={4}>Austral</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="complejidadInstalacion">
                Complejidad instalacion
              </label>
              <select
                className="form-select"
                id="complejidadInstalacion"
                name="complejidadInstalacion"
                value={complejidadInstalacion}
                onChange={(e) => setComplejidadInstalacion(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>Baja</option>
                <option value={2}>Media</option>
                <option value={3}>Alta</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="subsidio">
                Subsidio
              </label>
              <select
                className="form-select"
                id="subsidio"
                name="subsidio"
                value={subsidio}
                onChange={(e) => setSubsidio(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>Sin subsidio</option>
                <option value={2}>Residencial</option>
                <option value={3}>Pyme</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="metodoEnvio">
                Metodo de envio
              </label>
              <select
                className="form-select"
                id="metodoEnvio"
                name="metodoEnvio"
                value={metodoEnvio}
                onChange={(e) => setMetodoEnvio(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>Estandar</option>
                <option value={2}>Expres</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="garantia">
                Garantia
              </label>
              <select
                className="form-select"
                id="garantia"
                name="garantia"
                value={garantia}
                onChange={(e) => setGarantia(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>12 Meses</option>
                <option value={2}>24 Meses</option>
                <option value={3}>36 Meses</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="planPago">
                Plan de pago
              </label>
              <select
                className="form-select"
                id="planPago"
                name="planPago"
                value={planPago}
                onChange={(e) => setPlanPago(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>Contado</option>
                <option value={2}>6 Cuotas</option>
                <option value={3}>12 Cuotas</option>
                <option value={4}>24 Cuotas</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="tipoPie">
                Tipo de pie
              </label>
              <select
                className="form-select"
                id="tipoPie"
                name="tipoPie"
                value={tipoPie}
                onChange={(e) => setTipoPie(e.target.value)}
              >
                <option>Seleccione su previsión</option>
                <option value={1}>Porcentaje</option>
                <option value={2}>Monto fijo</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="form-label" htmlFor="pesoEstimado">
                Peso estimado (kg)
              </label>
              <input
                className="form-control"
                id="pesoEstimado"
                name="pesoEstimado"
                placeholder="90"
                value={pesoEstimado}
                onChange={(e) => setPesoEstimado(e.target.value)}
              ></input>
            </div>

            <div className="form-group mt-3" style={{ textAlign: "left" }}>
              <button
                type="button"
                class="btn btn-moderno"
                onClick={botonReset}
              >
                Reiniciar
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <h5 className="my-3">Resultados</h5>

            {advertenciaPotencia && (
              <div
                className="alert alert-danger mt-2"
                role="alert"
                style={{ fontWeight: "bold" }}
              >
                {advertenciaPotencia}
              </div>
            )}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Potencia estimada</th>
                  <th>{"KW " + potenciaEstimada.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Subtotal equipos</th>
                  <th>{"$" + subtotalEquipos.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Recargo Techo</th>
                  <th>{"$" + recargoPorTecho.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Subsidio</th>
                  <th>{"$" + subsidioFinal.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Instalacion final</th>
                  <th>{"$" + instalacionFinal.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>IVA 19%</th>
                  <th>{"$" + aplicarIVA.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Garantia</th>
                  <th>{resultadoGarantia.toLocaleString() + " Meses"} </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Total antes de financiar</th>
                  <th>{"$" + totalAntesFinanciamiento.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Pie</th>
                  <th>{"$" + calcularPie.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Interes total</th>
                  <th>{"$" + interesSimple.toLocaleString()}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Cuota</th>
                  <th>{
                    resultadoPlanPago === 1
                      ? "Contado"
                      : resultadoPlanPago * 6 +
                        " cuotas de $" +
                        cuota.toLocaleString()
                  }</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "lightyellow" }}>
                    Total final
                  </th>
                  <th style={{ backgroundColor: "lightyellow" }}>
                    {"$" + totalFinal.toLocaleString()}
                  </th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalculadoraIntegral;
