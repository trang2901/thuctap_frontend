import { NextApiRequest, NextApiResponse } from "next";
import { users } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { method } = req;
    //const userId = session.id;
    switch (method) {
		case "GET":
			try {
		
				const users = await prisma.$queryRaw<users[]>`SELECT * 
				FROM users
				`;
				console.log("========= PROJECT get", users);
				res.json({users});
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
			case "POST":
				
				try {
					//1: bóc tách data
					let newData = {
						name: req.body.name,
						email: req.body.email,
						email_verified_at: req.body.email_verified_at,
						password: req.body.password,
						remember_token: req.body.remember_token,
						created_at: req.body.created_at,
						updated_at: req.body.updated_at
					}
					
					//2: lưu data
					const user_new = await prisma.users.create({
						data: newData
					})

					// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
					//3: thông báo
					res.json({ project: user_new })
				} catch (err) {
					res.status(401).json({ err: err.message });
				}

				break;

			

		

		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}