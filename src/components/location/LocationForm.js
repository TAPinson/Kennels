import React, { useContext, useRef, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = (props) => {
    const { locations, getLocations, addLocation, updateLocation } = useContext(LocationContext)


    //for edit, hold on to state of animal in this view
    const [location, setLocation] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);
    const {locationId} = useParams();
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
        Get location state on initialization.
    */
    useEffect(() => {
       getLocations()
    }, [])

    const constructNewLocation = () => {
        if (address === 0) {
            window.alert("Please select a location")
        } else {
            if (locationId === undefined) {
                addLocation({
                    name: name.current.value,
                    address: address.current.value
                })
                .then(() => history.push("/locations"))
            } else {
                updateLocation({
                    id: locationId,
                    name: name.current.value,
                    address: address.current.value
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
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location Address: </label>
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