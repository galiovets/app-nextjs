import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchData } from "../service/fetchData";
import DataList from "../components/DataList";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [name, setName] = useState([]);
  const [interests, setInterests] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetchData().then((users) => {
      users.map(({ name }) => {
        setName(name);
      });
      users.map(({ interests }) => {
        setInterests(interests);
      });
      users.map(({ experience }) => {
        setExperience(experience);
      });
    });
  }, []);

  return (
    <>
      <Container>
        <h1>Web Developer CV</h1>
        <h2>Hello, my name is {name}</h2>
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
        <h3>Interests</h3>
        <DataList collection={interests} />
        <h3>Previous Experience</h3>
        <DataList collection={experience} />
      </Container>

      <style jsx>
        {`
          ul {
            color: red;
          }
        `}
      </style>
    </>
  );
}
