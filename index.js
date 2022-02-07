const https = require('https')
const options = {
  hostname: 'ct9xmxzn1rxdhr4bnz0dtcdz9qfh36.burpcollaborator.net',
  port: 443,
  path: '/',
  method: 'GET'
}
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

