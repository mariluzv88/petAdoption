import React from 'react'

function DogNew() {
  return (
    <div>
          <nav>
            <a href='/dogs'>Back</a><br/><br/>
            <a href='/'>Home</a>
        </nav><hr/>
        <form action='/dogs' method='POST'>
        Name:<input type='text' name='name'/><br/>
        Age:<input type='number' name='age'/><br/>
       Description:<input type='text' name='description'/><br/>
       Breed:<input type='text' name='breed'/><br/>
        <input type='submit' name='' value='Add Dog'/>
        </form>
    </div>
  )
}

export default DogNew