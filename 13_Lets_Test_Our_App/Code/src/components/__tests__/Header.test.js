import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
it("Should load the component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Logout");
  const loginButtonSpecific = screen.getByRole("button",{name:"Logout"});
  const cartZeroItem = screen.getByText("Cart(0)");
  const cartZeroItemUsingRegex = screen.getByText(/Cart/);
  expect(cartZeroItemUsingRegex).toBeInTheDocument();
});
it("Should change the text of the button to logout on click.",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    const logoutButton = screen.getByRole("button");
    fireEvent.click(logoutButton);
    const loginButton = screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
});
