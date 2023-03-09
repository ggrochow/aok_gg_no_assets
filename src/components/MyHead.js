import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function MyHead ({
  title,
  imageUrl,
  description,
  cardType = 'summary_large_image',
}) {
  const fullTitle = `${title} | AoK.gg`

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content="website" />

      { imageUrl && (
        <>
          <meta property='twitter:card' content={cardType} />
          <meta property="twitter:image" content={imageUrl} />
          <meta property="og:image" content={imageUrl} />
        </>
      )}

      { description && (
        <>
          <meta property="og:description" content={description} />
          <meta property='description' content={description} />
        </>
      )}
    </Head>
  )
}

MyHead.proptypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  cardType: PropTypes.oneOf(['summary', 'summary_large_image']),
}