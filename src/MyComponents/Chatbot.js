import React from 'react';

export default function Chatbot({ streamlitAppUrl }) {
  const openChatbotInNewWindow = () => {
    window.open(streamlitAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="chatbot-button" onClick={openChatbotInNewWindow}>
      Chat with us!
    </div>
  );
}