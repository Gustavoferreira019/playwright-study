import {test} from "@playwright/test";
import PaginaInicial from "./project-model/PaginaInicial";


test.describe('Buscar Passagem', () => {
  test('Deve buscar passagem somente ida', async ({ page }) => {
      const paginaInicial = new PaginaInicial(page);

      await paginaInicial.goto(page);
      await paginaInicial.selecionaSomenteIda();
      await paginaInicial.inserirDadoNoCampoOrigem("São Paulo");
      await paginaInicial.inserirDadoNoCampoDestino("Japão");
      await paginaInicial.preencherDataIda("15/08/2030");
      await paginaInicial.botaoBuscarClickado();
      await page.waitForURL('**/busca', { timeout: 5000 });
      await paginaInicial.estaMostrandoMensagemDeErro('Ocorreu um erro desconhecido');
  });
});
