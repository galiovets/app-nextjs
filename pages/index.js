import Image from "next/image";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { fetchData } from "../service/fetchData";
import DataList from "../components/DataList";
import Container from "../components/Container";
import Socials from "../components/Socials";

export default function Home() {
  const [name, setName] = useState([]);
  const [interests, setInterests] = useState([]);
  const [experience, setExperience] = useState([]);
  const [socials, setSocials] = useState({});

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
      users.map(({ socials }) => {
        setSocials(socials);
      });
    });
  }, []);

  const { github, linkedin } = socials;

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
        <div>
          <p>Please contact me</p>
          <Socials link={github} icon={<BsGithub />} />
          <Socials link={linkedin} icon={<BsLinkedin />} />
        </div>
      </Container>

      <style jsx>
        {`
          h1 {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            border: 0;
            padding: 0;
            clip: rect(0 0 0 0);
            overflow: hidden;
          }

          h2 {
            margin: 80px auto 30px;
            font-weight: 600;
            font-size: 35px;
            letter-spacing: 0.05em;
            text-align: center;
          }

          p {
            margin-bottom: 40px;
            font-size: 20px;
            line-height: 1.2;
          }

          h3 {
            margin-bottom: 25px;
            font-weight: 500;
            font-size: 25px;
            letter-spacing: 0.05em;
            text-align: center;
          }

          div {
            position: fixed;
            bottom: 10px;
            right: 80px;
            display: flex;
          }
        `}
      </style>
    </>
  );
}
