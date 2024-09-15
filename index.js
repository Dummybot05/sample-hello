const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
   res.send('HOME');
})

app.get('/:someID', (req, res) => {
   const some = req.params.someID;
   res.send(`You Requested ${some}`);
})

app.listen(port, () => { console.log('STARTED') })
