const app = require('./app/app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started listening on http://localhost:3000");
});
