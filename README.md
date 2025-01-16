# Project Name

Multilingual Chat App Powered By Mistral AI

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Results](#results)


## About

This AI-Powered Multilingual Chat Application aims to deliver real-time communication with built-in language translation and sentiment analysis features using Mistral AI’s language models. The application will enable users to chat in different languages, automatically detecting and translating messages, while also displaying sentiment analysis alongside conversations. This project leverages the Mistral AI SDK for seamless integration of the language models to support translation and sentiment analysis functionalities.

Tech Stack:

Frontend: Next.js with React, providing a responsive and user-friendly interface for the chat application.
Backend: Python with FastAPI, ensuring fast and efficient handling of user requests, language translations, and sentiment analysis.
SDK Integration: Mistral AI’s public API, to integrate real-time translations and sentiment analysis into the application.

### Features
- Real-time Chat with Automatic Translation: Detects the user's language and translates messages in real-time to provide seamless communication between users speaking different languages.
- Sentiment Analysis: Provides sentiment insights alongside each message to analyze the emotional tone of conversations.
- Attractive UI for effective chatting.

## Installation

### Steps

1. Clone this repository to your local machine.
2. Install the required dependencies using
     cd backend
     pip install -r requirements.txt
3. Obtain an API key from Mistral AI (Sign up on their platform and get the public API key).
4. Create a `.env` file in the root of the backend directory and add the following line:
     MISTRAL_API_KEY=your_mistral_api_key_here
5. Open any terminal and run the FastAPI service on the root folder
      uvicorn backend.main:app --reload
6. Open another terminal and run the UI
      cd frontend/
      npm run dev
7. Open the  link : http://localhost:3001/ and start using the chat application


## Results

![Screenshot 2025-01-16 022503](https://github.com/user-attachments/assets/9377ae70-d5ab-4c7e-9ed1-bcafdc9776e9)

![Screenshot 2025-01-16 022509](https://github.com/user-attachments/assets/8bbdb34a-85a8-450e-810a-bdc44da56f47)  

![Screenshot 2025-01-16 022918](https://github.com/user-attachments/assets/d23475ac-8626-46c7-b26a-b4fd18771c88)

![Screenshot 2025-01-16 023031](https://github.com/user-attachments/assets/f6571f80-c44f-43a1-a32e-03e281b9dbea)
