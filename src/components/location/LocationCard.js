import React from "react"
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationCard = (location) => {
    const history = useHistory()
    return (
    <section className="location">
        <h3 className="location__name">{location.location.name}</h3>
        <div className="location__address">{location.location.address}</div>
        <button onClick={() => {history.push(`/locations/edit/${location.location.id}`)}}>
          Edit Location
      </button>
    </section>
)}