import React from 'react';
import { Helmet } from 'react-helmet';

const locales = {
  en: 'en_US',
  ko: 'ko_KR',
};

const data = {
  locale: 'ko',
  title: 'Surfesta! - 이벤트를 찾는 빠른 방법',
  canonical: 'https://surfesta.site',
  description: '서페스타입니다',
  img:
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3110e469822527.5b8ed1c3d5977.jpg',
};

const Meta = () => {
  const lang = locales[data.locale] || locales['en'];
  const title = data.title;
  const description = data.description;
  const image = data.image !== undefined && `${data.image}`;
  const canonical = data.canonical;
  const type = data.type === undefined ? 'website' : data.type;
  const width = data.image && (data.width || 1200);
  const height = data.image && (data.height || 630);

  return (
    <Helmet titleTemplate="%s">
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {image ? <link rel="image_src" href={image} /> : null}
      {image ? <meta itemprop="image" content={image} /> : null}

      <meta property="og:site_name" content="YOUR WEB SITE" />
      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:locale" content={locales[lang]} />
      <meta property="og:type" content={type} />
      {image ? <meta property="og:image" content={image} /> : null}
      {width ? <meta property="og:image:width" content={width} /> : null}
      {height ? <meta property="og:image:height" content={height} /> : null}
      <meta property="fb:pages" content="YOUR WEB SITE" />

      {/* change type of twitter if there is no image? */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      <meta name="twitter:site" content="@YOURWEBSITE" />
      {canonical ? (
        <link rel="alternate" href={data.canonical} hreflang={lang} />
      ) : null}
    </Helmet>
  );
};

export default Meta;
