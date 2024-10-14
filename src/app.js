import e from "express";
import routerWorkshop from "./routes/routerWorkshop.js";
import routerVehicles from "./routes/routerVehicles.js";
import routerMaintenance from "./routes/routerMaintenance.js";

const app = e();

app.use(e.json());

app.use('/workshop', routerWorkshop);
app.use('/vehicles', routerVehicles);
app.use('/maintenance', routerMaintenance);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));