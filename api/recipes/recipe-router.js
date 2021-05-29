const router = require('express').Router()
const Recipe = require('./recipe-model')

router.get('/id', (req, res) => {
    const { id } = req.params
    Recipe.getById(id)
    .then( recipe => res.status(200).json(recipe) )
    .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Could Not Retrieve Recipes',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router