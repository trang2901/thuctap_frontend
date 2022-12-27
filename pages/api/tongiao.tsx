import { NextApiRequest, NextApiResponse } from "next";
import { dm_tongiao } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'
import { resolve } from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	// return new Promise(resolve => {
		const { method } = req;
		//const userId = session.id;
		switch (method) {
			case "GET":
				try {

					const dm_tongiao = await prisma.$queryRaw<dm_tongiao[]>`SELECT * 
				FROM dm_tongiao
				`;
					console.log("========= PROJECT get", dm_tongiao);
					res.json({ dm_tongiao });
				} catch (err) {
					res.status(401).json({ err: err.message });
				}

				break;
			case "POST":
				
				try {
					//1: bóc tách data
					let newData = {
						
						tongiao_ma: req.body.tongiao_ma,
						tongiao_ten: req.body.tongiao_ten,
						created_at: req.body.created_at,
						updated_at: req.body.updated_at
					}
					
					//2: lưu data
					const tongiao_new = await prisma.dm_tongiao.create({
						data: newData
					})

					// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
					//3: thông báo
					res.json({ project: tongiao_new })
				} catch (err) {
					res.status(401).json({ err: err.message });
				}

				break;




			default:
				res.status(404).send({ message: "Page not found!" });
				break;
		}
	// 	return resolve(0)
	// })

}