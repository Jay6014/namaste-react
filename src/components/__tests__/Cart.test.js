import RestaurantMenu from '../RestaurantMenu'
import Header from '../Header'
import Cart from '../Cart'
import { act, fireEvent, render,screen } from '@testing-library/react'
import MOCK_RESTO_MENU from '../mocks/mockRestoMenuData.json'
import React from 'react'
import appStore from '../../utils/appStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_RESTO_MENU)
    })
})
it("should load Restaurant Menu Component", async()=>{
    await act(async ()=> 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />   {/* as cart count should be updated, we render Header component also  */}
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
            
            
        )
    )
    
    
    const accordionHeader = screen.getByText("Non Veg Pizza (14)");  // accessing the accordion
    
    fireEvent.click(accordionHeader);   //click on the accordion
    
    expect(screen.getAllByTestId("foodItems").length).toBe(14); //testing whether accordion is expanded or not

    const addBtns = screen.getAllByRole("button", {name: "ADD"}) // accessing all the buttons

    fireEvent.click(addBtns[0]) // clicing on the 1st item

    const cartCount = screen.getByLabelText("cart-count");
    expect(cartCount).toHaveTextContent("1");

    //adding another item to the cart
    fireEvent.click(addBtns[1]) // clicing on the 2nd item

    const cartCountAfter2 = screen.getByLabelText("cart-count");
    expect(cartCountAfter2).toHaveTextContent(2);


    //cart details page count
    expect(screen.getAllByTestId("foodItems").length).toBe(16); // 16 because same <ItemList> component used for both RestaurantMenu and Cart. so as data-testid is property added to ItemList div, initially 14 items are present and then we added 2 to the cart. to get the count 14+2=16

    //testing clearing the cart
    const clearCartBtn = screen.getByText("Clear Cart");
    fireEvent.click(clearCartBtn);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();

})