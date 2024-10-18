import { Router } from "express";

const routes = Router();

/* 
  Método GET
  Usado para recuperar dados de um servidor.
  Exemplo: Ao acessar essa rota com GET, retornamos uma lista de usuários.
*/
routes.get("/users", (req, res) => {
  res
    .status(200)
    .json({ message: "Lista de usuários", users: ["User1", "User2", "User3"] });
});

/* 
    Método POST
    Usado para criar novos dados no servidor.
    Exemplo: Ao acessar essa rota com POST, recebemos e salvamos um novo usuário.
  */
routes.post("/users", (req, res) => {
  const newUser = req.body; // Captura os dados enviados no corpo da requisição
  res.status(201).json({ message: "Usuário criado", user: newUser });
});

/* 
    Método PUT
    Usado para atualizar completamente um recurso existente no servidor.
    Exemplo: Ao acessar essa rota com PUT, atualizamos todos os dados de um usuário pelo ID.
  */
routes.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body; // Captura os dados enviados no corpo da requisição
  res
    .status(200)
    .json({
      message: `Usuário ${userId} atualizado completamente`,
      user: updatedUser,
    });
});

/* 
    Método PATCH
    Usado para atualizar parcialmente um recurso existente.
    Exemplo: Ao acessar essa rota com PATCH, atualizamos apenas um dado de um usuário pelo ID.
  */
routes.patch("/users/:id", (req, res) => {
  const userId = req.params.id;
  const partialUpdate = req.body; // Captura os dados enviados no corpo da requisição
  res
    .status(200)
    .json({
      message: `Usuário ${userId} atualizado parcialmente`,
      update: partialUpdate,
    });
});

/* 
    Método DELETE
    Usado para remover um recurso do servidor.
    Exemplo: Ao acessar essa rota com DELETE, removemos um usuário pelo ID.
  */
routes.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({ message: `Usuário ${userId} removido` });
});

/* 
    Método HEAD
    Usado para retornar os cabeçalhos de uma resposta, sem o corpo.
    Exemplo: Ao acessar essa rota com HEAD, retorna apenas os cabeçalhos de resposta.
  */
routes.head("/users", (req, res) => {
  res.status(200).send(); // Não envia conteúdo, apenas cabeçalhos
});

/* 
    Método OPTIONS
    Usado para verificar os métodos HTTP suportados por uma determinada rota.
    Exemplo: Ao acessar essa rota com OPTIONS, retorna os métodos permitidos.
  */
routes.options("/users", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
  res.send();
});

export default routes;