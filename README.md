# 🚀 TestTechStack

A **Fullstack project** built with **NestJS (Backend)** + **Next.js (Frontend)** + **Prisma ORM** + **shadcn/ui** + **Tailwind CSS**.

---

## 📂 Project Structure

```
TestTechStack/
├── backend/     # NestJS API Server
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── ...
│
├── frontend/    # Next.js App with shadcn/ui
│   ├── app/
│   ├── components/
│   ├── package.json
│   └── ...
│
└── README.md
````

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui |
| **Backend** | NestJS, Prisma ORM |
| **Database** | SQLite / PostgreSQL (configurable) |
| **UI Components** | shadcn/ui (Button, Card, Sidebar, Input, etc.) |
| **Package Manager** | npm |

---

## ⚙️ Getting Started

### 🖥️ Clone Repository
```bash
git clone https://github.com/kbtsaharaf/TestTechStack.git
cd TestTechStack
````

---

### ▶️ Run Backend (NestJS)

```bash
cd backend
npm install
npx prisma migrate dev
npm run start:dev
```

Server will run at:

> [http://localhost:3000](http://localhost:3000)

---

### 💻 Run Frontend (Next.js)

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

App will run at:

> [http://localhost:3001](http://localhost:3001)

---

### 🔗 API Endpoints

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | `/users`     | Get all users |
| POST   | `/users`     | Create user   |
| DELETE | `/users/:id` | Delete user   |

---

### 🧩 Features

* ✅ Full CRUD API with NestJS
* ✅ Prisma ORM integrated
* ✅ shadcn/ui styled frontend
* ✅ Sidebar + Button + Input + Card components
* ✅ Responsive layout with Tailwind
* ✅ Monorepo-friendly structure

---

## 🧱 UI Preview

<p align="center">
  <img src="https://github.com/kbtsaharat/TestTechStack/blob/main/Screenshot%202025-10-20%20172112.png?raw=true" alt="App Screenshot" width="800"/>
  <br/>
  <em>Full-stack CRUD app with Sidebar + shadcn/ui + Prisma + PostgreSQL</em>
  <img src="https://github.com/kbtsaharat/TestTechStack/blob/main/Screenshot%202025-10-21%20133902.png?raw=true" alt="App Screenshot" width="800"/>
  <br/>
  <em>Light / Dark Mode</em>
</p>

---

## 🧑‍💻 Author

**Saharath Chanachai**
📧 [Contact via GitHub](https://github.com/kbtsaharat)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).