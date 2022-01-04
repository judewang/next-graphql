import type { NextApiRequest, NextApiResponse } from 'next';
import * as admin from 'firebase-admin';
import { serviceAccount } from '@/lib/serviceAccount.server';
import { STATUS } from '@/lib/constants';

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

type Data = { status: STATUS } | { count: number };

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const db = admin.firestore();

  const countRef = db.collection('count').doc('current');

  const count = Number((await countRef.get()).data()?.count) ?? 0;

  if (req.method === 'POST') {
    await countRef.set({ count: count + 1 });
    res.status(200).json({ status: STATUS.Ok });
  } else {
    res.status(200).json({ count });
  }
}
