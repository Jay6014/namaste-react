import { render, screen } from "@testing-library/react"
import RestaurantCard from '../RestaurantCard'
import MOCK_DATA from '../mocks/resCardMock.json'
import React from 'react'
import { withPromotedLabel } from "../RestaurantCard"


it("Should render RestaurantCard component with Props Data",()=>{
    render(<RestaurantCard resName= {MOCK_DATA}/>)
    const name = screen.getByText("Kwality Walls Ice Cream and More");
    expect(name).toBeInTheDocument();
})


it("Should render RestaurantCard component with Promoted label",()=>{

    const PromotedCard = withPromotedLabel(RestaurantCard);
    render(<PromotedCard resName={MOCK_DATA} />);
    const promoted = screen.getByText("Promoted");
    expect(promoted).toBeInTheDocument();
})



