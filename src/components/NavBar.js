import React from 'react'
import './NavBar.css'
export default function NavBar() {
  return (
    <div className='nav'>
      <div className='nav-child'>
        <h4><a href='#introduction' style={{color:'beige'}}>Introduction</a></h4>
        <h4><a href='#projects'  style={{color:'beige'}}>Projects</a></h4>
        <h4><a href='#about'  style={{color:'beige'}}>About Me</a></h4>
        <h4><a href='#contact'  style={{color:'beige'}}>Contacts</a></h4>
      </div>
    </div>
  )
}