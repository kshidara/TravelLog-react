import React from "react"


export default function Card(props) {

    return (

        <div className="card">

            <img className="card--img" src="{props.image}" />
            <img className="pin--img" />
            <span className="card--location">{props.location}</span>
            <a href="{props.link}">View on Google Maps</a>
            <h2 className="card--title">{props.title}</h2>
            <span className="card--dates"> {props.startDate} - {props.endDate}</span>
            <p className="card--description">{props.description}</p>

        </div>


        )

}

{/*<img className="card--img" src=""/>
            <img className="pin--img" src=""/>*/}
            