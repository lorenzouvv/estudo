import { Router } from 'express';
import { calcularSoma } from '../controllers/somaController';

const router = Router();

router.post('/', calcularSoma);

export default router;