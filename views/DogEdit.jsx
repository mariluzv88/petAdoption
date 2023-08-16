import React from 'react'

function DogEdit(props) {
    const dog = props.dog
  return (
    <div>
        <nav>
         <a style={{color:'blue'}}  href='/dogs'>back</a><br/>
         </nav>
         <form action={`/dogs/${dog._id}?_method=PUT`}method='POST'>
        
        Name:<input type='text' name='name' defaultValue={dog.name}/><br/>
        Age:<input type='number' name='age'defaultValue={dog.age}/><br/>
       Description:<input type='text' name='description' defaultValue={dog.description}/><br/>
       Breed:<input type='text' name='breed' defaultValue={dog.breed}/><br/>
        <input type='submit' name='' value='Update Dog'/>
        </form>
    </div>
  )
}

export default DogEdit