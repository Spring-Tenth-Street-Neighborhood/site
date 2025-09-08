import { useSiteMetadata } from "./useSiteMetadata";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export function Seo(props: SeoProps) {
  const { title, description, image, pathname, children } = props;
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* Facebook Open Graph meta tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.title} />

      {children}
    </>
  );
}
