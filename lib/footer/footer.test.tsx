import { render, screen } from "@testing-library/react";
import { mockMatchMedia, mockStorage } from "lib/test-utils";
import { Footer } from "./footer";
import { footerProps } from "./footer.mocks";

describe("Footer", () => {
  mockStorage("localStorage");
  mockMatchMedia(true);

  test("renders Footer elements", () => {
    render(<Footer {...footerProps} />);
    expect(screen.getByText(/Julius Polar/)).toBeInTheDocument();
  });
});
