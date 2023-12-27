import {render, screen} from "@testing-library/react";
import ContactUs from '../ContactUs';
import "@testing-library/jest-dom";
// run , query , assert
describe("Contact us test cases",()=>{
    test("Should load the contact us component",()=>{
        render(<ContactUs/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    it("Should check the number of text boxes",()=>{
        render(<ContactUs/>);
        const input = screen.getAllByRole("textbox");
        console.log(input);
        expect(input.length).toBe(2);
    });
});
