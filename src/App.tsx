import React from 'react';
import './App.css';
import {breeddog} from './components/Raza-perro';
import {breedCat} from './components/Classname-cats';



function myapp() {
  return (
    <header className='class-header'>
       <div>
         <h1>Breed Animals</h1>
         <p className="texto">Planet of the Animals</p>
       </div>
    </header>
  )
}

export type Pets = {
  name: string;
  breed: string;
}

   
  const petDog = [{ name: 'German Shepherd',  breed: 'Dog' }, { name: 'Golden', breed:'Dog'}];   
  const petcat = [{ name: 'Leon',  breed: 'felino' }, { name: 'Jaguar', breed:'felino'}];   
  

  

const JustClick = (name:string) => console.log('click en raza de animales', name);



export default myapp;