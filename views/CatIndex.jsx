import React from 'react'

function CatIndex(props) {
    const cats = props.cats
  return (
    <div>
        <nav>
            <a href='/'>Home</a><br/><br/>
            <a href='/cats/new'>Add A Cat</a>
        </nav>
          {cats.map((cat,i)=>{
            return(
             <div key={i}>
                <a href={`/cats/${cat._id}`}>
                <h3>{cat.name}</h3>
                </a>
            </div>
            )
        })}
    </div>
  )
}

export default CatIndex