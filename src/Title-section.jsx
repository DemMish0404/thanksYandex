import React from 'react'
import "./Title-section.css"

function Titlesection({
   title, second
}) {
   return (
      <h2 className="title-section">{title} {second}</h2>
   )
}

export default Titlesection

