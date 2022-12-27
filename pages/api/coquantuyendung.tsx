
import { NextApiRequest, NextApiResponse } from "next";
import { coquan_tuyendung } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	// const userId = session.id;
	switch (method) {
		case "GET":
			try {
				const coquan_tuyendung = await prisma.$queryRaw<coquan_tuyendung[]>`SELECT * 
				FROM coquan_tuyendung;`

				console.log("========= PROJECT get", coquan_tuyendung);
				res.json({ coquan_tuyendung });
			} catch (err) {
				res.status(401).json({ err: err.message });
			}
			break;
		case 'POST':
			try {
				console.log(req.body);
				// 1. boc tach du lieu
				let newDT = {
					coquan_ma: req.body.coquan_ma,
					coquan_ten: req.body.coquan_ten,
					coquan_diachi: req.body.coquan_diachi,
					coquan_sdt: req.body.coquan_sdt,
					coquan_email: req.body.coquan_email,
					coquan_website: req.body.coquan_website,
					nguoilienhe: req.body.nguoilienhe,
					co_quan_mota: req.body.co_quan_mota,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at,
				}

				//2. luu
				const newProject = await prisma.coquan_tuyendung.create({
					data: newDT
				});
				
				console.log('da luu xong =========', newProject);
			
				// 3. thong bao
				res.json({
					msg: "da them moi thanh cong"
				});
				// res.json({ project: newProject });
			} catch (err) {
				res.status(401).json({ err: err.message });
			}
			break;
		default:
			res.status(404).send({ message: "Page not found!" });
			break;
	}

}