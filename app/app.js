const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

var detectUselessVariable = "This variable is unnecessary! SonarQube should detect that.";

if(true == false)
{
  // Dead code
}

app.listen(3000, () => console.log('Example app listening on port 3000!'))
