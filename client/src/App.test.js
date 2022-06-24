import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { act } from "react-dom/test-utils"; // ES6
import { AppProvider } from "./context/appContext";

const AllTheProviders = ({ children }) => {
  return (
    <AppProvider theme="light">
      <MemoryRouter>{children}</MemoryRouter>
    </AppProvider>
  );
};

describe("App", () => {
  it("should show me main pages title", () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getByText("Mine Sweeper")).toBeInTheDocument();
  });

  it("should have 4 buttons on screen", () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getAllByRole("button").length).toBe(4);
  });

  it("when nav to a page not built I should see under development", async () => {
    render(<App />, { wrapper: AllTheProviders });
    const Login = screen.getByText("Login");
    // Reason is that it its an async act, just right now it's not for some reason.
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(Login);
    });
    expect(screen.getByText("Under Development")).toBeInTheDocument();
  });

  it("when I nav to /game I should see X", async () => {
    render(<App />, { wrapper: AllTheProviders });
    const startGame = screen.getByText("Start Game");
    await act(async () => await userEvent.click(startGame));
    expect(screen.getByTestId("Game Page")).toBeInTheDocument();
  });

  it("when I nav to a page not part of the site I should see a 404", async () => {
    render(
      <MemoryRouter initialEntries={["/badUrl"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
