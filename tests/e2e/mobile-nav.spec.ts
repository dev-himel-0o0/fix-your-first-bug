import { expect, test } from "@playwright/test";

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens the menu and navigates to contributors", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: /open menu/i }).click();

    const mobileNav = page.getByRole("navigation", {
      name: /mobile navigation/i,
    });

    await expect(mobileNav).toBeVisible();
    await mobileNav.getByRole("link", { name: "Contributors" }).click();

    await expect(page).toHaveURL(/\/contributors$/);
  });
});
