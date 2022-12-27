import { NextApiRequest, NextApiResponse } from 'next';
import { dm_dantoc } from '@prisma/client';
import { PrismaClient } from '../../../prisma/generated/prisma-client-js';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  // return new Promise(resolve => {
  const { method } = req;
  // const userId = session.id;
  switch (method) {
    case 'GET':
      try {
        const dm_dantoc = await prisma.$queryRaw<dm_dantoc[]>`SELECT *
					FROM dm_dantoc;`;

        console.log('========= PROJECT get', dm_dantoc);
        res.json({ dm_dantoc });
      } catch (err) {
        res.status(401).json({ err: err.message });
      }
      break;
    case 'POST':
      try {
        console.log(req.body);
        // 1. boc tach du lieu
        let newDT = {
          dantoc_ma: req.body.dantoc_ma,
          dantoc_ten: req.body.dantoc_ten,
          created_at: req.body.created_at,
          updated_at: req.body.updated_at,
        };

        //2. luu
        const newProject = await prisma.dm_dantoc.create({
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
      res.status(404).send({ message: 'Page not found!' });
      break;
  }
  // return resolve(0)
  // })
};
