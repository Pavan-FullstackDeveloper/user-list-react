import React from 'react'

import "./UserStyle.css"

const UserProfille = (Props) => {
    
    const {imgUrl,name,role}=Props.userDetails
    
  return (
    <div className="div1">
        <img src={imgUrl} alt="Profile" className="img-styles"/>
        <div>
           <h1 className="heading">{name}</h1>
           <p className="role">{role}</p>    
        </div>
    </div>
  )
}

export default UserProfille;