import React from 'react'

function DogShow(props) {
    const dog = props.dog
  return (
    <div>
        <nav>
            <a href='/dogs'>back</a>
        </nav>
        <h3>Dog Name:{dog.name}</h3>
        <h3>{dog.name} age:{dog.age}</h3>
        <h3>{dog.name} description:{dog.description}</h3>
        <h3>{dog.name} Breed:{dog.breed}</h3>
    </div>
  )
}

export default DogShow
