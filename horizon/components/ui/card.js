const Card = (props) => {
  return (
    <div
      className={`bg-white text-black p-5 rounded-md ${props.width} mx-auto md:shadow-floating m-5`}
    >
      {props.children}
    </div>
  );
};
export default Card;
