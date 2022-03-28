import React from "react";
import * as redux from "react-redux";
import { render, screen, waitFor } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";
import mockResponse from "../__mocks__/response";

// .toHaveClass
import "@testing-library/jest-dom/extend-expect";

import { debug } from "console";

test("do some awesome testing", async () => {
  jest.mock("react-redux", () => ({
    useSelector: jest.fn().mockImplementation(() => ({
      media: mockResponse,
      details: {},
    })),
  }));

  render(<App />);

  const toggle = screen.getByRole("checkbox");
  expect(toggle).toBeChecked();

  userEvent.click(toggle);

  expect(toggle).not.toBeChecked();

  debug();

  /*
  const button = screen.getByRole("button", { name: /back/i });
  expect(button).toHaveClass("MuiButton-root");
  userEvent.click(button);

  await waitFor(() => screen.getByRole("heading", { name: /the artist/i }));

  debug(screen.getAllByRole("input"));
  */
  screen.logTestingPlaygroundURL();
});

//const heading = screen.getByRole("heading", { name: /the artist/i });
//expect(button).toHaveClass("MuiButton-root");
//expect(heading).toHaveTextContent("The Artist");
// const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
//const heading = screen.getByRole("heading", { name: /the artist/i });
//debug();
//expect(screen.queryByTestId("back-button")).toHaveClass("MuiSwitch-input");
//expect(heading).toHaveTextContent("The Artist");
//userEvent.click(button);
//expect(heading).not.toHaveTextContent("The Artist");

//screen.logTestingPlaygroundURL();
