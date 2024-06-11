const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb',
});

connection.connect((err) => {
    if (err) {
        console.error("Erreur de connexion: " + err.stack);
        return;
    }
    console.log("Connexion réussie à la db!");
});

connection.query("SELECT * FROM user", (err, rows, fields) => {
    if(err) throw err;
    console.log("Les données sont:", rows)
}
)

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
