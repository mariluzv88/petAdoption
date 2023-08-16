import React from 'react'

function CatNew() {
  return (
    <div>
        <nav>
            <a href='/cats'>Back</a><br/><br/>
            <a href='/'>Home</a>
        </nav><hr/>
        <form action='/cats' method='POST'><br/>
        Name:<input type='text' name='name'/><br/>
        Age:<input type='number' name='age'/><br/>
        HadFirstCheckUp: <input type='checkbox' name='HadFirstCheckUp'/><br/>
        Description:<input type='text' name='description'/><br/><br/>
        <input type='submit' name='' value='Add Cat'/>
        </form>
    </div>
  )
}

export default CatNew