import styles from "../Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  activeLetters: string[];
  disabled?: boolean;
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyBoardProps) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        {KEYS.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ""} ${
                isInactive ? styles.inactive : ""
              }`}
              key={key}
              disabled={isInactive || isActive || disabled}
            >
              {key.toLocaleUpperCase()}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Keyboard;
