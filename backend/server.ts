import express from 'express';
import cors from 'cors';
import next from 'next';
import pokemonRoutes from './routes/pokemon';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api/pokemon', pokemonRoutes);

nextApp.prepare().then(() => {
    app.all('*', (req, res) => {
        return handle(req, res);
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});