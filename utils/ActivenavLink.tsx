'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function BlogNavLink({
  slug,
  children,
}: {
  slug: string,
  children: React.ReactNode,
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
    <Link
      href={`/blog/${slug}`}
      // Change style depending on whether the link is active
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </Link>
  );
}

// Import the Client Component into a parent Layout (Server Component)
// import { BlogNavLink } from './blog-nav-link';
// import getFeaturedPosts from './get-featured-posts';

// export default async function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const featuredPosts = await getFeaturedPosts();
//   return (
//     <div>
//       {featuredPosts.map((post) => (
//         <div key={post.id}>
//           <BlogNavLink slug={post.slug}>{post.title}</BlogNavLink>
//         </div>
//       ))}
//       <div>{children}</div>
//     </div>
//   );
// }