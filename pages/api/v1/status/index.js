import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as Soma;");
  console.log(result);
  response.status(200).json({ chave: "ok - não tem nada de errado" });
}

export default status;
