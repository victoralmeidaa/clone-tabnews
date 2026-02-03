function status(request, response) {
  response.status(200).json({ chave: "ok - não tem nada de errado" });
}

export default status;
