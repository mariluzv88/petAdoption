import React from 'react'

function CatIndex(props) {
    const cats = props.cats
  return (
    <div>
        <nav>
            <a   style={{color:'orange'}}href='/'>Home</a><br/><br/>
            <a  style={{color:'green'}}href='/cats/new'>Add A Cat</a>
        </nav>
          {cats.map((cat,i)=>{
            return(
             <div key={i}>
                <a style={{color:'red'}} href={`/cats/${cat._id}`}>
                <h3>{cat.name}</h3>
                </a>
                <a style={{color:'purple'}} href={`/cats/${cat._id}/edit`}>Edit </a><br/>
                <form action={`/cats/${cat._id}?_method=DELETE`}method='POST'>
                  <input type='submit' value='DELETE'/>
                </form>
            </div>
            )
        })}
    </div>
  )
}

export default CatIndex