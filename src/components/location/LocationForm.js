import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = (props) => {
    const { locations, getLocations, addLocation } = useContext(LocationContext)
    const history = useHistory();
   
    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

    */
    const name = useRef(null)
    const address = useRef(null)


    /*
        Get employee state and location state on initialization.
    */
    useEffect(() => {
       getLocations()
    }, [])

    const constructNewLocation = () => {
        /*
            The `location` and `employee` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        
        

        if (address === 0) {
            window.alert("Please select a location")
        } else {
            addLocation({
                name: name.current.value,
                address: address.current.value
            })
            .then(() => history.push("/locations"))
        }
    }

    

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <input type="text" id="locationAddress" ref={address} required autoFocus className="form-control" placeholder="Location address" />
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