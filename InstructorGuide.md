# Instructor Guide

In session one we talked about the basics of the life cycle of a react component: initial render and changes in state causing a rerender. We talked about the `useState` hook and how it returns an array of two values: state and a setter fn for that state, and how it accepts an arguments that serves as the initial value of the state. We talked about the `useEffect` hook and how it's a function similar to `addEventListener` in that it accepts two arguments: what to do and when to do it. We only talked about passing an empty dependency array to run the callback only on initial render of the component. We talked about `JSX` and that all `JSX` must be wrapped in a parent element or react fragment. We stopped at displaying all the product names on the page.

## Styling
This app is set up to use [Radix](https://www.radix-ui.com/themes/docs/overview/getting-started). Up to you if you wish to use it, but it can make these workshops move quickly since it reduces styling time. 


## Ideas for features:

These are just ideas, obviously do whatever you like with this application. When building new features, keep in mind which part of the course the majority of the students are on to know which concepts they have been exposed to:

**Part One:** `JSX`, `useState`, and `useEffect`

**Part Two:** Breaking things into smaller components, rendering components, props.

**Part Three:** `Routes`, `Link`, `useParams`, `useNavigate`, authentication, forms



### Parts One and Two Feature Ideas:

- Display each product with its name, image, price, and whether or not it's sold out. (`product.stock`)
- Add an input to filter in-stock vs out-of-stock items
- Make the product cards and the input filter their own components
- Add a checkbox group or some other type of input to filter which product types are displayed on the page

### Parts Three and Four Feature Ideas:

Run this script to get the basic boiler plate code for authentication. We don't walk students through what's happening in this code.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/day-cohort-70/Cabinet-Quill/main/auth-setup.sh)"
```

- Set up routes

    #### This is the routing pattern they see in Honey Rae Repairs in Part 3:

    <details>
        <summary>main.jsx</summary>

    ```jsx
    import React from "react"
    import ReactDOM from "react-dom/client"
    import { BrowserRouter } from "react-router-dom"
    import { App } from "./App.jsx"
    import "./index.css"

    const container = document.getElementById("root")
    const root = ReactDOM.createRoot(container)
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
    ```
    </details>
    
    <details>
        <summary>App.jsx</summary>

    ```jsx
    import { Route, Routes } from "react-router-dom"
    import { Authorized } from "./views/Authorized"
    import { ApplicationViews } from "./views/ApplicationViews"
    import { Login } from "./components/auth/Login"
    import { Register } from "./components/auth/Register"

    export const App = () => {
    return (
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
            path="*"
            element={
            <Authorized>
                <ApplicationViews />
            </Authorized>
            }
        />
        </Routes>
    )
    }
    ```
    </details>
    
    <details>
        <summary>views/ApplicationViews.jsx</summary>

    ```jsx
    import { Route, Routes, Outlet } from "react-router-dom"
    import { Welcome } from "../components/welcome/Welcome"
    import { TicketList } from "../components/tickets/TicketList"
    import { CustomerDetails } from "../components/customers/CustomerDetails"
    import { NavBar } from "../components/nav/NavBar"
    import { CustomerList } from "../components/customers/CustomerList"
    import { EmployeeList } from "../components/employees/EmployeeList"
    import { EmployeeDetails } from "../components/employees/EmployeeDetails"
    import { useEffect, useState } from "react"
    import { EmployeeForm } from "../components/forms/EmployeeForm"

    export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)
        setCurrentUser(honeyUserObject)
    }, [])

    return (
        <Routes>
        <Route
            path="/"
            element={
            <>
                <NavBar />
                <Outlet />
            </>
            }
        >
            <Route index element={<Welcome />} />
            <Route
            path="tickets"
            element={<TicketList currentUser={currentUser} />}
            />
            <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
            </Route>
            <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
            </Route>
            <Route
            path="profile"
            element={<EmployeeForm currentUser={currentUser} />}
            />
        </Route>
        </Routes>
    )
    }
    ```
    </details>

    #### Once they get to Part 4, this is the routing pattern they build to accommodate staff vs non-staff users. It's up to you if you want to demo different types of users. They database is set up to accommodate this. 

    <details>
        <summary>views/ApplicationViews.jsx</summary>

    ```jsx
    import { EmployeeViews } from "./EmployeeViews"
    import { CustomerViews } from "./CustomerViews"
    import { useEffect, useState } from "react"

    export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)
        setCurrentUser(honeyUserObject)
    }, [])

    if (currentUser.isStaff) {
        return <EmployeeViews currentUser={currentUser} />
    } else {
        return <CustomerViews currentUser={currentUser} />
    }
    }
    ```
    </details>

    <details>
        <summary>views/CustomerViews.jsx</summary>

    ```jsx
    import { Outlet, Route, Routes } from "react-router-dom"
    import { TicketList } from "../components/tickets/TicketList"
    import { TicketForm } from "../components/forms/TicketForm"
    import { CustomerForm } from "../components/forms/CustomerForm"
    import { TicketEdit } from "../components/forms/TicketEdit"
    import { CustomerNav } from "../components/nav/CustomerNav"
    import { Welcome } from "../components/welcome/Welcome"
    import { EmployeeNav } from "../components/nav/EmployeeNav"

    export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
        <Route
            path="/"
            element={
            <>
                <CustomerNav currentUser={currentUser} />
                <Outlet />
            </>
            }
        >
            <Route index element={<Welcome />} />
            <Route path="tickets">
            <Route index element={<TicketList currentUser={currentUser} />} />
            <Route
                path="create"
                element={<TicketForm currentUser={currentUser} />}
            />
            <Route path=":ticketId/edit" element={<TicketEdit />} />
            </Route>
            <Route
            path="profile"
            element={<CustomerForm currentUser={currentUser} />}
            />
        </Route>
        </Routes>
    )
    }
    ```
    </details>
    .
- Add route and view for the user's cart (cart will be whichever order is incomplete: `order.complete`)
- Allow the user to complete their order
- Add route and view for the user's past orders
- View order details to see which items are in an order
- Add a button to the product cards to add to cart
- Allow the user to delete items from their cart

#### I do think it's important to demo forms since this is a capstone requirement. One option is to utilize the staff property on a user and only allow staff users to create, update, and delete products. To do this, update the application to follow the routing pattern above for Part 4. 
- Create a route and view for staff users to create a new product
- Allow staff users to edit a product
- Allow staff users to delete a product



 
