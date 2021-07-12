import express from 'express';
import weaterController from './WeatherRoutes/weater.routes.js';
const router = express.Router();

router.use(`/v1/`,weaterController)

export default router;