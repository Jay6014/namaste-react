import { render , act, screen, fireEvent} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/mockRestoListData.json'
import React from "react"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
 it("Should Search for Resto List for burger text input",async ()=>{
    await act(async ()=> 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter> 
        )
    )
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);
    //getting search btn
    const searchBtn = screen.getByRole("button", {name : "Search"})

    // getting search input box
    const searchInput = screen.getByTestId("searchInput")

    //changing input box value
    fireEvent.change(searchInput,{ target: { value: "Big Bowl"}});

    // now clicking the search btn
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);

})


it("Should see Top Rated Restaurants on Button click", async()=>{
    await act(async ()=>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
            
        )
   )
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);
    const topRatedRestoBtn = screen.getByText("Top Rated Restaurants");
    //console.log(topRatedRestoBtn);

    fireEvent.click(topRatedRestoBtn)
    const topRatedRestos = screen.getAllByTestId("resCard");
    expect(topRatedRestos.length).toBe(2);
})