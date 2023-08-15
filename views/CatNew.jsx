import React from 'react'

function CatNew() {
  return (
    <div>
        <nav>
            <a href='/cats'>Back</a><br/><br/>
            <a href='/'>Home</a>
        </nav><hr/>
        <form action='/cats' method='POST'><br/>
        Name:<input type='text' name='Name'/><br/>
        Age:<input type='text' name='Age'/><br/>
        HadFirstCheckUp: <input type='checkbox' name=''/><br/>
        Description:<input type='text' name=''/><br/><br/>
        <input type='submit' name='' value='Add Cat'/>
        </form>
    </div>
  )
}

export default CatNew