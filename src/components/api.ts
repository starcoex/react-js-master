// export const fetchCharactersList = async () => {
//   await fetch("https://disney_api.nomadcoders.workers.dev/characters")
//     .then((response) => response.json())
//     .then((json) => json);
// };

// export const fetchCharacters = async () => {
//   await fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };

export const fetchCharactersList = async () => {
  return await (
    await fetch("https://disney_api.nomadcoders.workers.dev/characters")
  ).json();
};
export const fetchCharacters = async (id: string) => {
  return await (
    await fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`)
  ).json();
};

// interface ICharacter {
//   id: string | undefined;
// }
