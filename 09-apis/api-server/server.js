const express = require('express')
const app = express();
const port = 3000;

const owaspTopTen = [
  'Broken Access Control',
  'Cryptographic Failures',
  'Injection',
  'Insecure Design',
  'Security Misconfiguration',
  'Vulnerable and Outdated Components',
  'Identification and Authentication Failures',
  'Software and Data Integrity Failures',
  'Security Logging and Monitoring Failures',
  'Server-Side Request Forgery'
];

app
.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/api/owaspTopTen', (_, res) => res.send(owaspTopTen));
