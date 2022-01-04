import { useRouter } from 'next/router';
import Script from 'next/script';
import { DefaultSeo, NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';

const enableSeo =
  process.env.VERCEL_ENV === 'production' && process.env.ENABLE_SEO;

export const DefaultMeta = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <DefaultSeo
        title={t('meta.title')}
        description={t('meta.description')}
        openGraph={{
          locale,
          site_name: t('meta.title'),
          title: t('meta.og-title'),
          type: 'game',
          description: t('meta.og-description'),
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/images/${
                locale ?? 'zh-TW'
              }-og.jpg`,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@Coramdeo',
        }}
        additionalMetaTags={[
          {
            property: 'twitter:title',
            content: t('meta.title'),
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/favicon.ico`,
          },
        ]}
      />
      {enableSeo ? (
        <>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            `,
            }}
          />
          <Script id="gtm">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${process.env.GTM_ID}');`}
          </Script>
        </>
      ) : (
        <NextSeo noindex nofollow />
      )}
    </>
  );
};
