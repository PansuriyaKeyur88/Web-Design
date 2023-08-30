"use client"
import React from 'react'

const page = () => {
  function Mybutton() {
    return (
      <button>
        Click Me
      </button>
    )
  }

  const user ={
    name:'Hedy Lamarr',
    src:"https://i.imgur.com/yXOvdOSs.jpg",
    imageSize:80,
  };
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
      </div>
      <div>
        <p className='change'>Keyur <br /> Pansuriya</p>
      </div>
      <div>
        <Mybutton />
      </div>
      <div>
        <h1>{user.name}</h1>
        <img className='avtar' src={user.src} alt={'Photo of ' + user.name} 
        style={{
          width:user.imageSize,
          height:user.imageSize
        }} />
      </div>

    </>
  )
}

export default page
