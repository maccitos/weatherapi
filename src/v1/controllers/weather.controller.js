import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export default class WeatherController {
    async getLocation (req, res, next) {
        try {
            let ip = req.ip;
            const location = await this.location(ip);
            return res.jsonp({ response: location });
        } catch (error) {
            return next(error);
        }
    }
    
    async getCurrent(req, res, next) {
        try {   
            const weatherURL = process.env.OPEN_WEATHER_URL;
            const weatherAPIKEY = process.env.OPEN_WEATHER_API_KEY
            let { city } = req.params;
            if(!city) {
                const ip = req.ip;
                const currentLocation = await this.location(ip);
                city = currentLocation.city;
            }
            const finalUrl = `${weatherURL}/?q=${city}&appid=${weatherAPIKEY}`;
            const { data: current } = await axios.get(finalUrl);
            return res.status(200).jsonp({ response: current });
        } catch (error) {
            return next(error);
        }
    }

    async getForecast(req, res, next) {
        try {
            const weatherURL = process.env.OPEN_WEAHTER_FORECAST_URL;
            const weatherAPIKEY = process.env.OPEN_WEATHER_API_KEY
            let { city } = req.params;
            if(!city) {
                const ip = req.ip;
                const currentLocation = await this.location(ip);
                city = currentLocation.city;
            }
            const finalUrl = `${weatherURL}/?q=${city}&appid=${weatherAPIKEY}`;
            const { data: current } = await axios.get(finalUrl);
            return res.status(200).jsonp({ response: current });
        } catch (error) {
            return next(error);
        }
    }

    async location(currentIp) {
        const ipApiUrl = process.env.IP_API_URL;
        let ip = currentIp;
        if (!ip || ip === '::1' || ip === '::ffff:127.0.0.1') {
            ip = process.env.BASE_LOCATION_URL;
        }
        const finalUrl = `${ipApiUrl}/${ip}`;
        const { data: location } = await axios.get(finalUrl);
        return location;
    }
}