// filepath: /c:/Pokegit/backend/routes/pokemon.ts
import { Router } from 'express';
import { getPokemon } from '../services/pokemonService';

const router = Router();

router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const pokemon = await getPokemon(name);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'Pokemon not found' });
    }
});

export default router;