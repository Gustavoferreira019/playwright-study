import {expect, Page} from "@playwright/test";


export default class PaginaCadastro {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visitar() {
    await this.page.goto('/');
  }

  async estaMostrandoMensagemDeErro(mensagem: string) {
    const elementoErro = this.page.getByText(mensagem);
    await expect(elementoErro).toBeVisible();
  }
}
