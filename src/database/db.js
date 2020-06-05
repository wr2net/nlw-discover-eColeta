// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá operar no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados para nossas operações
//db.serialize(() => {
    // 1 -> Criar uma tabela
    /*
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    */
    // 2 -> Inserir dados na tabela

    //const query = `INSERT INTO PLACES (name, image, address, address2, state, city, items) VALUES (?,?,?,?,?,?,?);`
    /*
    const values = [
        "Colectoria",
        "https://images.unsplash.com/photo-1473158912295-779ef17fc94b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]
    */
    /*
    const values = [
        "Papersider",
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]
    */
    /*
    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso.")
        console.log(this)
    }
     */

    //db.run(query, values, afterInsertData)


    // 3 -> Consultar os dados da tabela
    /*
    db.all(`SELECT * FROM places`, function (err, rows) {
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros")
        console.log(rows)
    })
     */

    // 4 -> Deletar um dado da tabela
    /*
    db.run(`DELETE FROM places WHERE id = ?`, [7], function (err) {
        if(err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })
    */
//})