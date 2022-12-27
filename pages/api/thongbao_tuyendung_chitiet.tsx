import { NextApiRequest, NextApiResponse } from "next";
import { thongbao_tuyendung_chitiet } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const thongbao_tuyendung_chitiet = await prisma.$queryRaw<thongbao_tuyendung_chitiet[]>`SELECT * 
				FROM thongbao_tuyendung_chitiet
				`;
				console.log("========= PROJECT get", thongbao_tuyendung_chitiet);
				res.json({ thongbao_tuyendung_chitiet });
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
		case "POST":

			try {
				//1: bóc tách data
				let newData = {

					vitri_tuyendung: req.body.vitri_tuyendung ,
					soluong: req.body.soluong,
					mota:  req.body.mota,
					yeucauchung: req.body.yeucauchung,
					muc_luong_min: req.body.muc_luong_min,
					muc_luong_max:  req.body.muc_luong_max,
					thongbao_id: req.body.thongbao_id,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at
				}

				//2: lưu data
				const tuyendung_chitiet_new = await prisma.thongbao_tuyendung_chitiet.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: tuyendung_chitiet_new })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;




		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}