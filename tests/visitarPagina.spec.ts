import {expect, test} from "@playwright/test";


test.describe("Página inicial", () => {

  test("Deve acessar a página", async ({page}) => {
    //const ticketHeading = page.getByRole("heading", { name: "Passagens" });
    const ticketHeading = page.getByTestId("titulo-passagens");
    const titlePromotion = page.getByTestId("titulo-promocoes");
    const titleDepoinment = page.getByTestId("titulo-depoimentos");

    await page.goto("/"); //Action
    await expect(page).toHaveTitle("Jornada Milhas");//Assertion
    await expect(ticketHeading).toBeVisible();
    await expect(titlePromotion).toBeVisible();
    await expect(titleDepoinment).toBeVisible();

  });

});
