import { Router } from "express";

import { getProducts, createProduct } from "../controller/productController";
const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
export default router;
// controller 和 route 分离
// controller 负责业务逻辑
// route 负责路由和请求处理
// 在index.ts中引入 可以改定routes
