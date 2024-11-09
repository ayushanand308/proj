import { faClone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imageInput=({handlesubmit1,value1,setValue1})=>{
    return(
        <div>
            <form onSubmit={handlesubmit1} className="flex items-center justify-center custom:flex-col">
                <input
                type="text"
                id="message-input"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Enter Prompt"
                className="w-64 custom:w-56 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 border-2 border-rose-500 ring-2 ring-rose-500"
                />
                <button
            className="custom:px-16 custom:py-2 custom:my-2 px-4 py-2 bg-rose-500 text-white rounded-lg ml-2 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
            type="submit"
          >
            <FontAwesomeIcon icon={faPaperPlane} />

          </button>
            </form>
        </div>
    )

}
export default imageInput