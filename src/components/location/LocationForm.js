import React, { useContext, useRef, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = (props) => {
    const { locations, getLocations, addLocation, updateLocation, getLocationById } = useContext(LocationContext)
    //for edit, hold on to state of animal in this view
    const [location, setLocation] = useState({})
    const {locationId} = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newLocation = { ...location }
        //animal is an object with properties. 
        //set the property to the new value
        newLocation[event.target.name] = event.target.value
        //update state
        setLocation(newLocation)
    }

    /*
        Get location state on initialization.
    */
    useEffect(() => {
       getLocations()
       .then(() => {
           if (locationId) {
               //console.log("Does this even run?", location, locationId)
               getLocationById(locationId)
               .then(location => {
                   setLocation(location)
               })
           }
       })
    }, [])

    const constructNewLocation = () => {
        if (location.address === 0) {
            window.alert("Please select a location")
        } else {
            if (locationId === undefined) {
                addLocation({
                    name: location.name,
                    address: location.address
                })
                .then(() => history.push("/locations"))
            } else {
                updateLocation({
                    id: locationId,
                    name: location.name,
                    address: location.address
                })
                .then(() => history.push("/locations"))
            }
        }
    }
    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" name="name" required autoFocus className="form-control" 
                    placeholder="Location name" 
                    onChange={handleControlledInputChange} 
                    defaultValue={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location Address: </label>
                    <input type="text" id="locationAddress" name="address" required className="form-control" 
                    placeholder="Location address"
                    onChange={handleControlledInputChange}
                    defaultValue={location.address}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewLocation()
                }}
                className="btn btn-primary">
                Save Location
            </button>
        </form>
    )
}