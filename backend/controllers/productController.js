import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc fetch all products
// @route GET/api products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword ? {
        name: { 
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const products = await Product.find({ ...keyword })

    res.json(products)

})

// @desc fetch single products
// @route GET/api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    }else{
        res.status(404) 
        throw new Error('Product not Found')
    }

})

export  {getProducts, getProductById}
