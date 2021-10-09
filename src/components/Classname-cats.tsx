import React from 'react';


interface ClassnamecatsProps {
    name: string;
    breed: string;
    JustClick: (name:string) => void;
}


export const breedCat: React.FC<ClassnamecatsProps> = ({name,breed,JustClick}) => {

    return <div>
        <ul onClick={()=> JustClick(name)}>
            <li>Name: {name}</li>
            <li>Breed: {breed}</li>

        </ul>
    </div>
}


    
