import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio sections and project links", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /turning good ideas into/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /ideas, meet execution/i })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /visit durotrade logistics/i })[0]).toHaveAttribute(
    "href",
    "https://durotrade-logistics-git-main-certifiedtboy.vercel.app/"
  );
  expect(screen.getByRole("heading", { name: /let's make it happen/i })).toBeInTheDocument();
  expect(document.querySelectorAll("[data-scroll-reveal]:not(.is-visible)")).toHaveLength(0);
});
