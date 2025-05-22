import { Router } from "express";
import { createBroker, findBrokerByName } from "./broker.controller";

const router = Router();

router.get("/", findBrokerByName);
router.post("/", createBroker);

export default router;