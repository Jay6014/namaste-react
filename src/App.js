import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import '../index.css';
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = ()=> {
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        // some api call
        const data = {
            name: "Jaya Sree"
        }
        setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}} >
                <div className="app">
                        <Header />
                    {/* <Body /> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
        
    );
};


/*
but this will not work as expected because when we route to "/about-us" or "/contact-us", Header will not display
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about-us",
        element: <AboutUs />
    },
    {
        path: "/contact-us",
        element: <ContactUs />

    }
]);

*/


// Children Routing
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/restaurants/:restaurantId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<Shimmer />}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)