# AI Based Multilingual Chat Application 

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
- User Creation and login
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

### Login and Registration :

![Screenshot 2025-01-16 104158](https://github.com/user-attachments/assets/150cd127-de5a-4263-bff9-d3a020ca6c10)
![Screenshot 2025-01-16 104206](https://github.com/user-attachments/assets/5b9e663b-abcb-4a69-9fb2-cb50825dc1be)
![Screenshot 2025-01-16 104225](https://github.com/user-attachments/assets/4c6eaff2-fb35-4833-943d-7343e3ef478f)

### Chat Interface : 

![Screenshot 2025-01-16 022503](https://github.com/user-attachments/assets/cb10752c-6fb2-4d18-aff9-3a189e556176)
![Screenshot 2025-01-16 022509](https://github.com/user-attachments/assets/54843d74-ab85-4547-ad3a-285d5532aa4d)
![Screenshot 2025-01-16 022927](https://github.com/user-attachments/assets/1242bd61-3897-4521-a6a8-dd30751401aa)
![Screenshot 2025-01-16 022918](https://github.com/user-attachments/assets/41bf3115-bb53-4c6b-ae1b-853dc8fb3dd9)

