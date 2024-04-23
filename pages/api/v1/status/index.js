function status(request, response) {
  response.status(200).json({ chave: 'Esta é a primeira API' })
}

export default status
