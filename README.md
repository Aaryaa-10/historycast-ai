# HistoryCast AI

HistoryCast AI is an AI-powered web application that generates engaging debates between historical figures on modern-day topics. Users can select multiple historical personalities, enter a debate topic, and let Google's Gemini AI generate a realistic discussion. Every debate is stored in a database for future viewing and can be replayed using speech synthesis.

---

## Features

* Generate AI-powered debates using Google Gemini
* Select multiple historical figures for a discussion
* AI moderator to introduce and guide the debate
* Save debates for future viewing
* Browse complete debate history
* View individual debate transcripts
* Delete saved debates
* Play individual speeches using speech synthesis
* Play the complete debate sequentially
* Responsive user interface
* Loading skeletons and loading indicators
* Toast notifications for user feedback

---

## Tech Stack

### Frontend

* Next.js 15 (App Router)
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Prisma ORM
* Google Gemini API

### Database

* PostgreSQL

### Libraries

* Lucide React
* Sonner
* Web Speech API

---

## Live Demo

Deployment link will be added after deployment.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/historycast-ai.git
```

Navigate into the project:

```bash
cd historycast-ai
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
DATABASE_URL="YOUR_DATABASE_URL"

GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## Project Structure

```text
historycast-ai/
│
├── app/
│   ├── api/
│   ├── history/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
├── data/
├── lib/
├── prisma/
├── services/
├── types/
├── public/
│
├── README.md
└── package.json
```

---

## How It Works

1. Enter a debate topic.
2. Select two or more historical figures.
3. Submit the request.
4. Google Gemini generates a debate between the selected figures.
5. The transcript is stored in the database using Prisma.
6. Users can revisit debates from the History page.
7. Speech synthesis allows playback of individual speeches or the complete debate.

---

## Future Improvements

* More realistic AI voice synthesis
* Voice selection for different historical figures
* PDF export for debate transcripts
* Search and filter debate history
* Share debates
* Download transcripts
* Streaming AI responses
* Dark mode

---

## Learning Outcomes

This project provided hands-on experience with:

* Next.js App Router
* TypeScript
* Prisma ORM
* REST API development
* Google Gemini API integration
* PostgreSQL database management
* React state management
* Component-based architecture
* Responsive UI development
* Tailwind CSS
* Error handling
* Loading states
* Speech synthesis

---

## Author

**Arya Amoriya**

GitHub: https://github.com/Aaryaa-10

LinkedIn: https://www.linkedin.com/in/arya-amoriya/

---

## License

This project is licensed under the MIT License.