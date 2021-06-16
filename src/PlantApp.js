import React, {useState, useRef} from 'react';

const PlantApp = () => {
    const [plants, setPlants] = useState([])
    return (
        <div>
            <h1>Add Plants to Your Garden</h1>
            <AddPlant setPlants={setPlants}/>
            <PlantList plants={plants} setPlants={setPlants}/>
        </div>
    )
}

const PlantList = ({plants, setPlants}) => {
    return (
        <div>
            {plants.map((plant) => (
                <div 
                    key={plant.key}
                >
                    <h2>
                        {plant.name} 
                        ({plant.type}) 
                        <Delete plant={plant} setPlants={setPlants}/></h2>
                    <p>Water: {plant.water}</p>
                    <p>Sunlight: {plant.sun}</p>
                    <p>Location: {plant.location}</p>
                </div>
            ))}
        </div>
    )
}

const Delete = ({plant, setPlants}) => {
    const handleDelete = () => {
        const confirmed = window.confirm('Delete?');
        if (confirmed) {
            setPlants((prevPlants) => {
                return prevPlants.filter((p) => p.id !== plant.id)
            })
        }
    }
    return (
        <span
            onClick={handleDelete}
            style={{
                marginLeft: 10,
                color: 'orange',
                fontWeight: 900,
            }}
        >
            Delete
        </span>
    )
}

const AddPlant = ({setPlants}) => {
    const nameInput = useRef();
    const waterInput = useRef();
    const sunInput = useRef();
    const typeInput = useRef();
    const locationInput = useRef();
    const handleSubmit = (e) => {

        e.preventDefault();
        const name = e.target.elements.plantName.value;
        const water = e.target.elements.waterPref.value;
        const sun = e.target.elements.sunPref.value;
        const type = e.target.elements.type.value;
        const location = e.target.elements.location.value;
        
        const newPlant = {
            id: Math.floor(Math.random()*1000000),
            name,
            water,
            sun,
            type,
            location,
        }
        setPlants( (prevPlants) => (
            prevPlants.concat(newPlant)
        ))

        nameInput.current.value = '';
        waterInput.current.value = '';
        sunInput.current.value = '';
        typeInput.current.value = '';
        locationInput.current.value = '';
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="plantName">Plant name</label>
                <input id="plantName" ref={nameInput}/>
            </div>
            <div>
                <label htmlFor="waterPref">Water Needs</label>
                <input id="waterPref" ref={waterInput}/>
            </div>
            <div>
                <label htmlFor="sunPref">Sun Needs</label>
                <input id="sunPref" ref={sunInput}/>
            </div>
            <div>
                <label htmlFor="type">Annual/Perennial</label>
                <input id="type" ref={typeInput}/>
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input id="location" ref={locationInput}/>
            </div>
            <button type="submit">Add Plant</button>
        </form>
    )
}

export default PlantApp;