import mocksController from "../controllers/mocks.controller.js";
import { Router } from "express";
const router = Router();

//Ruta para obtener las mascotas
router.get("/mockingpets", mocksController.getMockingPets);


//Ruta para obtener los usuarios
router.get("/mockingusers", mocksController.getMockingUsers);

//Ruta para obtener los usuarios mediante parametro numerico
router.get("/mockinguserscount", mocksController.getMockingUsersCount);

//Insertar mediante dos parametros (usuario y mascota)
router.post("/generatedata", mocksController.generateData)


export default router;