import Head from "next/head";

function Container({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="web development, javascript" />
        <meta name="description" content="this is bio of junior web dev" />
        <link rel="icon" href="/favicon.ico" />
        <title>My first Next.Js App</title>
      </Head>
      <main>{children}</main>
      <style jsx>
        {`
          main {
            max-width: 1080px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 20px 20px 20px;
          }
        `}
      </style>
    </>
  );
}

export default Container;
