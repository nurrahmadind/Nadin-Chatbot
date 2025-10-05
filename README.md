# 🤖 Welcome to Your Lovable x Gemini AI Chatbot Project

Build your own intelligent and lovable chatbot powered by **Gemini AI** — all within the **Lovable** low-code platform!  
This project combines **Vite**, **React**, and **TypeScript** with **shadcn-ui** and **Tailwind CSS** to create a fast, elegant, and smart conversational experience. 💬✨

---

## 🌐 Project Info

**Live URL:** [Visit Your Project](https://lovable.dev/projects/f2ef6581-ef92-4d38-b86e-8c2fecd3440a)  
**Platform:** [Lovable.dev](https://lovable.dev)  
**Tech Stack:**  
🧩 Vite • ⚛️ React • 💎 TypeScript • 🎨 Tailwind CSS • 🪄 shadcn-ui

---

## 🧠 What is This Project?

This is your **Lovable AI chatbot**, seamlessly integrated with **Google Gemini API** to generate natural, context-aware responses.  
You can use it as:
- 🗣️ An intelligent assistant on your website  
- 🎓 A student project for learning about LLM integration  
- 💼 A base for your next AI product  

---

## 🛠️ How to Edit Your Chatbot

You have multiple ways to develop and customize your bot:

### 🧡 Option 1: Use Lovable (No-Code)
Simply open your project in Lovable and start prompting!  
All your changes are auto-saved and committed.

👉 [Open in Lovable](https://lovable.dev/projects/f2ef6581-ef92-4d38-b86e-8c2fecd3440a)

---

### 💻 Option 2: Work Locally via Your IDE

If you prefer coding in VS Code or another editor, follow these steps:

```bash
# 1️⃣ Clone the repository
git clone <YOUR_GIT_URL>

# 2️⃣ Enter the project folder
cd <YOUR_PROJECT_NAME>

# 3️⃣ Install dependencies
npm i

# 4️⃣ Start the development server
npm run dev

# 🧑‍💻 Option 3: Edit Directly on GitHub

Open the file you want to edit.

Click the ✏️ (pencil) icon in the top right corner.

Make your changes and commit directly.

🪄 Option 4: Use GitHub Codespaces

Want a cloud dev environment? Use Codespaces:

Go to your repo → click Code → Codespaces tab.

Launch New Codespace.

Edit, preview, and commit — all in your browser! 🌥️

🚀 Deployment

Publishing your project is easy:

Open it in Lovable.

Click Share → Publish.

Your chatbot will go live instantly!

🌍 Custom Domain Setup

Make your chatbot look professional with a custom domain:

Go to Project → Settings → Domains

Click Connect Domain

Follow the setup guide here:
🔗 Custom Domain Setup Docs

💡 Tips for Integrating Gemini AI

To connect your chatbot with Gemini API, use your API key and send user input as a POST request to:

https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=YOUR_API_KEY


Example JSON payload:

{
  "contents": [
    {
      "role": "user",
      "parts": [{ "text": "Hello Gemini, tell me something interesting!" }]
    }
  ]
}

❤️ Credits Dinda Nurahma
