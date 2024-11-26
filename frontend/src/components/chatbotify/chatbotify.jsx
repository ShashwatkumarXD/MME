import React, { useState } from 'react';
import ChatBot, { ChatBotProvider } from "react-chatbotify";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyCWilfBRon-Nr5utHlg-EhYD4tb_oXRXUY");

// Function to call the generative AI model
const callGenerativeAI = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text;
};

function Chatbotify() {
  const [userInput, setUserInput] = useState("");

  const flow = {
    start: {
      message: "Hello! I'm your pregnancy assistant. How can I help you today?",
      options: [
        "Are vaccines safe during pregnancy?",
        "What foods should I eat during pregnancy?",
        "How often should I feel baby movements?",
        "Any pregnancy related government schemes in India?"
      ],
      path: "end_loop"
    },
    end_loop: {
      message: async (params) => {
        setUserInput(params.userInput);
        const aiResponse = await callGenerativeAI(params.userInput);  // Call the AI model with the user's input
        return aiResponse;  // Pass the AI response to the chatbot
      },
      path: "end_loop"
    }
  };


  return (
    <div className="p-4 z-0">
      <ChatBotProvider>
        <ChatBot
          id="my-chatbot-id"
          flow={flow}
          floating={true}
          // icon={src="./bg2.png"}
        />
      </ChatBotProvider>
    </div>
  );
}

export default Chatbotify;
