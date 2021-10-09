import React from 'react';
import react from 'react';

interface PetState {
    name: string;
    breed: string;
}

export class Petform extends React.Component<{}, PetState> {
    state:PetState = {
        name: '',
        breed: '',
    }
}

const handleSubmit = () => {

}

const handleChange = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name;
    const breed = event.target.name;
    const value = event.target.value;
    console.log(`input`, name, value);
}


   function petfrom(this: any){

    return<div>
        <form onSubmit={this.handleSubmit}>
            <label>Dog</label>
            <input name={'dog'} type='text' required minLength={3}  onChange={this.handleChange} />
            <label>Felinos</label>
            <input name={'felinos'}  type='email'  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={this.handleChange}/>
            
            <select name='type' onChange={this.handleChange}>
                <option value={1}> Opcion 1</option>
                <option value={2}> Opcion 2</option>
                <option value={3}> Opcion 3</option>
            </select>
        </form>
    </div>

   }


