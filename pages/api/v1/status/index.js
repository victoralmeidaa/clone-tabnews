import database from "infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 3 as Soma;");
  console.log("Soma: " + result.rows[0].soma);
  response.status(200).json({ chave: "ok - não tem nada de errado" });
}

export default status;
