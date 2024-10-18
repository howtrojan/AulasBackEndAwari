const express = require("express");
const server = express();
const axios = require("axios");

server.get("/awari", async (req, res) => {
  const result = await axios.get(
    `https://viacep.com.br/ws/${req.query.cep}/json/`
  );
  res.send(result.data);
});

server.listen(3000);
