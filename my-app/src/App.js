import React from "react"
import data from "./data"
import Navbar from "./Navbar"
import Card from "./Card"


export default function App() {

  const cards = data.map(eachData => {

    return (<Card
              key={eachData.id}
              {...eachData}
          />
    )

  })



  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}    
      </section>

    </div>

  )
}