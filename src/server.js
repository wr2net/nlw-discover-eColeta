const express = require("express")
const server = express()

// pegar o bando de dados
const db = require("./database/db")

// configurar pasta pública
server.use(express.static("public"))

// habilitar o uso da req.body na nossa aplicação
server.use(express.urlencoded({ extend: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos na minha aplicação
// página inicial
server.get("/", (req, res) => {
    return res.render("index.html", {
        title: "Seu marketplace de coleta de resíduos"
    })
})

server.get("/create-point", (req, res) => {
    // req.query : Query Strings da nossa url
    console.log(req.query)
    return res.render("create-point.html")
})

server.post("/save-point", (req, res) => {
    //console.log(req.body)
    const query = `INSERT INTO PLACES (name, image, address, address2, state, city, items) VALUES (?,?,?,?,?,?,?);`
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return res.render("create-point.html", { error: "Não foi possível realizar o cadastro."})
        }
        return res.render("create-point.html", { saved: true})
    }
    db.run(query, values, afterInsertData)

})

server.get("/search-results", (req, res) => {

    const search = req.query.search
    if (search == "") {
        return res.render("search-results.html", {total: 0})
    }

    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if(err) {
            return console.log(err)
        }
        const total = rows.length

        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total})
    })
})

//ligar o servidor
server.listen(3000)