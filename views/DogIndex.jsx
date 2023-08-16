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
                <a href={`/dogs/${dog._id}/edit`}>Edit This Dog Post</a>

                <form action={`/dogs/${dog._id}?_method=DELETE`}method='POST'>
                  <input type='submit' value='DELETE'/>
                </form>
             </div>
          )
        })}

    </div>
  )
}

export default DogIndex