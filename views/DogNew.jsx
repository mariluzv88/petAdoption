import React from 'react'

function DogNew() {
  return (
    <div>
          <nav>
            <a href='/dogs'>Back</a><br/><br/>
            <a href='/'>Home</a>
        </nav><hr/>
        <form action='/dogs' method='POST'>
        Name:<input type='text' name='Name'/><br/>
        Age:<input type='text' name='Age'/><br/>
       Description:<input type='text' name=''/><br/>
       Breed:<input type='text' name=''/><br/>
        <input type='submit' name='' value='Add Dog'/>
        </form>
    </div>
  )
}

export default DogNew