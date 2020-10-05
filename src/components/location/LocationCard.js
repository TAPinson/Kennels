import React from "react"
import "./Location.css"

export const LocationCard = (location) => (
    //console.log("LOCATION",location),
    
    <section className="location">
        <h3 className="location__name">{location.location.name}</h3>
        <div className="location__address">{location.location.address}</div>
    </section>
)