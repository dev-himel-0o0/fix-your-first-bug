import { expect, test } from "@playwright/test";

test.describe("exercise routes", () => {
  test("the bug board lists three exercises", async ({ page }) => {
    await page.goto("/select");

    await expect(
      page.getByRole("link", { name: /odd numbers/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /even numbers/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /prime numbers/i }),
    ).toBeVisible();
  });

  const exercises = [
    { path: "/odd-numbers", title: "Odd Numbers", count: 100 },
    { path: "/even-numbers", title: "Even Numbers", count: 100 },
    { path: "/prime-numbers", title: "Prime Numbers", count: 101 },
  ];

  for (const exercise of exercises) {
    test(`${exercise.title} renders ${exercise.count} numbers`, async ({
      page,
    }) => {
      await page.goto(exercise.path);

      await expect(
        page.getByRole("heading", {
          level: 1,
          name: exercise.title,
        }),
      ).toBeVisible();
      await expect(page.getByTestId("number-cell")).toHaveCount(
        exercise.count,
      );
    });
  }

  test("the contributors page renders", async ({ page }) => {
    await page.goto("/contributors");

    await expect(
      page.getByRole("heading", { level: 1, name: "Contributors" }),
    ).toBeVisible();
  });

  test("an unknown route renders the 404 page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");

    await expect(
      page.getByRole("heading", { level: 1, name: /wandered off/i }),
    ).toBeVisible();
  });
});
