import express, { Application, Request, Response } from "express";
import cors from "cors";
import { adminRoutes } from "./app/modules/admin/admin.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio backend is running");
});

app.use("/api/v1/admin", adminRoutes);

export default app;
