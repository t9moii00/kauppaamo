const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Ajv = require('ajv').default
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Aloitus näkymä!')
})

app.get('/blah', (req, res) => {
  res.send('blah get workkii!')
})

app.post('/blah', (req, res) => {
  res.send('posti workkii!')
})

app.post('/posting', (req, res) => {
  console.log('Title' + req.body.Title)
  console.log('Description' + req.body.Description)
  console.log('Category' + req.body.Category)
  console.log('Location' + req.body.Location)
  console.log('Price' + req.body.Price)
  console.log('DateOfPosting' + req.body.DateOfPosting)
  console.log('DeliveryType' + req.body.DeliveryType)
  console.log('Seller' + req.body.Seller)

  res.send('Accepted')
})

app.post('/posting1', (req, res) => {
  console.log('Title' + req.body.Title)
  console.log('Description' + req.body.Description)
  console.log('Category' + req.body.Category)
  console.log('Location' + req.body.Location)
  console.log('Price' + req.body.Price)
  console.log('DateOfPosting' + req.body.DateOfPosting)
  console.log('DeliveryType' + req.body.DeliveryType)
  console.log('Seller' + req.body.Seller)

  res.send('Test')
})

    let serverInstance = null;


module.exports = {
    start: () => {
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })
    },
    close: () => {
        serverInstance.close();
    }
}