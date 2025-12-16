import 'dotenv/config';
import express from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});