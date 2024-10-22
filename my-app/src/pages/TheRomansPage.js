import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//imported hooks 
import './TheRomansPage.css';

// TheRomansPage component represents a page about the Romans with a video and a message input field.
function TheRomansPage() {
    // useState hook to manage the state of the message input field.
  const [message, setMessage] = useState('');
    // useNavigate hook from react-router-dom to programmatically navigate to different routes.
  const navigate = useNavigate();

    // Function to handle the send message button click event.
  // Logs the message to the console and navigates to the '/chatbot' route and inputs message into chatbot field
  const handleSendMessage = () => {
    console.log('Sending message:', message);
    //when chatbot page is opened, message has been navigated to the input bar already
    navigate(`/chatbot?message=${encodeURIComponent(message)}`);
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
<div className="the-romans-page">
<div className="back-symbol" onClick={handleBackClick}>{'<'}</div>
      <h1 className='RomansTitle'>The Romans</h1>
      <p>Take off into Roman history! Discover their incredible inventions, legendary battles, and what life was like for Roman children. 
      Get ready for a cosmic adventure through time!</p>
      <div className="video-container">
        {/* Video element to display a video about the Romans */}
        <video width="320" height="240" controls>
          <source src="/romans-video.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="input-container">
        {/* Input field to enter a message */}
        <input className='inputButton'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question"
        />
      </div>
        {/* Button to send the message to the chat bot */}
        <button className="submitButton" onClick={handleSendMessage}>Chat with StudyBuddy</button>
        <img className='planetImage' width="300" src="/planet2.png" alt="planet" />
      
    </div>
  );
}

export default TheRomansPage;