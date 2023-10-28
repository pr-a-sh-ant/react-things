import Greeting from "./greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("Renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders good to see you", () => {
    render(<Greeting />);

    const goodtoSeeYou = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodtoSeeYou).toBeInTheDocument();
  });

  test("render changed! if the button was clicked", async () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByText("Change Text!");
    await userEvent.click(buttonElement);

    //Assert
    const changedText = screen.getByText("Changed!");
    expect(changedText).toBeInTheDocument();
  });

  test("no its good to see you paragraph", async () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    //Assert
    const goodText = screen.queryByText("good to see you", { exact: false });
    expect(goodText).toBeNull();
  });
});
