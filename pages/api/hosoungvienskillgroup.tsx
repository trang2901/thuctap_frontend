
import { NextApiRequest, NextApiResponse } from "next";
import { hoso_ungvien_skillgroup } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const prisma = new PrismaClient();
	const { method } = req;
	// const userId = session.id;
	switch (method) {
		case "GET":
			try {
				const hoso_ungvien_skillgroup = await prisma.$queryRaw<hoso_ungvien_skillgroup[]>`SELECT * 
				FROM hoso_ungvien_skillgroup;`

				console.log("========= PROJECT get", hoso_ungvien_skillgroup);
				res.json({ hoso_ungvien_skillgroup });
			} catch (err) {
				// res.status(401).json({ err: err.message });
			}
			break;
			
		case 'POST':
			try {
				console.log(req.body);
				// 1. boc tach du lieu
				let newDT = {
					group_name: req.body.group_name,
					group_code:req.body.group_code,
					group_status:req.body.group_status,
					created_at: req.body.created_at,
					updated_at:req.body.updated_at,
				};

				//2. luu
				const newProject = await prisma.hoso_ungvien_skillgroup.create({
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