const express = require("express");
const app = express();
const port = process.env.PORT || 5004;
const cors = require("cors");
app.use(cors());



app.route("/")
.get((req, res) => {
    res.send("welcome to verify phd certificate server")
})
app.listen(port, () => {
    console.log(`verified phd server is running on port ${port}`)
})
