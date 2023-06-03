import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Img } from "react-image";
import { Link } from "react-router-dom";
import { fetchCharactersList } from "../components/api";
import Charcter from "./Charcter";

interface ICharctersList {
  id: number;
  imageUrl: string;
  name: string;
}

const Container = styled.div``;
const Header = styled.header``;
const Loader = styled.span``;
const Title = styled.h1``;
const CharactersList = styled.ul``;
const Charater = styled.li``;

export default function Home() {
  const [character, setCharacter] = useState<ICharctersList[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let ignore = false;
    let results = [];
    fetchCharactersList().then((data) => setCharacter(data));
    // fetch("https://disney_api.nomadcoders.workers.dev/characters")
    //   .then((response) => response.json())
    //   .then((json) => setCharacter(json.slice(0, 100)));

    setLoading(false);
  }, []);

  return (
    <Container>
      <Header>
        <Title></Title>
      </Header>
      {loading ? (
        <Loader>Loader...</Loader>
      ) : (
        <CharactersList>
          {character?.map((char) => (
            <Link to={`character/${char.id}`} state={{ name: char.name }}>
              <Charater key={char.id}>
                <Img src={char.imageUrl} />
                {char.name}
              </Charater>
            </Link>
          ))}
        </CharactersList>
      )}
    </Container>
  );
}
