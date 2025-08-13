import express, { Request, Response } from "express";
import saudacaoRoute from "./routes/saudacaoRoute";
import somaRoute from "./routes/somaRoute";
import cors from "cors"; // Adicione no topo

const app = express();
app.use(cors()); // Adicione antes das rotas
app.use(express.json());

app.use("/saudacao", saudacaoRoute);
app.use("/soma", somaRoute);

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
