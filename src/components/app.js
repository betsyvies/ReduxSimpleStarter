import React from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';

const  Hobies = ['cantar, bailar, leer, programar'];

const App = () => (
  <div>
    <Header/>
    <Section/>
    <List data={Hobies}/> 
  </div>
)

export default App
