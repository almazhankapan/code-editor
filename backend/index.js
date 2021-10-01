const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
const { generateFile } = require('./generateFile')
const { executeCpp } = require('./executeCpp')
const { executePy } = require('./executePy')

app.get('/', (req, res) => {
  return res.send('hi world')
})
app.post('/run', async (req, res) => {
  const { language = 'C++', code } = req.body
  console.log(language, code.length)
  if (code == undefined) {
    return res.status(400).json({ success: false, error: 'Empty code body' })
  }
  try {
    //need to generate a cpp file and run the file, send the response
    const filepath = await generateFile(language, code)
    let output
    if (language == 'C++') {
      output = await executeCpp(filepath)
    } else {
      output = await executePy(filepath)
    }
    return res.json({ filepath, output })
  } catch (err) {
    res.status(500).json({ err })
  }
})
app.listen(process.env.PORT || 13000, () => {
  console.log('Listening on port 13000')
})
