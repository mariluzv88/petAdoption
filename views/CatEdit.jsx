import React from 'react'

function CatEdit(props) {
    const cat = props.cat
  return (
    <div>
         <a style={{color:'blue'}}  href='/dogs'>back</a>
        <form action={`/cats/${cat._id}?_method=PUT`}method='POST'>
        Name:<input type='text' name='name'defaultValue={cat.name}/><br/>
        Age:<input type='number' name='age'defaultValue={cat.age}/><br/>
        HadFirstCheckUp:
        { cat.HadFirstCheckUP ? <input type='checkbox' name='HadFirstCheckUP' defaultChecked />:<input type='checkbox' name='HadFirstCheckUP'/>}<br/>
        Description:<input type='text' name='description' defaultValue={cat.description}/><br/><br/>
        <input type='submit' name='' value='Update Cat'/>
        </form>
    </div>
  )
}

export default CatEdit