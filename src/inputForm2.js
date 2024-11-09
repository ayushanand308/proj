import { faClone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputForm2 = ({ handleChange, handleSubmit, value,style }) => {
    return (
      <form
      className="flex items-center justify-center custom:flex-col"        onSubmit={handleSubmit}
        style={style}
      >
          <input
            id="message-input"
            value={value}
            onChange={handleChange}
            className="w-64 custom:w-56 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 border-2 border-rose-500 ring-2 ring-rose-500"
            type="text"
            placeholder="Ask a question"
          />
          <button
            className="custom:px-16 custom:py-2 custom:my-2 px-4 py-2 bg-rose-500 text-white rounded-lg ml-2 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
            type="submit"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          
          </button>
      </form>
    );
  };

  export default InputForm2;