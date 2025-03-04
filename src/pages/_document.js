import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Nekozuma</title>
        <meta name="title" content="Nekozuma" />
        <meta
          name="description"
          content="The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nekozuma-rho.vercel.app/" />
        <meta property="og:title" content="Nekozuma" />
        <meta
          property="og:description"
          content="The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."
        />
        <meta property="og:image" content="/meta-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nekozuma-rho.vercel.app/"
        />
        <meta property="twitter:title" content="Nekozuma" />
        <meta
          property="twitter:description"
          content="The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."
        />
        <meta property="twitter:image" content="/meta-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
