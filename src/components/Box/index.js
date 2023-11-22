const Box = ({ number }) => {
  console.log(`${number} WAS CALLED`);
  return <div className="box">{number}</div>;
};

export default Box;
