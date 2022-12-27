import { NextApiRequest, NextApiResponse } from "next";
import { lich_thituyen } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	//const userId = session.id;
	switch (method) {
		case "GET":
			try {

				const lich_thituyen = await prisma.$queryRaw<lich_thituyen[]>`SELECT * 
				FROM lich_thituyen
				`;
				console.log("========= PROJECT get", lich_thituyen);
				res.json({ lich_thituyen });
			} catch (err) {
				//res.status(401).json({ err: err.message });
			}

			break;
		case "POST":

			try {
				//1: bóc tách data
				let newData = {

					ngaythi: req.body.ngaythi,
					diadiem: req.body.diadiem,
					noidung_thituyen: req.body.noidung_thituyen,
					thoigian: req.body.thoigian,
					soluong: req.body.soluong,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at
				}

				//2: lưu data
				const lich_thituyen_new = await prisma.lich_thituyen.create({
					data: newData
				})

				// const tongiao_new = await prisma.$queryRaw<dm_tongiao[]>`INSERT INTO dm_tongiao VALUES('aa', 'bb', '2022-06-01 08:00:00', '2022-06-01 08:00:00');`
				//3: thông báo
				res.json({ project: lich_thituyen_new })
			} catch (err) {
				res.status(401).json({ err: err.message });
			}

			break;




		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}