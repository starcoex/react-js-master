import React from "react";
import styled from "styled-components";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { fetchCharactersList } from "../components/api";
import { useQuery } from "@tanstack/react-query";
import Headers from "../components/Headers";

interface ICharctersList {
  id: number;
  imageUrl: string;
  name: string;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: 50px 0 20px 0;
`;
const Loader = styled.span``;
const Title = styled.h1``;
const CharactersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
`;
const Charater = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 170px;
  /* border: 1px solid white; */

  :hover {
    background-color: red;
  }
  border-radius: 15px;
  .disnes_img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    color: ${(props) => props.theme.textColr};
    font-weight: 500;
    font-size: 14px;
  }
`;

export default function Home() {
  const { isLoading, data, isFetching } = useQuery<ICharctersList[]>(
    ["characterList"],
    fetchCharactersList,
    {
      select(data) {
        return data.slice(0, 500);
      },
    }
  );
  return (
    <Container>
      <Headers />

      <Header>
        <Title>Disney Charaters</Title>
      </Header>
      {isLoading ? (
        <Loader>Loader...</Loader>
      ) : (
        <CharactersList>
          {data?.map((char) => (
            <Charater key={char.id}>
              <Link to={`character/${char.id}`} state={{ name: char.name }}>
                <Img src={char.imageUrl} className="disnes_img" />
                <span> {char.name.slice(0, 15)}</span>
              </Link>
            </Charater>
          ))}
        </CharactersList>
      )}
    </Container>
  );
}
