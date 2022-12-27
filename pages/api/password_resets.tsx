import { NextApiRequest, NextApiResponse } from "next";
import { password_resets } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { method } = req;
    //const userId = session.id;
    switch (method) {
		case "GET":
			try {
		
				const password_resets = await prisma.$queryRaw<password_resets[]>`SELECT * 
				FROM password_resets
				`;
				console.log("========= PROJECT get", password_resets);
				res.json({password_resets});
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
			case "POST":

				try {
					//1: bóc tách data
					let newData = {
	
						email: req.body.email,
						token: req.body.token,
						created_at: req.body.created_at,
						
					}
	
					//2: lưu data
					const password_new = await prisma.password_resets.create({
						data: newData
					})
	
					// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
					//3: thông báo
					res.json({ project: password_new })
				} catch (err) {
					res.status(401).json({ err: err.message });
				}
	
				break;
	
	
			

		

		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}