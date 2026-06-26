import {expect, Locator, Page} from "@playwright/test";

export default class PaginaInicial {

  readonly page: Page;
  readonly botaoLogin: Locator;
  private readonly inputEmail: Locator;
  private readonly inputSenha: Locator;
  private readonly botaoAcessarConta: Locator;
  private readonly inputOrigem: Locator;
  private readonly inputDestino: Locator;
  private readonly botaoSomenteIda: Locator;
  private readonly inputDataIda: Locator;
  private botaoBuscar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.botaoLogin = page.getByTestId("botao-login");
    this.inputEmail = page.getByTestId("input-email");
    this.inputSenha = page.getByTestId("input-senha");
    this.botaoAcessarConta = page.getByTestId("botao-acessar-conta");
    this.inputOrigem = page.getByLabel('Origem');
    this.inputDestino = page.getByLabel('Destino');
    this.botaoSomenteIda = page.getByRole("button", { name: "SOMENTE IDA" });
    this.inputDataIda = page.getByTestId('campo-data-ida');
    this.botaoBuscar = page.getByTestId('botao-buscar-passagens');
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

  async visit(page: Page) {
    await this.goto(page);
    await this.page.waitForLoadState('load');
    await this.botaoLogin.click();
    await expect(page).toHaveURL('/auth/login');
  }

  async fazerLogin(email: string, senha: string) {
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.botaoAcessarConta.click();
  }

  async estaMostrandoMensagemDeErro(mensagem: string) {
    const elementoErro = this.page.getByText(mensagem);
    await expect(elementoErro).toBeVisible();
  }

  async selecionaSomenteIda() {
    await this.page.waitForLoadState('load');
    await this.botaoSomenteIda.click();
  }

  async inserirDadoNoCampoOrigem(estadoCidadeOuPais: string) {
    await this.inputOrigem.fill(estadoCidadeOuPais);
  }

  async inserirDadoNoCampoDestino(estadoCidadeOuPais: string) {
    await this.inputDestino.fill(estadoCidadeOuPais);
  }

  async preencherDataIda(dataIda: string) {
    await this.inputDataIda.fill(dataIda);
  }

  async botaoBuscarClickado() {
    await this.botaoBuscar.click();
  }
}
