import { Router } from "express";
import { createProject, deleteProject, getAllProject, getProject, updateProject } from "../controllers/project.controller";

const router = Router();

router.get('/', getAllProject);
router.get('/:id', getProject);
router.post('/create', createProject);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);

export default router;