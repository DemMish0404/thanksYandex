import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
import './index.css'
import Titlesection from "./Title-section.jsx"
import Cards from './Cards/Cards.jsx'
import Card from "./Card.jsx"





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <main className='page'>
      <section className="page__new new">
        <div className="new__container">
          <Titlesection title={'НОВИНКИ'} second={"фильмов"} />
          <Cards/>
          

          
        </div>
      </section>
    </main>


  </>
)
