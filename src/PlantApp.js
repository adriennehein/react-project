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
            <AddPlant setPlants={setPlants}/>
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

const AddPlant = ({setPlants}) => {
    const nameInput = React.useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.plantName.value;
        const newPlant = {
            id: Math.floor(Math.random()*1000000),
            name,
        }
        setPlants( (prevPlants) => (
            prevPlants.concat(newPlant)
        ))

        nameInput.current.value = '';
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="plantName">Plant name</label>
                <input id="plantName" ref={nameInput}/>
            </div>
            <button>Add Plant</button>
        </form>
    )
}

export default PlantApp;