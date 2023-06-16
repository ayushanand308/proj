import React from 'react';

const Output = ({ messages }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      {messages.map((message, index) => (
        <div key={index} className="message">
          {message.role === 'assistant' ? (
            <p>{message.text}</p>
          ) : (
            <p>{message.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Output;
