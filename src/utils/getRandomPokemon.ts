const MAX_DEX_ID = 5;

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const pokdexNumber = Math.floor(Math.random() * MAX_DEX_ID + 1);
  if (pokdexNumber !== notThisOne) return pokdexNumber;
  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstID = getRandomPokemon();
  const secondID = getRandomPokemon(firstID);
  return [firstID, secondID];
};
