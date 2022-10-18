app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors)
app.use(router)

app.listen(port, err => {
  if (err) {
    console.error(err.message)
  } else {
    console.error(`http://localhost:${port}`)
  }
})
