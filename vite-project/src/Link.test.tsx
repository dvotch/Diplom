import { cleanup, fireEvent, render } from "@testing-library/react";
import Link from "./Link";

afterEach(cleanup);

it("CheckboxWithLabel changes the text after click", () => {
  const { queryByLabelText, getByLabelText } = render(
    <Link labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
