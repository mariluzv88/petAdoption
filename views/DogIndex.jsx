import { color } from 'framer-motion'
import React from 'react'

function DogIndex(props) {
    const dogs = props.dogs
    console.log(dogs)
  return (
    <div>
        <nav>
            <a style={{color:'orange'}} href='/'>Home</a><br/><br/>
            <a style={{color:'green'}} href='/dogs/new'>Add A Dog</a>
        </nav>
        {dogs.map((dog,i)=>{
          return(
             <div key={i}>
                
                <a  style={{color:'red'}}href={`/dogs/${dog._id}`}>
                <h3>{dog.name}</h3>
                </a>
                <a style={{color:'purple'}} href={`/dogs/${dog._id}/edit`}>Edit </a>

                <form action={`/dogs/${dog._id}?_method=DELETE`}method='POST'>
                  <input type='submit' value='DELETE'/>
                </form><hr/>
             </div>
          )
        })}

    </div>
  )
}

export default DogIndex