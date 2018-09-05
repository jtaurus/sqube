const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

var detectUselessVariable = "This variable is unnecessary! SonarQube should detect that.";

if(true == false)
{
  // Dead code
}

function foo(a) {  // Noncompliant
  let b = 12;
  if (a) {
    return b;
  }
  return b;
}

app.listen(3000, () => console.log('Example app listening on port 3000!'))
