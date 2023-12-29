import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCKDATA from "../../utils/mocks/restaurantcardmockdata.json";
import MOCKDATALIST from "../../utils/mocks/restaurantlistcardmockdata.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  // first promise
  return Promise.resolve({
    // second promise
    json: () => {
      return Promise.resolve(MOCKDATALIST);
    },
  });
});
it("Should load the restaurant card component.", () => {
  render(<RestaurantCard swiggyData={MOCKDATA} />);
  const name = screen.getByText("Pikwik Since 1991");
  expect(name).toBeInTheDocument();
});
it("Should load the restaurant promoted card component.", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const name = screen.getAllByText("Promoted");
  expect(name[1]).toBeInTheDocument();
});

it("Should search the restaurant card component.", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  // get the search input
  const searchBar = screen.getByTestId("searchbar");
  console.log(searchBar);
  // add the text pizza or burger // using fire event change the value
  fireEvent.change(screen.getByTestId("searchbar"), {
    target: { value: "burger" },
  });
  const searchButton = screen.getByTestId("searchbtn");
  fireEvent.click(searchButton);

  const restaurantCard = screen.getAllByTestId("restaurantcard");
  expect(restaurantCard.length).toBe(1);
});
