import '../styles/global.css'
export default function Videos() {
  return (
    <section id="videos" className="videos">
      <h2>Videos de proyectos</h2>
      <div className="video-list">
        <div className="video-item">
          <iframe 
            width="1236" 
            height="695" 
            src="https://www.youtube.com/embed/EgWqKNzEN3Y" 
            title="RealRdEstate App" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>RealRDEstate APP</p>
        </div>
        
        <div className="video-item">
          <iframe 
            width="1236" 
            height="695" 
            src="https://www.youtube.com/embed/vEn_ek3Us3Y" 
            title="Presupuesto App" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>Presupuesto APP</p>
        </div> 
      </div>
    </section>
  );
}
