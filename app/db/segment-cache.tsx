// import prisma from './lib/prisma';

export const revalidate = 3600; // revalidate every hour

async function getPosts() {
  // const posts = await prisma.post.findMany();
  // return posts;
}

export default async function Page() {
  const posts = await getPosts();
  // ...
}