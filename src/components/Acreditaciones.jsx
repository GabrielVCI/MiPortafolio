import { FaDownload, FaEye } from "react-icons/fa";

export default function Acreditaciones() {
  // Lista de acreditaciones con título y ruta del PDF
  const acreditaciones = [
    { titulo: "Mi Curriculum Vitae", archivo: "/pdfs/CV-personal-una-pagina.pdf" },
    { titulo: "Certificación ITLA", archivo: "/pdfs/Certificado-ITLA.pdf" },
    { titulo: "Certificado Bachiller", archivo: "/pdfs/Certificado-bachiller.pdf" },
    { titulo: "Certificado .NET Core", archivo: "/pdfs/Certificado-Asp.net.pdf" },
    { titulo: "Certificado INFOTEP", archivo: "/pdfs/INFOTEP.pdf" },
    { titulo: "Certificación Scrum", archivo: "/pdfs/Scrum.pdf" }
  ];

  return (
    <section id="acreditaciones" className="acreditaciones">
      <h2>Acreditaciones</h2>
      <div className="cards-container">
        {acreditaciones.map((acred, index) => (
          <div key={index} className="card">
            <h3>{acred.titulo}</h3>
            <div className="card-actions">
              {/* Ver online en otra pestaña */}
              <a href={acred.archivo} target="_blank" rel="noopener noreferrer" className="btn view-btn">
                <FaEye /> Ver
              </a>
              {/* Descargar */}
              <a href={acred.archivo} download className="btn download-btn">
                <FaDownload /> Descargar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
