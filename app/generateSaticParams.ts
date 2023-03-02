// export default function Page({ params }) {
//   const { slug } = params;

//   return ...
// }

// export async function generateStaticParams() {
//   const posts = await getPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// Generate segments for both [categorySlug] and [productId]
// export async function generateStaticParams() {
//   const rows = await query('SELECT category, id FROM products');

//   return rows.map((row) => ({
//     categorySlug: row.category,
//     productId: row.id,
//   }));
