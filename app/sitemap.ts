export default async function sitemap() {

  const routes = ['', '/project', '/about', '/dev', '/uses'].map(
    (route: string) => ({
      url: `https://asadk.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ];
}
