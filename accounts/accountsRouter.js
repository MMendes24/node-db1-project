const express = require('express')
Accounts = require('./accountsDb')

const router = express.Router()

router.get('/', (req, res) => {
    Accounts.get()
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(404).json({ errorMessage: "No"})
    })
})

router.get('/:id', (req, res) => {
    Accounts.getById(req.params.id)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(404).json({ errorMessage: "No"})
    })
})

module.exports = router