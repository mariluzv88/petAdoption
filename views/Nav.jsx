import React from 'react'

function Nav() {
  return (
    <div>
        <h1>PET ADOPTION</h1>
        <hr/>
        <a style={{color:'purple'}}  href='/dogs'>Dog List</a><br/><br/>
        <a  style={{color:'purple'}} href='/cats'>Cat List</a>
    </div>
  )
}

export default Nav