import React from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacters } from "../components/api";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .char_img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
  background-color: ${(props) => props.theme.bgColor};
`;
const Header = styled.header`
  margin: 100px 0 10px 0;
`;
const Loader = styled.span``;
const Title = styled.h1`
  font-size: 20px;
  margin: 10px 0 10px 0;
`;
const BackBtn = styled.span`
  color: white;
`;
const CharactersList = styled.ul`
  width: 320px;
  /* height: 100vh; */
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
`;
const Charater = styled.li`
  background-color: red;
  /* :hover {
    background-color: red;
  } */
  border: 1px solid white;
  padding: 8px;
  border-radius: 8px;
  margin: 5px;
`;

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
  const { id } = useParams();
  const { state }: RouteState = useLocation();

  const { isLoading, data } = useQuery<ICharacter>(["character"], () =>
    fetchCharacters(id!)
  );

  return (
    <Container>
      <Header>
        <Link to="/">
          <BackBtn>⬅️</BackBtn>
        </Link>
        {/* <Title>{state?.name || "Loading..."} </Title> */}
      </Header>

      {isLoading ? (
        <Loader>
          Loader...<span></span>
        </Loader>
      ) : (
        <Container>
          <Img
            src={data?.imageUrl ? data.imageUrl : "undefined"}
            className="char_img"
          />
          <Title>{data?.films[0].replace(/\(/g, "")}</Title>
          <CharactersList>
            {data?.films.map((f) => (
              <Charater key={data.id}>{f}</Charater>
            ))}
          </CharactersList>
        </Container>
      )}
    </Container>
  );
}
