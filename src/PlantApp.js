import React, {useState} from 'react';

const PlantApp = () => {
    const [plants, setPlants] = useState([
        { id: 1, name: "Plumeria" },
        { id: 2, name: "Jasmine" },
        { id: 3, name: "Orchid" }
    ])
    return (
        <div>
            <h1>This is for plants</h1>
            <PlantList plants={plants}/>
        </div>
    )
}

const PlantList = ({plants}) => {
    return (
        <ul>
            {plants.map((plant) => (
                <li key={plant.key}>{plant.name}</li>
            ))}
        </ul>
    )
}

export default PlantApp;