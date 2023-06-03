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
