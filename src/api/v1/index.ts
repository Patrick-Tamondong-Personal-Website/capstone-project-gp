import express 
//{Request, Response,} 
from "express";
import productsRouter from "./products/routes/products.routes";
const router = express.Router();

router.get('/health', (_request, response, _next) => {
    response.send('OK')
})

router.use('/products', productsRouter);


export default router;