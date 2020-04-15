let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
	db.author.findAll()
	.then((authors) => {
		res.render('authors/index', { authors })
	})
	.catch((err) => {
		console.log('ERROR', err)
		res.render('error')
	})
})

router.post('/', (req, res) => {
	db.author.create(req.body)
	.then(() => {
		res.redirect('/authors')
	})
	.catch((err) => {
		console.log('ERROR', err)
		res.render('error')
	})
})

router.get('/new', (req, res) => {
  res.render('authors/new')
})

router.get('/:id', (req, res) => {
	db.author.findOne({
		where: { id: req.params.id },
		include: [ db.book ]
	})
	.then((author) => {
		  res.render('authors/show', { author })
	})
	.catch((err) => {
		console.log(err)
		res.render('error')
	})
})

module.exports = router
