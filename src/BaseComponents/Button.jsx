const Button = (props) => {
  return (
    <button className="flex justify-center align-center gap-2 px-4 py-4 border-none border-red-300 text-lg leading-none rounded-full text-white w-fit bg-[#FF6452]">
      {props.label}
      <img
        src={props.iconURL}
        className="ml-2 rounded-full w-6 h-6"
        alt="arrow-right-icon"
      />
    </button>
  );
};

export default Button;
