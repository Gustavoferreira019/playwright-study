import {expect, test} from "@playwright/test";
import PaginaInicial from "./project-model/PaginaInicial";

const JORNADA_MILHAS = "Jornada Milhas";

test.describe("Página inicial", () => {

  test("Deve acessar a página", async ({ page }) => {

    const paginaInicial = new PaginaInicial(page);
    const {ticketHeading, titlePromotion, titleDepoinment} = paginaInicial.getHomePageElements(page);

    await paginaInicial.goto(page); //Action
    await expect(page).toHaveTitle(JORNADA_MILHAS);//Assertion
    await expect(ticketHeading).toBeVisible();//Assertion
    await expect(titlePromotion).toBeVisible();//Assertion
    await expect(titleDepoinment).toBeVisible();//Assertion
    
  });

});
