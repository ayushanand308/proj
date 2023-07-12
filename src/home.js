import {React,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm2 from './inputForm2';
import ImageInput from './imageInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faUserPlus,faMessage ,faMagicWandSparkles,faImage,faRightFromBracket,faBars} from '@fortawesome/free-solid-svg-icons';

const Home = ({
  value,
  setValue,
  handleChange,
  handleSubmit,
  value1,
  setValue1,
  handlesubmit1,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleQuestionClick = (question) => {
    setValue(question);
    navigate('/chats');
    
  };

  const handleQuestionClick2 = (question) => {
    
      navigate('/generations');
    
    
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    setIsLoggedIn(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden  items-center justify-stretch min-h-screen py-4 bg-rose-100">
      <nav className="hidden md:flex items-center justify-center fixed top-5 w-1/2 rounded-xl bg-rose-500 p-4">
        <div>
          {isLoggedIn ? (
            <button
              title='Logout'
              onClick={handleLogout}
              className="text-white bg-transparent border border-white rounded px-4 py-2 transition-all duration-200 ease-in-out hover:bg-white hover:text-rose-500"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          ) : (
            <button
              title='Login'
              onClick={handleLogin}
              className="text-white bg-transparent border border-white rounded mr-4 px-4 py-2 transition-all duration-200 ease-in-out hover:bg-white hover:text-rose-500"
            >
              <FontAwesomeIcon icon={faUser} className="gap-4" />
            </button>
          )}

          {!isLoggedIn && (
            <button
              title='Sign Up'
              onClick={handleSignup}
              className="text-white bg-transparent border border-white rounded px-4 py-2 transition-all duration-200 ease-in-out hover:bg-white hover:text-rose-500"
            >
              <FontAwesomeIcon icon={faUserPlus} />
            </button>
          )}

          <button
            title='Chats'
            onClick={() => navigate('/chats')}
            className="text-white bg-transparent border border-white rounded px-4 py-2 ml-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-rose-500"
          >
            <FontAwesomeIcon icon={faMessage} />
          </button>
          <button
            title='Generate Images'
            onClick={() => navigate('/generations')}
            className="text-white bg-transparent border border-white rounded px-4 py-2 ml-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-rose-500"
          >
            <FontAwesomeIcon icon={faImage} />
          </button>
          <button
            title='Image Variations'
            onClick={() => navigate('/variations')}
            className="text-white bg-transparent border border-white rounded px-4 py-2 ml-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-rose-500"
          >
            <FontAwesomeIcon icon={faMagicWandSparkles} />
          </button>
        </div>
      </nav>

      <nav className="md:hidden flex items-center justify-between fixed top-0 w-full  bg-rose-500 p-4">
        <button
          onClick={toggleMenu}
          className="text-white bg-transparent rounded px-2 py-1 transition-all duration-200 ease-in-out hover:bg-white hover:text-rose-500"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`absolute left-0 top-16 w-full bg-white rounded-b-xl shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* Menu content goes here */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 transition-all duration-100 ease-in-out hover:bg-rose-500 hover:text-white"
            >
              <FontAwesomeIcon icon={faUser} /> Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="block w-full text-left px-4 py-2 transition-all duration-200 ease-in-out hover:bg-rose-500 hover:text-white"
            >
              <FontAwesomeIcon icon={faUser} /> Login
            </button>
          )}
          {!isLoggedIn && (
            <button
              onClick={handleSignup}
              className="block w-full text-left px-4 py-2 transition-all duration-200 ease-in-out hover:bg-rose-500 hover:text-white"
            >
              <FontAwesomeIcon icon={faUserPlus} /> Signup
            </button>
          )}
          <button
            onClick={() => navigate('/chats')}
            className="block w-full text-left px-4 py-2 transition-all duration-200 ease-in-out hover:bg-rose-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faMessage} /> Chats
          </button>
          <button
            onClick={() => navigate('/generations')}
            className="block w-full text-left px-4 py-2 transition-all duration-200 ease-in-out hover:bg-rose-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faImage} /> Generations
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center  mt-20">
        <h1 className="text-4xl font-bold mb-8 mt-4 text-gray-800">AyushGPT</h1>
        <div className="flex flex-col md:flex-row gap-8 ma" id="main">
          <div className="custom:w-3/4 md:w-1/2 flex flex-col items-center justify-center shadow-lg mx-auto rounded-3xl p-8 bg-white " id="image-generation">
          <svg className="bg-rose-500 rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">GENERATE IMAGES</h1>
            
            <div className="list mb-8">
              <ul className="flex flex-col items-center text-center gap-4">
                {['Serene sunset over mountains', 'Playful puppies in meadow', 'Vibrant city skyline at dusk'].map((text) => (
                  <li
                    key={text}
                    onClick={() => handleQuestionClick2(text)}
                    className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer transition-all duration-200 ease-in-out bg-rose-500 text-white hover:bg-white hover:text-rose-500 hover:border-rose-500"
                  >
                    <p>{`"${text}"`}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4 Input">
              <ImageInput handlesubmit1={handlesubmit1} value1={value1} setValue1={setValue1} />
            </div>
          </div>
          <div className="custom:w-3/4 md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-3xl p-8 mx-auto  bg-white" id="chat">
          <svg className="bg-rose-500 rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">ASK QUESTIONS</h1>
            
            <div className="list mb-8">
              <ul className="flex flex-col items-center text-center gap-4">
                {['Tell me a joke', 'What is the capital of France?', 'Recommend a good book?'].map((text) => (
                  <li
                    key={text}
                    className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer transition-all duration-200 ease-in-out bg-rose-500 text-white hover:bg-white hover:text-rose-500 hover:border-rose-500"
                    onClick={() => handleQuestionClick(text)}
                  >
                    <p>{`"${text}"`}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='Input -mt-8'>
            <InputForm2 className="Input" handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
            </div>
          </div>



          {/* <div className="custom:w-3/4 md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-3xl p-8 mx-auto  bg-white" id="chat">
          <svg className="bg-rose-500 rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">IMAGE VARIATIONS</h1>
            
            <div className="list mb-8">
              <ul className="flex flex-col items-center text-center gap-4">
                {['Tell me a joke', 'What is the capital of France?', 'Recommend a good book?'].map((text) => (
                  <li
                    key={text}
                    className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer transition-all duration-200 ease-in-out bg-rose-500 text-white hover:bg-white hover:text-rose-500 hover:border-rose-500"
                    onClick={() => handleQuestionClick(text)}
                  >
                    <p>{`"${text}"`}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='Input -mt-8'>
            <InputForm2 className="Input" handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
            </div>
          </div> */}
        </div>
        <div className="custom:w-3/4 md:w-1/2 my-8 flex flex-col items-center justify-center shadow-lg rounded-3xl p-6 mx-auto  bg-white">
              <ul className="flex flex-col items-center text-center gap-4">
                {['Upload image to generate variations'].map((text) => (
                  <li
                    key={text}
                    className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer transition-all duration-200 ease-in-out bg-rose-500 text-white hover:bg-white hover:text-rose-500 hover:border-rose-500"
                    onClick={() => navigate('/variations')}
                  >
                    <p>{`${text}`}</p>
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </div>
  );
};

export default Home;
