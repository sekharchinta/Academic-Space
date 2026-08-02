# Academic Space 🎓

A modern, multi-page e-learning platform with 13 curated courses, 25 video lessons, and 130 quiz questions — built with plain HTML, CSS, and JavaScript. No frameworks, no build step, no backend.

![Pages](https://img.shields.io/badge/pages-static--site-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Home page** — learning-motivation hero, animated stats, "How It Works" steps, and featured courses.
- **Course catalog** — live search, category filters, and progress tracking on every card.
- **Course detail** — embedded YouTube lessons, per-lesson "Mark as Complete" progress, and a link to the quiz.
- **Quizzes** — 130 questions across 13 courses with scoring, an animated score ring, and full answer review.
- **Progress persistence** — completion state is saved in the browser via `localStorage`.
- **Dark professional theme** — blue/cyan gradient accents with a polished responsive layout.

## 📄 Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Home / motivation |
| `courses.html` | Course catalog with search + filters |
| `course.html?id=N` | Course detail with lessons & progress (`N` = course id) |
| `quiz.html?id=N` | Quiz for a course, with results & review |

## 🚀 Run Locally

Just open the files in a browser:

1. Clone the repo:
   ```bash
   git clone https://github.com/sekharchinta/Academic-Space.git
   cd Academic-Space
   ```
2. Open `index.html` in your browser.

Or serve it with a local server (recommended):
```bash
# Python
python -m http.server 8000
# or Node
npx serve .
```
Then visit `http://localhost:8000`.

## 🗂️ Project Structure

```
Academic-Space/
├── index.html      # Home page
├── courses.html    # Course catalog
├── course.html     # Course detail (uses ?id=N)
├── quiz.html       # Quiz page (uses ?id=N)
├── style.css       # Dark theme stylesheet
├── main.js         # Page-aware application logic
└── courses.js      # Course, lesson & quiz data
```

## ☁️ Deployment (GitHub Pages)

The site is fully static and ready for GitHub Pages:

1. Go to **Settings → Pages** in the repo.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then click **Save**.
4. Your site will be live at:
   `https://sekharchinta.github.io/Academic-Space/`

Every push to `main` redeploys automatically.

## 🛠️ Tech Stack

- HTML5, CSS3 (custom properties, flexbox/grid, animations)
- Vanilla JavaScript (DOM APIs, `IntersectionObserver`, `localStorage`)
- YouTube embedded videos
- Google Fonts (Poppins)

## 📬 Contact

- Email: [sekharchinta160@gmail.com](mailto:sekharchinta160@gmail.com)
- Phone: (+91) 8074082576

## 📄 License

This project is for educational purposes.
