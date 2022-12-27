
import { NextApiRequest, NextApiResponse } from "next";
import { hoso_ungvien_skill_lever } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	// const userId = session.id;
	switch (method) {
		case "GET":
			try {
				const hoso_ungvien_skill_lever = await prisma.$queryRaw<hoso_ungvien_skill_lever[]>`SELECT * 
				FROM hoso_ungvien_skill_lever;`

				console.log("========= PROJECT get", hoso_ungvien_skill_lever);
				res.json({ hoso_ungvien_skill_lever });
			} catch (err) {
				// res.status(401).json({ err: err.message });
			}
			break;
		case 'POST':
			try {
				console.log(req.body);
				// 1. boc tach du lieu
				let newDT = {
					hoso_id: req.body.hoso_id,
					skill_id: req.body.skill_id,
					level: req.body.level,
					created_at: req.body.created_at,
					updated_at: req.body.updated_at,
				};

				//2. luu
				const newProject = await prisma.hoso_ungvien_skill_lever.create({
					data: newDT
				});


				console.log('da luu xong =========', newProject);
				// newProject.resolve();

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