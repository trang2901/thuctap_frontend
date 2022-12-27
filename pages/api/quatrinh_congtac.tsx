import { NextApiRequest, NextApiResponse } from "next";
import { quatrinh_congtac } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const quatrinh_congtac = await prisma.$queryRaw<quatrinh_congtac[]>`SELECT * 
				FROM quatrinh_congtac
				`;
				console.log("========= PROJECT get", quatrinh_congtac);
				res.json({ quatrinh_congtac });
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
					ten_coquan_donvi:req.body.ten_coquan_donvi ,
					chuvu:req.body.chuvu ,
					congviec_phutrach:req.body.congviec_phutrach,
					thanhtich_noibac:req.body.thanhtich_noibac ,
					hoso_id:req.body.hoso_id,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at
				}

				//2: lưu data
				const quatrinh_congtac_new = await prisma.quatrinh_congtac.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: quatrinh_congtac_new })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;




		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}