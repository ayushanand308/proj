import { faClone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputForm = ({ handleChange, handleSubmit, value }) => {
    return (
      <div>
        <form
        className="fixed bottom-0 custom:flex left-4 right-4 mb-4 p-2 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <input
            id="message-input"
            value={value}
            onChange={handleChange}
            className=" max-w-xl px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 border-2 border-rose-500 ring-2 ring-rose-500"
            type="text"
            placeholder="Ask a question"
          />
          <button
            className="px-4 py-2 bg-rose-500 text-white rounded-lg ml-2 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
            type="submit"
          >
          <FontAwesomeIcon icon={faPaperPlane}/>
          </button>
        </div>
      </form>
      </div>
      
    );
  };

  export default InputForm;