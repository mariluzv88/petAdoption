import React from 'react'

function DogIndex(props) {
    const dogs = props.dogs
    console.log(dogs)
  return (
    <div>
        <nav>
            <a href='/'>Home</a><br/><br/>
            <a href='/dogs/new'>Add A Dog</a>
        </nav>
        {dogs.map((dog,i)=>{
          return(
             <div key={i}>
                
                <a href={`/dogs/${dog._id}`}>
                <h3>{dog.name}</h3>
                </a>
             </div>
          )
        })}

    </div>
  )
}

export default DogIndex