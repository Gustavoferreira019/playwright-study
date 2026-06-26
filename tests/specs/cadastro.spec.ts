import { test } from "@playwright/test";
import PaginaCadastro from "../project-model/PaginaCadastro";
import PaginaInicial from "../project-model/PaginaInicial";

test.describe('Buscar Passagem', () => {
  test('Deve buscar passagem somente ida', async ({ page }) => {
    const paginaInicial = new PaginaInicial(page);
    const paginaCadastro = new PaginaCadastro(page);

    await paginaCadastro.visitar();
    await paginaInicial.botaoCadastroClickado();
  });
});
