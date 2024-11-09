import './App.css';
import Home from './home';
import Chats from './chats';
import { Route, Routes,useNavigate, json } from 'react-router-dom';
import InputForm from './inputForm';
import ImageGeneration from './imageGeneration';
import { useState,useEffect } from 'react';
import Login from './login';
import Signup from './signup';
import ImageVariation from './imageVariation';
import axios from 'axios';





function App() {
  const navigate=useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  /* useEffect(()=>{
    const clearLocalStorage=()=>{
      localStorage.clear();
    }
    window.addEventListener("beforeunload",clearLocalStorage);
    return()=>{
      window.removeEventListener("beforeunload",clearLocalStorage)
    }
  },[]) */
  const generateOutput = async () => {
    setIsLoading(true);
    const options={
    method:"POST",
    data:{
        message:value,
    },
    headers:{
        "Content-Type":"application/json",
    }
}
try {
    const response = await axios('https://frustated.onrender.com/completions', options);
    console.log(response.data.choices[0].message);
/*     console.log(`{Authorization: ${localStorage.getItem("token")}}`)
 */    SetOutput([...output,response.data.choices[0].message]);
} catch (error) {
    console.error('Error', error);
}

setIsLoading(false);
    
};

  const handleChange = (e) => {
    setValue(e.target.value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
try {
  navigate('/chats');
  await generateOutput();
  setQuestion([...question,value]);
  const timestamp = new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
  SetTime([...time, timestamp]);
  setValue("");
  } catch (error) {
  console.error('Error', error);
  }
  

};

const [value, setValue] = useState("");


  const [question, setQuestion] = useState([]);
  const [output, SetOutput] = useState([]);
  const [time,SetTime]=useState([]);
  const [chatHistory,setChatHistory]=useState([]);
  const [value1,setValue1]=useState("");
  const [prompt,setPrompt]=useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);

  const generateOutput1 = async () => {
    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        prompt: value1,
        n: 2
      })
    };

    try{
      const response = await fetch('https://frustated.onrender.com/generations', options);
      const data = await response.json();
      setGeneratedImages([...generatedImages,data.data]);
    }catch(error){
      console.error('Error', error);
    }
    setIsLoading(false)
  };

  const handlesubmit1=async (e)=>{
    navigate('/generations');

    e.preventDefault();
    try{
      await generateOutput1();
      setPrompt([...prompt,value1]);
      setValue1("");
    }catch(error){
      console.error('Error', error);
    }
  };
  
  return (
    <div className='App'>


<Routes>
  <Route path='/' element={<Home question={question} setQuestion={setQuestion} output={output} SetOutput={SetOutput} time={time} 
  SetTime={SetTime} 
  value={value}
  setValue={setValue}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  value1={value1}
  setValue1={setValue1}
  generatedImages={generatedImages}
  setGeneratedImages={setGeneratedImages}
  handlesubmit1={handlesubmit1}
  isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
  />} />
  <Route path='/chats' element={<Chats setQuestion={setQuestion} question={question} SetTime={SetTime} SetOutput={SetOutput} output={output} time={time} 
  value={value}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  chatHistory={chatHistory}
  setChatHistory={setChatHistory}
  isLoading={isLoading}
  setIsloading={setIsLoading} />} />
  <Route path='/generations' element={<ImageGeneration value1={value1} setValue1={setValue1} generatedImages={generatedImages} setGeneratedImages={setGeneratedImages} handlesubmit1={handlesubmit1}
  prompt={prompt}
  setPrompt={setPrompt}
  isLoading={isLoading} />} />
  <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/variations' element={<ImageVariation/>}/>
</Routes>
    </div>
  );
}

export default App;
