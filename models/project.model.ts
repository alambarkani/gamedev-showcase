import { model } from "mongoose";
import { projectSchema } from "../schemas/project.schema";

export const Project = model('Project', projectSchema);