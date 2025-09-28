🌐 My Personal Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and utilizing Contentful as my headless CMS to dynamically serve data to my app.
It was built with a social media type of vibe in mind and it showcases featured projects, blog posts, and an about me section with a clean and optimized design.


🚀 Features

Responsive Design: Optimized for mobile, tablet, and desktop.

Sidebar Navigation: Mobile-friendly with smooth transitions.

Dynamic Content: Projects and blog posts are fetched from Contentful.

SEO Ready: Meta tags and Open Graph support for better visibility.

Blog System: Lists recent articles and allows deep linking to full blog posts.

Project Showcase: Displays featured projects with links to deployed versions and GitHub repos.

🛠️ Tech Stack

Frontend: Next.js 15 with React

Styling: Tailwind CSS

Icons: React-Icons

CMS: Contentful

Deployment: Vercel

⚙️ Setup & Installation

Clone the repo

git clone https://github.com/Emzee-Creates/portfolio.git
cd portfolio


Install dependencies

npm install


Setup environment variables
Create a .env.local file in the root directory:

CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token


Run locally

npm run dev


App runs on 👉 http://localhost:3000

Build for production

npm run build
npm start

📖 Content Management

All projects and blog posts are managed via Contentful:

Projects (Content Type: portfolio)

Title

Description

Image

Tech Stack

GitHub Link

Live Link

Created Date



Blog Posts (Content Type: blogPost)

Title

Slug

Date

Excerpt

Cover Image

Content (Rich Text)



🌍 Deployment

This app is deployed using Vercel:

Push your repo to GitHub.

Import into Vercel.

Add environment variables in Vercel dashboard.

Deploy 🚀

👤 Author

Emoruwa Emmanuel

GitHub: Emzee-Creates

LinkedIn: Profile

Twitter/X: @skinny_zee_

📜 License

This project is licensed under the MIT License — feel free to use and adapt it.