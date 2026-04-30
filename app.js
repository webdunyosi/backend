import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.status(200).json({message: "Salom Webdunyosi!"})
})

app.get("/post", (req, res) => {
  res.status(200).json({message: "Bu post sahifasi"})
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Listening on - http://localhost:${PORT}`)
})
