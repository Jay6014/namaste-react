import { fireEvent, render,screen } from "@testing-library/react";
import React from "react";
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";


// it and test both are same. anything can be written
it("Should load Header Component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>`
        </BrowserRouter> 
    )

    /* one way for finding login button
        -------------------------------
        const button =  screen.getByRole("button");
        expect(button).toBeInTheDocument();
    */


    /*
        const loginButton = screen.getByText("Login");
        expect(loginButton).toBeInTheDocument();
    */

    const loginButton = screen.getByRole("button", {name: "Login"})
    expect(loginButton).toBeInTheDocument();

  
})

it("Should render Header component with a cart items 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>`
        </BrowserRouter> 
    )
    
    /*
        const cartCount = screen.getByText("0");
        expect(cartCount).toBeInTheDocument();
    */

        const cartCount = screen.getByLabelText("cart-count");
        expect(cartCount).toHaveTextContent("0");

})


it("Should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>`
        </BrowserRouter> 
    )
    const loginButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument();

})