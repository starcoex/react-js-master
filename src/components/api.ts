export const fetchCharactersList = fetch(
  "https://disney_api.nomadcoders.workers.dev/characters"
)
  .then((response) => response.json())
  .then((json) => console.log(json));
