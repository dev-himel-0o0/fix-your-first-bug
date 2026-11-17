import { expect, test } from "@playwright/test";

test("home page renders and links to the bug board", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /fix your first bug/i,
    }),
  ).toBeVisible();

  await page
    .getByRole("main")
    .getByRole("link", { name: /start fixing/i })
    .click();

  await expect(page).toHaveURL(/\/select$/);
  await expect(
    page.getByRole("heading", { level: 1, name: /pick a bug to fix/i }),
  ).toBeVisible();
});
