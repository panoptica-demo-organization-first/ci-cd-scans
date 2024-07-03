const express = require('express');
const app = express();
const port = 3000;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

app.get('/', (req, res) => {
    res.send('Hello World! Test');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
