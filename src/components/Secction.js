import React, {Component} from 'react';
// import Hobies from './Hobies';

const persons = [
  {name: 'Betsy Vidal', img: 'assets/images/betsy.jpg', discription: 'Soy una apasionada por crear productos tecnológicos y estar en constante aprendizaje. Actualmente soy front-end developer de Laboratoria, y aspiro a ser full-stack en el futuro. Tengo conocimientos en diseño y desarrollo de proyectos web, también poseo conocimientos en administración de aplicaciones y páginas web con firebase. A futuro aspiro trabajar en una empresa líder en tecnología, también ser freelancer y hacer proyectos tecnológicos de mayor alcance.', hobies: ['cantar', 'bailar', 'leer', 'programar']},
];

const Secction = () => (
  <div>
  {persons.map(person =>
  <div key={person.name}>
    <h1>{person.name}</h1>
    <img src={person.img} alt="person"/>
    <div>{person.discription}</div>
    <ul>
    {
      person.hobies.map((list,index)=>{
        return <li key={index}>{list}</li>
      })
    }
  </ul>
    </div>
  )}
  </div>
)

export default Secction