import React from 'react'
import "./Card.css"
import imgForCard from "./assets/formovie.png"

const Card = ({
   title, description, mark
}) => {
   return (
      <div className='card'>
         <div className="card__media">
            <img src={imgForCard} alt=" картинка для карточки" />
         </div>
         <div className="card__below">
         <h6 className="card__label">{title}</h6>

            <div className="card__rate rate">
               <div className="rate__what">Оценка: </div>
               <div className="rate__mark">{mark}</div>
            </div>

            <div className="card__description">{description}</div>
         </div>

      </div>
   )
}

export default Card