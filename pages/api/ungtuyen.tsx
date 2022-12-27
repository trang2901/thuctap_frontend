import { NextApiRequest, NextApiResponse } from "next";
import { ungtuyen } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const ungtuyen = await prisma.$queryRaw<ungtuyen[]>`SELECT * 
				FROM ungtuyen
				`;
				console.log("========= PROJECT get", ungtuyen);
				res.json({ ungtuyen });
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
		case "POST":

			try {
				//1: bóc tách data
				let newData = {

					thongbao_ct_id: req.body.thongbao_ct_id,
					hoso_id: req.body.hoso_id,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at
				}

				//2: lưu data
				const ungtuyen_new = await prisma.ungtuyen.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: ungtuyen_new })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;





		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}