import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchData } from "../service/fetchData";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData().then((users) => {
      setData(users);
    });
  }, []);

  console.log(data);

  // data.map((user) => console.log(user));

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
      <main>
        <h1>Webdeveloper CV</h1>
        <h2>Hello, my name is Maria</h2>
        <p>
          I am junior dev with stack HTML+CSS/JS/React.js/Node.js. Currently I
          am working on website for NFT projec. I’ve joined the team of
          founder/Pm and artist after their first collection. Deployed on
          OpenSea. Now it will be full website with twitter and discord. This is
          practically our first project. So stay tuned, I promise I’ll share
          some of NFT with you =). We are a little team of enthusiasts. And I’ll
          looking forward for become web 3 dev. Now student at doge academy,
          learning many new things about crypto, SOL and blockchain.
        </p>
        <h3>interests</h3>
        <ul>
          <li>coding</li>
          <li>animals</li>
          <li>harry potter</li>
        </ul>
        <h3>prev experience</h3>
        <p>
          Manager in crewing company, student at IT courses, Junior HTMl+CSS;
          JS/react/Node js dev. Webdeveloper in PicsTeam.
        </p>
      </main>
    </>
  );
}
