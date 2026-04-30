import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({message: "Salom Webdunyosi!"})
})

app.post("/", (req, res) => {
  const {firstName, lastName} = req.body
  const message = `His full name is ${firstName} ${lastName}`
  res.send(message)
})

app.delete("/:id", (req, res) => {
  const {id} = req.params
  res.send(`Deleted user with id: ${id}`)
})

app.put("/:id", (req, res) => {
  const {id} = req.params
  const body = req.body

  res.json({id, body})
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Listening on - http://localhost:${PORT}`)
})
