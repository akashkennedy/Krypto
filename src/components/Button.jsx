const Button = ({ label }) => {
  return (
    <button className="bg-button rounded-full p-3 w-32 relative bottom-20 left-20 font-semibold mr-3">
      {label}
    </button>
  );
};

export default Button;
