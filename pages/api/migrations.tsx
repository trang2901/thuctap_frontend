import { NextApiRequest, NextApiResponse } from "next";
import { migrations } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const migrations = await prisma.$queryRaw<migrations[]>`SELECT * 
				FROM migrations
				`;
				console.log("========= PROJECT get", migrations);
				res.json({ migrations });
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
		case "POST":

			try {
				//1: bóc tách data
				let newData = {

					migration: req.body.migration,
					batch: req.body.batch
				}

				//2: lưu data
				const migration_new = await prisma.migrations.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: migration_new })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;




		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}