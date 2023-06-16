import { faClone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputForm = ({ handleChange, handleSubmit, value }) => {
    return (
      <form
        className="fixed custom:overflow-x-hidden bottom-0 md:w-3/5 w-3/4 mb-4 p-2 rounded-lg bg-rose-500 text-white"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center">
          <input
            id="message-input"
            value={value}
            onChange={handleChange}
            className="focus:outline-none border-transparent focus:shadow-outline-blue rounded-lg text-white py-2 px-4 mr-3 flex-1"
            type="text"
            placeholder="Ask a question"
            style={{ backgroundColor: 'transparent', color: 'rgb(255, 255, 255)', fontSize: '1.2rem' }}
          />
          <button
            className="font-bold py-2 px-4 rounded-md bg-gray-500 hover:bg-rose-400 text-white"
            type="submit"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    );
  };

  export default InputForm;