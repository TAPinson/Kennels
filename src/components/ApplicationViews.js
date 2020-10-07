import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
//import { AnimalCard } from "./animal/AnimalCard"
import { AnimalProvider} from './animal/AnimalProvider'
import  {AnimalList} from  './animal/AnimalList'
import { CustomerProvider } from './customer/CustomerProvider'
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from './employee/EmployeeProvider'
import { EmployeeList } from './employee/EmployeeList'
import { LocationList } from './location/LocationList'
import { LocationProvider } from "./location/LocationProvider"
import { AnimalForm } from './animal/AnimalForm'
import { AnimalDetail } from "./animal/AnimalDetail"



export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the animal create form when http://localhost:3000/animals/create */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                        <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
            </AnimalProvider>






            {/* Render the locations list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the employees list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}