
import { NextApiRequest, NextApiResponse } from "next";
import { hoso_ungvien } from '@prisma/client';
import { PrismaClient } from '../../prisma/generated/prisma-client-js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { method } = req;
    // const userId = session.id;
    switch (method) {
		case "GET":
			try {
				const hoso_ungvien = await prisma.$queryRaw<hoso_ungvien[]>`SELECT * 
				FROM hoso_ungvien;`
				
				console.log("========= PROJECT get", hoso_ungvien);
				res.json({ hoso_ungvien });
			} catch (err) {
				// res.status(401).json({ err: err.message });
			}
			break;
			case 'POST':
				try {
					console.log(req.body);
					// 1. boc tach du lieu
					let newDT = {
						hoso_ma: req.body.hoso_ma ,
						hoso_ngaynop: req.body.hoso_ngaynop ,
						hoten_ungvien:req.body.hoten_ungvien ,
						gioi_tinh: req.body.gioi_tinh ,
						sdt: req.body.sdt ,
						email:req.body.email ,
						CMND: req.body.CMND ,
						que_quan: req.body.que_quan ,
						diachi_lienhe:req.body.diachi_lienhe ,
						tinhtrang_honnhan:req.body.tinhtrang_honnhan ,
						nguoilienhe_sdt:req.body.nguoilienhe_sdt ,
						nguoilienhe_diachi: req.body.nguoilienhe_diachi ,
						ngayvao_doan: req.body.ngayvao_doan ,
						ngayvao_dang: req.body.ngayvao_dang ,
						congviec_truoctuyendung:req.body.congviec_truoctuyendung ,
						trangthai_tuyendung: req.body.trangthai_tuyendung ,
						dantoc_id:req.body.dantoc_id ,
						tongiao_id: req.body.tongiao_id ,
						created_at:req.body.created_at ,
						updated_at: req.body.updated_at ,
					}
	
					//2. luu
					const newProject = await prisma.hoso_ungvien.create({
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