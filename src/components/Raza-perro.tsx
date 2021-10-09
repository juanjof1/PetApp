import React from 'react';

interface breedProps {
    name: string;
    breed: string;
    JustClick: (name:string) => void;
}

export const breeddog: React.FC<breedProps> = ({name,breed,JustClick}) => {

    return <div>
        <ul onClick={()=> JustClick(name)}>
            <li>Name: {name}</li>
            <li>Breed: {breed}</li>

        </ul>
    </div>
}


