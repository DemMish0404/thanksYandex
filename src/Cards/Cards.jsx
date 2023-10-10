import React from 'react'
import "./Cards.css"
import { useState } from "react"
import Card from "../Card.jsx"


function Cards() {
   const [films, SetFilms] = useState([])

   const [title, SetTitle] = useState('')
   const [mark, SetMark] = useState('')
   const [description, SetDescription] = useState('')


   return (
      <>

         <form action='/' > 
            <input  type="text" value={title} onChange={(el) => {
               SetTitle(el.target.value)
            }} />
            <input  type="text" value={mark} onChange={(el) => {
               SetMark(el.target.value)
            }} />
            <input  type="text" value={description} onChange={(el) => {
               SetDescription(el.target.value)
            }} />

            <button type='button' onClick={() => {
               if( title == "" || description == "" || mark == ""){
                  return;
               }

               SetFilms((prev) => {
                  
                  return prev.concat({
                     title: title,
                     description: description,
                     mark: mark
                  })
               })
            }}>Добавить</button>

         </form>
         <div className='films'>
            {
               films.map((item) => {
                  return <Card title={item.title} description={item.description} mark={item.mark} />

               })
            }

         </div>
      </>
   )
}

export default Cards