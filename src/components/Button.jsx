const Button = ({ label, className }) => {
  return (
    <button className={`bg-button rounded-full p-3 w-32 font-semibold transition-all ${className}`}>
      {label}
    </button>
  );
};

export default Button;
