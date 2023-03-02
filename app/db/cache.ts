import { cache } from 'react';

export const getUser = cache(async (id: string,db:any) => {
  const user = await db.user.findUnique({ id });
  return user;
});