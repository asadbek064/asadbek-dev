import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {

  const routes = ['', '/project', '/about', '/dev', '/uses'].map(
    (route) => ({
      url: `https://asadbek.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ];
}
