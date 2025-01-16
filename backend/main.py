from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from mistralai import Mistral

# Initialize FastAPI
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Load API key from environment variables
MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY")
if not MISTRAL_API_KEY:
    raise ValueError("MISTRAL_API_KEY is not set in environment variables.")

# Initialize Mistral client
client = Mistral(api_key=MISTRAL_API_KEY)

# Pydantic model for incoming chat request
class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: list[ChatMessage]

# Chat API interaction with Mistral
def get_mistral_response(messages):
    try:
        response = client.chat.complete(
            model="mistral-large-latest",
            messages=[{"role": msg.role, "content": msg.content} for msg in messages]
        )
        return response.choices[0].message.content
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"API request failed: {e}")

# API endpoint to send chat messages
@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        response = get_mistral_response(request.messages)
        return {"response": response}
    except HTTPException as e:
        raise e
