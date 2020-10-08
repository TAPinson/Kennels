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
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { AnimalSearch } from "./animal/AnimalSearch"


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
                    <AnimalSearch />
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

            {/* Render the employee create form when http://localhost:3000/employees/create */}
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            {/* Render the expanded animal form when http://localhost:3000/animals/detail/animalId */}
            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
            </AnimalProvider>

            {/* Render the edit animal form when http://localhost:3000/animals/edit/animalId */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* Render the locations list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>


            {/* Render the locations list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
            </LocationProvider>



            {/* Render the locations list when http://localhost:3000/locations/create */}
            <LocationProvider>
                <Route path="/locations/create">
                    <LocationForm />
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
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}