const express = require("express");

const router = express.Router();

router.get('/hello', function (req, res) { // handle request to the "/api/hello" endpoint
  res.json({ greeting: 'hello API' });
});

router.get("/whoami", (request, response)=> { // handle requests to the "/api/whoami" endpoint 

  // populate header info
  let headerInfoJson = {
    ipaddress: request.headers["x-forwarded-for"], // ip of client
    language: request.headers["accept-language"], // language
    software: request.headers["user-agent"], // software used by the client (firefox, chrome, etc.)   
  }

  // send header info in json format
  response.json(headerInfoJson);
});

module.exports = router;