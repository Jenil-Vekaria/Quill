<!-- INTRO SECTION -->
<p align="center">
    <a href="https://github.com/Jenil-Vekaria/Quill">
        <img src="/src/assets/logo.svg" alt="Quill Logo" width="20%">
    </a>

  <h1 align="center">Quill</h1>

  <p align="center">
   Intelligent note taking app with AI integration
    <br />
    <br />
  </p>
</p>

<!-- FEATURE SECTION -->

## ✨ Overview

Quill is an intelligent note taking app with AI integration built using OpenAI API, vector embedding, and Pinecone. It has a chatbot that knows all about your the notes and can retrieve relevant information to answer your questions

<!-- TECHNOLOGY SECTION -->

## 🛠️Technologies
![]("https://www.svgrepo.com/show/354113/nextjs-icon.svg")
<div float="left" style="gap: 10px">
    <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail-1.png" width="100" height="100" alt="NextJs"/>
    <img src="https://res.cloudinary.com/apideck/image/upload/v1676620595/icons/pinecone-io.png" style="background: white" width="100" height="100" alt="Pinecone"/>
    <img src="https://chatgptaihub.com/wp-content/uploads/2023/06/ChatGPT-logo-with-color-Background.png" width="100" height="100" alt="OpenAI"/>
    <img src="https://cdn.sanity.io/images/o0o2tn5x/production/2399b991025c365aafaa6fca85d91deac801e654-1046x1046.png" style="background: white" width="100" height="100" alt="Clerk"/>
    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1660832060122/RA6O44cVF.jpg" width="100" height="100" alt="NextJs"/>
    <img src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4" width="100" height="100" alt="Prisma"/>
    <div style="text-align: center">
</div>

## 🚀 Quick start

### Step 1: Clone the repo

Fork the repository then clone it locally by doing

```sh
git clone https://github.com/Jenil-Vekaria/Quill.git
```

### Step 2: Install Dependencies

install the dependencies with the following command

```sh
npm install
```

### Step 3: Setup Environmentmal Variables

Create **.env** in the root folder with the following content

```
DATABASE_URL=<MongoDB Connection>

OPENAI_API_KEY=<OpenAI API Key>
PINECONE_API_KEY=<Pinecone API Key>

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Clerk Publishable Key>
CLERK_SECRET_KEY=<Clerk Secret Key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/notes
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/notes
```

Visit the following link to get API keys and connection:

1. MongoDB Connection URL: [MongoDB](https://www.mongodb.com/)
2. OpenAI API Key: [OpenAI](https://openai.com/)
3. Pinecone API Key: [Pinecone](https://www.pinecone.io/)
4. Clerk Key: [Clerk](https://clerk.com/)

### Step 4: You are all setup!

Run the application

```sh
npm run dev
```

## 📸 Screenshots

<div>
  <h3>Home Page</h3>
  <img src="/screenshots/homepage.png"/>
</div>

<div>
  <h3>Authentication</h3>
  <img src="/screenshots/authentication.png"/>
</div>

<div>
  <h3>Notes Page</h3>
  <img src="/screenshots/notes.png"/>
</div>

## Author

- Github: [@Jenil-Vekara](https://github.com/Jenil-Vekaria)
- Portfolio: [Jenil-Vekaria.netlify.app](https://jenil-vekaria.netlify.app/)
- LinkedIn: [@JenilVekaria](https://www.linkedin.com/in/jenilvekaria/)
