const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Porta inicializada na porta${port}`);
})