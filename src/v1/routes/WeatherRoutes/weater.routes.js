import express from 'express';
import WeatherController from '../../controllers/weather.controller.js';
const router = express.Router();
const WeatherCrtl = new WeatherController(); 
router.get('/location', WeatherCrtl.getLocation.bind(WeatherCrtl));
router.get('/current/:city?', WeatherCrtl.getCurrent.bind(WeatherCrtl));
router.get('/forecast/:city?', WeatherCrtl.getForecast.bind(WeatherCrtl));

export default router;
