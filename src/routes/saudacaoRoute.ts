import { Router } from 'express';
import { saudar } from '../controllers/saudacaoController';

const router = Router();

router.get('/:nome', saudar);

export default router;