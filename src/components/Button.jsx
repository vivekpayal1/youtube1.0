const Button = ({ name }) => {
  return (
    <button className="rounded-lg bg-[rgba(0,0,0,0.05)] px-3 py-2 font-semibold">
      {name}
    </button>
  );
};

export default Button;
