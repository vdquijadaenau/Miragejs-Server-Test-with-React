import { visit } from "../lib/test-helpers";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import makeServer from "../server";

test("it shows a message when there are no reminders", async () => {
  makeServer();
  visit("/");
  await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

  expect(screen.getByText("All done!")).toBeInTheDocument();
});
