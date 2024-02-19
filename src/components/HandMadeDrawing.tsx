// const Head = () => {
//   return (
//     <div className="w-[50px] h-[50px] rounded-full border-[10px] border-black border-solid absolute top-[50px] right-[-21px]"></div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="w-[10px] h-[100px] rounded-full bg-black absolute top-[90px] right-0"></div>
//   );
// };

// const RightArm = () => {
//   return (
//     <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[105px] right-[-55px] rotate-[135deg]"></div>
//   );
// };

// const LeftArm = () => {
//   return (
//     <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[105px] right-[-5px] -rotate-[135deg]"></div>
//   );
// };

// const RightLeg = () => {
//   return (
//     <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[205px] right-[-55px] rotate-45"></div>
//   );
// };

// const LeftLeg = () => {
//   return (
//     <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[205px] right-[-5px] -rotate-45"></div>
//   );
// };

const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] border-black border-solid absolute top-[50px] right-[-21px]"></div>
);

const BODY = (
  <div className="w-[10px] h-[100px] rounded-full bg-black absolute top-[90px] right-0"></div>
);

const RIGHT_ARM = (
  <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[105px] right-[-55px] rotate-[135deg]"></div>
);

const LEFT_ARM = (
  <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[105px] right-[-5px] -rotate-[135deg]"></div>
);

const RIGHT_LEG = (
  <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[205px] right-[-55px] rotate-45"></div>
);

const LEFT_LEG = (
  <div className="w-[70px] h-[10px] rounded-full bg-black absolute top-[205px] right-[-5px] -rotate-45"></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HandMadeDrawingProps = {
  numberOfGuesses: number;
};

const HandMadeDrawing = ({ numberOfGuesses }: HandMadeDrawingProps) => {
  return (
    <>
      <div className="relative">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="h-[50px] w-[10px] bg-black ml-[120px] top-[0] right-[0] absolute" />{" "}
        {/* The hanging rope */}
        <div className="h-[10px] w-[200px] bg-black ml-[120px]" />{" "}
        {/* The horizontal line */}
        <div className="h-[400px] w-[10px] bg-black ml-[120px]" />{" "}
        {/* The long vertical line */}
        <div className="h-[10px] w-[250px] bg-black" /> {/* The stand */}
      </div>
    </>
  );
};

export default HandMadeDrawing;
