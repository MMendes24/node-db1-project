const express = require('express')
Accounts = require('./accountsDb')

const router = express.Router()

router.get('/', (req, res) => {
    Accounts.get()
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "posts could not be retrieved"})
    })
})

router.get('/:id', (req, res) => {
    Accounts.getById(req.params.id)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(404).json({ errorMessage: "post by that id not found"})
    })
})

router.post('/', (req, res) => {
    Accounts.insert(req.body)
    .then(thenRes => {
        res.status(201).json(req.body)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "internal server error"})
    })
})

router.put('/:id', (req, res) => {
    Accounts.update(req.params.id, req.body)
    .then(thenRes => {
        res.status(201).json(req.body)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "internal server error"})
    })
})

router.delete('/:id', (req, res) => {
    Accounts.remove(req.params.id)
    .then(thenRes => {
        res.status(200).send("account has been deleted")
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "account could not be removed"})
    })
})

module.exports = router