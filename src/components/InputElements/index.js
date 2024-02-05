import "./index.css";

const InputElements = (props) => {
  const { inputType } = props;

  return (
    <li>
      <input type="text" placeholder={inputType} className="input" />
    </li>
  );
};

export default InputElements;
