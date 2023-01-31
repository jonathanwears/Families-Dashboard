export function capitalise(word: string) {
  const words = word.split(" ");
  const capitalisedWord = words.map(word => {
    return word[0].toUpperCase() + word.substring(1);
  })
  const finishedWord = capitalisedWord.join(' ');
  return finishedWord;
}
