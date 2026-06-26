import {test} from "@playwright/test";
import PaginaInicial from "./project-model/PaginaInicial";


test.describe("Página de Login", () => {
  test("Deve conseguir fazer login com email e senha válidos", async ({ page }) => {
    const paginaLogin = new PaginaInicial(page);

    await paginaLogin.visit(page);
    await paginaLogin.fazerLogin('gustavin@gustavin.com' ,'123456');
  });

  test("Não deve conseguir fazer login com email inválido", async ({ page }) => {
    const paginaLogin = new PaginaInicial(page);

    await paginaLogin.visit(page);
    await paginaLogin.fazerLogin('gustavin@gustavin.com' ,'123456');
    await paginaLogin.estaMostrandoMensagemDeErro('Ocorreu um erro desconhecido');
  });
});
