import Express from 'express'
import Parser from 'body-parser'

const app = new Express()
app.use(Parser.json())

app.get('/', (req, resp) => {

  return resp.send('Hey, Tyler')

})

app.get('/people/tyler', (req, resp) => {

  return resp.json({
    name: 'Tyler',
    age: 35
  })

})


app.post('/people', (req, resp) => {
  const person = req.body
  return resp.json(person)
})


app.listen(4000)
