import { NextApiRequest, NextApiResponse } from "next";
import { ketqua_thituyen } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const ketqua_thituyen = await prisma.$queryRaw<ketqua_thituyen[]>`SELECT * 
				FROM ketqua_thituyen
				`;
				console.log("========= PROJECT get", ketqua_thituyen);
				res.json({ ketqua_thituyen });
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
		case "POST":

			try {
				//1: bóc tách data
				let newData = {

					tongdiem:req.body.tongdiem,
					danhgia_baithi:req.body.danhgia_baithi,
					ketqua: req.body.ketqua,
					upload_file: req.body.upload_file,
					trangthai: req.body.trangthai,
					lichthi_ct_id:req.body.lichthi_ct_id,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at
				}

				//2: lưu data
				const ketqua_thituyen = await prisma.ketqua_thituyen.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: ketqua_thituyen })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;
		default:
			res.status(404).send({ message: "Page not found!" });
			break;

	}

}