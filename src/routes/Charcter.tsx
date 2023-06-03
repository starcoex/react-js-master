import React, { useEffect, useState } from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacters } from "../components/api";
const Container = styled.div``;
const Header = styled.header``;
const Loader = styled.span``;
const Title = styled.h1``;
const BackBtn = styled.span``;
const CharactersList = styled.ul``;
const Charater = styled.li``;

interface RouteParams {
  id: string;
}
interface RouteState {
  state: { name: string };
}
interface ICharacter {
  films: string[];
  id: string;
  imageUrl: string;
  name: string;
  sourceUrl: string;
}
export default function Charcter() {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<ICharacter>();
  const { state }: RouteState = useLocation();
  useEffect(() => {
    // fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`)
    //   .then((response) => response.json())
    //   .then((json) => setCharacter(json));
    fetchCharacters(id!).then((data) => setCharacter(data));
    setLoading(false);
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."} </Title>
      </Header>
      <Link to="/">
        <BackBtn>🔙⬅️</BackBtn>
      </Link>

      {loading ? (
        <Loader>
          Loader...<span></span>
        </Loader>
      ) : (
        <Container>
          {/* <Img src="https://static.wikia.nocookie.net/disney/images/8/8f/Achilles_HOND.jpg" /> */}
          <Img src={character?.imageUrl ? character.imageUrl : "undefined"} />"
          {/* <img src={character?.imageUrl} /> */}
          <CharactersList>
            {character?.films.map((f) => (
              <Charater key={character.id}>{f}</Charater>
            ))}
          </CharactersList>
        </Container>
      )}
    </Container>
  );
}
