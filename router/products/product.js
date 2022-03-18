import { Router } from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../../controllers/products";

const ProductRoute = Router();




ProductRoute.get('/products',listProduct);

ProductRoute.get('/products/:productId',listProductDetail);

ProductRoute.post('/products',createProduct);

ProductRoute.delete ('/products/:productId', deleteProduct);

ProductRoute.put('/products/:productId', updateProduct);

export default ProductRoute