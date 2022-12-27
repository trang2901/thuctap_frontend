import { NextApiRequest, NextApiResponse } from "next";
import { quatrinh_hoctap } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const quatrinh_hoctap = await prisma.$queryRaw<quatrinh_hoctap[]>`SELECT * 
				FROM quatrinh_hoctap
				`;
				console.log("========= PROJECT get", quatrinh_hoctap);
				res.json({ quatrinh_hoctap });
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}
			break;
		case "POST":

			try {
				//1: bóc tách data
				let newData = {

					tungay: req.body.tungay,
					denngay: req.body.denngay,
					bac_kynang: req.body.bac_kynang,
					ten_donvi_daotao: req.body.ten_donvi_daotao,
					ten_chungnhan_vanbang: req.body.ten_chungnhan_vanbang,
					xeploai: req.body.xeploai,
					namcap: req.body.namcap,
					hoso_id: req.body.hoso_id,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at
				}

				//2: lưu data
				const quatrinh_hoctap_new = await prisma.quatrinh_hoctap.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: quatrinh_hoctap_new })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;




		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}