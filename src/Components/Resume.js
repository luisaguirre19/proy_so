import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Visión</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 Nuestra vision es convertirnos en futuros Ingenieros que puedan sobresalir en el ambito profesion en los entornos con constante cambios.
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Mision</span></h1>
         </div>

         <div className="nine columns main-col">
          Entregar nuestros conocimientos para el desarrollo del pais ayudando asi a crear mejores oportunidades de desarrollo mismas que a su vez se traducen en mejores condiciones para el pais.
        </div>
    </div>

    <div className="row work">

      <div className="three columns header-col">
        <h1><span>Objetivos</span></h1>
      </div>

      <div className="nine columns main-col">
      Graduarnos como Ingenieros en Sistemas y con nuestros conocimientos adquiridos poder presentar a Guatemala soluciones tecnologicos que ayuden a ese desarrollo que todos queremos.
      </div>
    </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
      </p>
   </section>
    );
    
  }
  
}

export default Resume;
