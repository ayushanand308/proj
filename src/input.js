import React, { useState } from "react";

const InputForm = () => {
  const [value, setValue] = useState("");

  const generateOutput = async () => {
    const options={
        method:"POST",
        body:JSON.stringify({
            message:value,
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }

    try {
      const response = await fetch('http://localhost:8000/completions', options);
      const data = await response.json();
      console.log(data)
      console.log(data.choices[0].message);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await generateOutput();
      setValue("");
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        id="message-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your message"
        className="w-md px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </form>
  );
};

export default InputForm;

