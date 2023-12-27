
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCKDATA from "../../utils/mocks/restaurantcardmockdata.json";
it("Should load the restaurant card component.", () => {
  render(
        <RestaurantCard swiggyData={MOCKDATA} />
  );
    const name = screen.getByText("Pikwik Since 1991");
   expect(name).toBeInTheDocument();
});