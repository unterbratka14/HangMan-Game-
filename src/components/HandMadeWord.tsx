type HandMadeWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HandMadeWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HandMadeWordProps) => {
  return (
    <>
      <div className="flex gap-4 text-8xl font-bold uppercase">
        {wordToGuess.split("").map((letter, index) => (
          <span key={index} className="border-b-4 border-black border-solid">
            <span
              className={
                guessedLetters.includes(letter.toLowerCase()) || reveal
                  ? "visible"
                  : "invisible"
              }
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    </>
  );
};

export default HandMadeWord;
