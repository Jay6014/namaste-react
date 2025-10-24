import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import React from "react";
import "@testing-library/jest-dom"

describe("ContactUs Page Testcases", ()=>{

    beforeAll(()=>{
        console.log("Before All....")
    });

    beforeEach(()=>{
        console.log("Before Each ...")
    });

    afterAll(()=>{
        console.log("After All...")
    });

    afterEach(()=>{
        console.log("After Each...")
    });

    test("Should load ContactUs component",()=>{
        render(<ContactUs />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    test("Should load button inside ContactUs component", ()=>{
        render(<ContactUs />)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    test("Should load button inside ContactUs component", ()=>{
        render(<ContactUs />)
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })

    test("Should load input name inside ContactUs component", ()=>{
        render(<ContactUs />)
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    })

    test("Should load 2 input boxes on the ContactUs component", ()=>{
        render(<ContactUs />)
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    })

    test("Should load all input on the ContactUs component", ()=>{
        render(<ContactUs />)
        const inputBoxes = screen.getAllByRole("textbox");
        /* console.log(inputBoxes); ------- returns a react element */
    /* expect(inputBoxes).toBeInTheDocument();  ----- wrong as inputBoxes returns an array ------- */
    inputBoxes.forEach((input)=>{
        expect(input).toBeInTheDocument();
    })
    })

})


