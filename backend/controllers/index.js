const axios = require('axios')
const Fact = require('../models/Fact')

exports.getApi = async (req, res) => {
  // 1. Petición asíncrona a la API
  const response = await axios.get('https://uselessfacts.jsph.pl/random.json')
  // 2. Guardar la respuesta en MongoDB
  const { id: _id, text, source, source_url: sourceUrl } = response.data
  const newFact = await Fact.create({ _id, text, source, sourceUrl })
  // 3. Enviar una res en json de los datos guardados
  res.status(201).json({ newFact })
}
