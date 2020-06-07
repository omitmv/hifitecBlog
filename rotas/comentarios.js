const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    ibmdb.open('DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;UID=mfs67968;PWD=5b+f2g78rf0r32v2;PORT=50000;PROTOCOL=TCPIP', (err, conn) => {
        if(err){
            console.log(err)
        }

        conn.query(`SELECT * FROM MFS67968.COMENTARIOS WHERE id_postagens = ${req.query.postid}`, (err, data) => {
            if(err){
                console.log({erro: err})
            }else{
                console.log({data})
                res.send(data)
            }
        })

        conn.close(() => {
            console.log('conexão encerrada')
        })
    })
})

router.get('/comentarios/:postid/nova', (req, res) => {
    ibmdb.open('DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;UID=mfs67968;PWD=5b+f2g78rf0r32v2;PORT=50000;PROTOCOL=TCPIP', (err, conn) => {
        if(err){
            console.log({erro: err, mensagem: 'conexão falhou'})
        }

        conn.query(`INSERT INTO MFS67968.COMENTARIOS(ID, ID_POSTAGENS, CONTEUDO, AUTOR)VALUES('${req.query.postid}', '${req.query.id_postagens}', '${req.query.conteudo}', '${req.query.autor}')`, (err, data) => {
            if(err){
                console.log({erro: err, mensagem: 'Query insert falhou'})
            }else{
                console.log(data)
                res.send('Postagem inserida com sucesso')
            }
        })

        conn.close(() => {
            console.log('conexão encerrada')
        })
    })
})

module.exports = router