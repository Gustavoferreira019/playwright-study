import { Page } from "@playwright/test";

export default class PaginaInicial {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(page: Page) {
    await page.goto("/");
  }

  getHomePageElements(page: Page) {
    const ticketHeading = page.getByTestId("titulo-passagens");
    const titlePromotion = page.getByTestId("titulo-promocoes");
    const titleDepoinment = page.getByTestId("titulo-depoimentos");

    return {ticketHeading, titlePromotion, titleDepoinment};
  }
}
