import { Request, Response } from "express";

export const getHome = (req: Request, res: Response) => {
    res.render('home', {title: "Home"});
}