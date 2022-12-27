import { NextApiRequest, NextApiResponse } from "next";
import { thongbao_tuyendung } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const thongbao_tuyendung = await prisma.$queryRaw<thongbao_tuyendung[]>`SELECT * 
				FROM thongbao_tuyendung
				`;
				console.log("========= PROJECT get", thongbao_tuyendung);
				res.json({ thongbao_tuyendung });
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
		case "POST":

			try {
				//1: bóc tách data
				let newData = {

					thongbao_ma: req.body.thongbao_ma,
					thongbao_ngaylap: req.body.thongbao_ngaylap,
					thongbao_hannop:req.body.thongbao_hannop,
					thongbao_noidung:req.body.thongbao_noidung ,
					quyenloi:req.body.quyenloi ,
					thanhphan_hoso:req.body.thanhphan_hoso ,
					phuongthuc_nophs:req.body.phuongthuc_nophs ,
					thongbao_trangthai:req.body.thongbao_trangthai,
					coquan_id:req.body.coquan_id,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at
				}

				//2: lưu data
				const thongbao_tuyendung_new = await prisma.thongbao_tuyendung.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: thongbao_tuyendung_new })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;




		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}