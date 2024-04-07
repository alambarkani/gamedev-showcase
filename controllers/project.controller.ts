import { Request, Response } from "express";
import { Project } from "../models/project.model";

export const getAllProject = async (req: Request, res: Response): Promise<void> =>{
    try{
        const allProject = await Project.find();
        res.json(allProject);
    }catch(err){
        console.log(err);
    }
}

export const getProject = async (req: Request, res: Response): Promise<void> =>{
    try{
        const project = await Project.findById(req.params.id);
        res.json(project);
    }catch(err){
        console.log(err);
    }
}

export const createProject = async (req: Request, res: Response): Promise<void> =>{
    try{
        const newProject = await Project.create(req.body);
        await newProject.save();
        res.json(newProject);
    }catch(err){
        console.log(err);
    }
}

export const updateProject = async (req: Request, res: Response): Promise<void> => {
    try{
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedProject);
    }catch(err){
        console.log(err);
    }
}

export const deleteProject = async (req: Request, res: Response): Promise<void> =>{
    try{
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        res.json(deletedProject);
    }catch(err){
        console.log(err);
    }
}