const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')


router.post('/create',ProductController.createProductPost)
router.get('/create',ProductController.createProduct)
router.get('/:id',ProductController.getProduct)
router.get('/edit/:id',ProductController.editProduct)
router.post('/edit/:id',ProductController.editsaveProduct)
router.post('/remove/:id',ProductController.removeProduct)
router.get('/', ProductController.showProducts)


module.exports = router