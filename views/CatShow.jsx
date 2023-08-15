import React from 'react'

function CatShow(props) {
    const cat = props.cat
  return (
    <div>
        <nav>
            <a href='/cats'>back</a>
        </nav>
        <h3>Cat Name:{cat.name}</h3>
        <h3>{cat.name} age:{cat.age}</h3>
        <h3>{cat.HadFirstCheckUp ? "Has had first check up":"Has not had first check up"}</h3>
        <h3>{cat.name} description:{cat.description}</h3>
    </div>
  )
}

export default CatShow