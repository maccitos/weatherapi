import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './src/v1/routes/index.routes.js';
import errorMiddleware from './src/middlewares/errorMiddleware.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use('/', router);
app.use(errorMiddleware);
app.listen(3000, () => {
    console.log(`running on port 3000`);
});

export default app;
