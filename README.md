# 📹 Google Meet Clone

A real-time video conferencing web application that allows users to **create and join video meetings**, **chat with participants**, and **collaboratively draw on a whiteboard** in real time. Built using Node.js, Express.js, Passport.js for authentication, WebRTC for peer-to-peer video/audio streaming, and Socket.io for signaling and real-time communication. Styled with CSS for a clean UI.

---

## ✅ Features
- 🔐 **User authentication** using **Google OAuth 2.0**
- 🆕 **Create a new meeting room**
- 🔗 **Join an existing meeting room** using a Room ID
- 🎥 **Video conferencing** with real-time audio and video streams
- 🎤 **Mute/Unmute audio** during the meeting
- 📷 **Start/Stop video** anytime
- 💬 **Chat functionality** to send messages to participants
- 🖌️ **Whiteboard feature** for collaborative drawing

---

## 🛠 Technologies Used
- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Authentication**: Passport.js with Google OAuth 2.0 API
- **Video Streaming**: Peer.js (built on WebRTC)
- **Frontend**: HTML, CSS, JavaScript

---

## ⚙️ Getting Started

### ✅ Prerequisites
- Node.js installed on your system
- Google OAuth 2.0 credentials

---

### ✅ Installation

1. **Clone the repository:**
 
Install the dependencies:
```
npm install
```

Set up Google OAuth credentials:
- Create a project in the Google Developers Console (https://console.developers.google.com/)
- Enable the Google OAuth 2.0 API and get the client ID and client secret
- Replace the placeholders for GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server.js with your actual credentials

## Usage

Start the server:
```
npm start
```

Open your web browser and navigate to:
```
http://localhost:3000
```

You will be redirected to the login page. Click on the "Sign in with Google" button to authenticate with your Google account.

After successful authentication, you will be redirected to the home page.

To start a new meeting, click on the "New Meeting" button.

To join an existing meeting, enter the Room ID provided by the host in the "Enter Room ID" input field and click on the "Join Room" button.

In the meeting room, you can mute/unmute your audio, stop/start your video, and use the chat feature to communicate with other participants.

To leave the meeting, click on the "Leave" button or close the browser tab.

