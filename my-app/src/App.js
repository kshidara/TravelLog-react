import React from "react"
import data from "./data"


export default function App() {

  const cards = data.map(eachData => {

    return <Card
            





          />


  })



  return (
    <div>
      <Navbar   />
      <section className="cards-list">
        {cards}    
      </section>

    </div>

  )
}