# 🎓 BNU FENG Student Activities Portal

A beautiful, modern, mobile-friendly website built to showcase the student activities, competitions, and achievements of the **Faculty of Engineering (FENG)** at **Benha National University**.

> **Live Site:** Deployed on [Vercel](https://vercel.com/) — every push to `main` auto-deploys.

---

## 📸 What Does This Website Do?

It's a digital portfolio that organizes all student activities into **four categories**:

| Category | What it shows |
|----------|--------------|
| 🛠️ **Technical & Art Competitions** | Hackathons, robotics competitions, AI projects |
| 🏆 **Sports & Individual Achievements** | Karate, judo championships, coaching achievements |
| 📚 **Seminars & Scientific Courses** | Workshops, IEEE sessions, Science Day events |
| 🚀 **Entrepreneurship & Innovation** | Enactus, startup projects, social enterprises |

Each activity is a **clickable card** on the homepage. Clicking it opens a **detailed project page** with the full story, images, achievements, team members, and more.

---

## 🧰 Tech Stack (What Tools We Used)

If you've never built a website before, here's what each tool does:

| Tool | What It Is | Why We Use It |
|------|-----------|---------------|
| **React** | A JavaScript library for building user interfaces | Lets us build the website as reusable "components" (like LEGO bricks) |
| **Vite** | A super-fast build tool | Makes the development server start instantly and reloads changes in real-time |
| **React Router** | A navigation library for React | Lets us have multiple "pages" (Home, Project Details) without reloading the browser |
| **Vanilla CSS** | Plain CSS, no frameworks | Maximum control over the design — we write every style by hand |
| **Material Icons** | Google's free icon set | Gives us beautiful icons (🏆, 🔧, 📅, etc.) without downloading images |
| **Vercel** | A hosting platform | Automatically deploys our website every time we push code to GitHub |

---

## 📁 Project Structure (Where Everything Lives)

```
bnu_act/
├── index.html              ← The single HTML page (React renders inside <div id="root">)
├── package.json            ← Lists all dependencies and scripts
├── vite.config.js          ← Vite configuration (very minimal)
├── vercel.json             ← Tells Vercel to route all URLs to index.html (for React Router)
│
├── public/                 ← Static files (images, logos) — directly accessible via URL
│   ├── bnu.png             ← University logo (shown in navbar)
│   ├── samu_screenshot.png ← Project images
│   ├── team_samu.jpeg      ← Team photos
│   ├── infinity.jpeg       ← Ahmed Hany's team photo
│   └── ...                 ← All other images
│
└── src/                    ← All the source code lives here
    ├── main.jsx            ← Entry point — mounts <App /> into the HTML
    ├── App.jsx             ← Sets up routing (which URL shows which page)
    ├── data.js             ← ⭐ THE MAIN DATA FILE — all projects/activities defined here
    ├── index.css           ← ⭐ ALL the styling — colors, animations, layouts, responsive design
    │
    ├── components/         ← Reusable UI building blocks
    │   ├── Navbar.jsx      ← Top navigation bar + mobile bottom tab bar
    │   ├── Hero.jsx        ← The big welcome section at the top of the homepage
    │   ├── ActivityCard.jsx ← The clickable card shown for each activity on the homepage
    │   └── ProjectCard.jsx ← An alternative card component (used for simple cards)
    │
    └── pages/              ← Full pages
        ├── Home.jsx        ← The homepage — shows all categories and their activity cards
        └── ProjectDetails.jsx ← The detailed view when you click on an activity card
```

---

## 🚀 How to Run This Project Locally

### Prerequisites (Things You Need Installed)

1. **Node.js** (version 18 or higher) — [Download here](https://nodejs.org/)
   - To check if you have it: open a terminal and type `node -v`
2. **Git** — [Download here](https://git-scm.com/)
   - To check: `git --version`

### Step-by-Step

```bash
# 1. Clone the repository (download the code)
git clone https://github.com/moatazmohamedcr852-png/bnu-feng-activities.git

# 2. Go into the project folder
cd bnu-feng-activities

# 3. Install all the dependencies (React, Vite, React Router, etc.)
npm install

# 4. Start the development server
npm run dev
```

After step 4, you'll see something like:
```
  VITE v8.0.12  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

**Open that URL in your browser** and you'll see the website! 🎉

> **Hot Reloading:** Any changes you make to the code will instantly appear in the browser — no need to refresh!

---

## 📝 How to Add a New Activity/Project

This is the most important section. **You only need to edit ONE file**: `src/data.js`.

### Step 1: Open `src/data.js`

This file contains an array called `projectsData`. Each object in the array is one activity/project.

### Step 2: Add a New Object

Copy this template and add it to the array (before the closing `];`):

```javascript
{
  id: "my-project",                    // Unique ID (used in the URL: /project/my-project)
  category: "technical",               // One of: "technical", "sports", "seminars", "entrepreneurship"
  title: "My Amazing Project",         // The name shown on the card and details page
  description: "A short summary...",   // Shown on the card AND the details page info box
  story: "The full story...",          // Shown in "The Story" section on the details page
  image: "/my_image.jpeg",            // Main image (put the file in /public/ folder)
  teamPhoto: "/team_photo.jpeg",      // Team photo (also in /public/)
  badgeText: "Hackathon",             // Small label on the card (e.g., "Competition", "Workshop")
  badgeClass: "badge-competition",     // CSS class for badge color
  achievement: "1st Place",           // Main achievement (shown with 🏆 icon)
  competition: "Event Name",          // Event/competition name
  organizer: "Who organized it",      // Organizer name
  date: "Jan 1, 2026",               // Date of the event
  teamMembers: [                      // List of team member names
    "Person 1", "Person 2", "Person 3"
  ]
}
```

### Step 3: Add Your Image

1. Put your image file in the `public/` folder
2. Use the filename (with leading `/`) as the `image` value
3. Example: if your file is `public/my_cool_project.png`, use `image: "/my_cool_project.png"`

### That's It!

Save the file, and the new activity automatically appears on the website.

---

## 🎨 Understanding the Data Fields

Here is every single field you can use, and what it does:

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | **Unique identifier.** Used in the URL. Use lowercase with hyphens (e.g., `"smart-guide"`) |
| `category` | String | **Which section it appears in.** Must be one of: `"technical"`, `"sports"`, `"seminars"`, `"entrepreneurship"` |
| `title` | String | **The project name.** Shown as the big title on cards and the details page |
| `description` | String | **Short summary.** Shown on the card preview and in the "Project Information" box |

### Optional Fields (Use What You Need)

| Field | Type | Where It Shows Up |
|-------|------|-------------------|
| `story` | String | "The Story" section on the details page |
| `extraStory` | String | Additional paragraph below the main story |
| `image` | String | Main image on the card AND the details page |
| `extraImage` | String | Second image on the details page |
| `teamPhoto` | String | Small photo in the card header + details header |
| `teamLogo` | String | Team logo in the card header (used instead of teamPhoto for organizations) |
| `badgeText` | String | Small colored label on the card (e.g., "Hackathon", "Workshop") |
| `badgeClass` | String | CSS class for badge styling (see table below) |
| `achievement` | String | Primary achievement (shown with 🏆 trophy icon) |
| `extraAchievement` | String | Secondary achievement (shown with ⭐ icon) |
| `competition` | String | Event name (shown with 🏆 icon in Details sidebar) |
| `extraCompetition` | String | Second event name (shown with ⭐ icon in Details sidebar) |
| `organizer` | String | Who organized the event (shown with 🏢 icon) |
| `extraOrganizer` | String | Second organizer |
| `date` | String | Event date (shown with 📅 icon) |
| `extraDate` | String | Second date |
| `teamMembers` | Array | List of names shown in the "Team Members" section |
| `imageFit` | String | Set to `"contain"` to prevent image cropping (default is `"cover"`) |
| `parentId` | String | Set to the `id` of a parent project to nest under it (used for Enactus sub-projects) |

### Badge Classes (Colors)

| Class | Use For |
|-------|---------|
| `badge-hackathon` | Hackathons |
| `badge-competition` | Competitions & awards |
| `badge-sports` | Sports achievements |
| `badge-seminar` | Workshops & seminars |
| `badge-innovation` | Entrepreneurship & startups |

---

## 🏗️ How the Code Works (Architecture)

Here's how the pieces fit together, explained from scratch:

### 1. `index.html` — The Starting Point

Every website starts with an HTML file. Ours is minimal:
```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```
That's it. React will inject the entire website into that `<div id="root">`.

### 2. `main.jsx` — The Entry Gate

This file tells React: "Take the `<App />` component and render it inside the `#root` div."

### 3. `App.jsx` — The Traffic Controller

This is where **routing** happens. It says:
- If the URL is `/` → show the `<Home />` page
- If the URL is `/project/samu` → show `<ProjectDetails />` for SAMU
- The `<Navbar />` always appears at the top (and bottom on mobile)

### 4. `data.js` — The Brain

This is where ALL the project information lives. It's just a big JavaScript array of objects. **You never need to touch the code components to add new projects — just add data here.**

### 5. `Home.jsx` — The Homepage

This page:
1. Reads all projects from `data.js`
2. Groups them by category (`technical`, `sports`, `seminars`, `entrepreneurship`)
3. Renders a section for each category with a header and a grid of cards
4. Uses `IntersectionObserver` to animate cards as they scroll into view

### 6. `ActivityCard.jsx` — The Clickable Card

Each activity is shown as a card with:
- An image (if provided)
- A badge label
- The title
- A short description
- A "Open Project" button

Clicking the card navigates to `/project/{id}`.

### 7. `ProjectDetails.jsx` — The Full Details Page

When you click a card, this page shows:
- Full-size image
- Team photo and logo
- "The Story" section
- "Project Information" box with the description and achievements
- "Details" sidebar with event, organizer, and date info
- "Team Members" section with avatars

### 8. `Navbar.jsx` — Navigation

On **desktop**: A top navigation bar with links to each category section.
On **mobile**: The top bar shows only the logo. A **bottom tab bar** appears (like Instagram or any mobile app) with icons for each category.

### 9. `index.css` — The Design System

This single CSS file controls the **entire look** of the website:
- Color palette (blue & white theme)
- Typography (Inter font from Google Fonts)
- 3D card hover effects
- Glassmorphism (frosted glass) on the navbar
- Responsive design for mobile, tablet, and desktop
- Animations (fade-in on scroll, hover effects)

---

## 📱 Mobile Design Features

The website has a custom mobile-first design:

| Feature | How It Works |
|---------|-------------|
| **Bottom Tab Bar** | 4-icon navigation bar fixed at the bottom of the screen (like Instagram) |
| **Hidden Top Nav Links** | The text links in the top bar are hidden; replaced by the bottom bar |
| **Single Column Layout** | Cards stack vertically on phones |
| **No 3D Tilt** | The heavy 3D card rotation is disabled on touch devices for performance |
| **Smaller Typography** | Hero title and descriptions scale down to fit smaller screens |
| **Touch-Friendly Targets** | All buttons and links are large enough to tap easily |

---

## 🌐 How Deployment Works (Vercel)

This project is deployed on **Vercel** (a free hosting platform). Here's how it works:

1. You push code to the `main` branch on GitHub
2. Vercel detects the push automatically
3. Vercel runs `npm run build` (which creates optimized files in the `dist/` folder)
4. Vercel serves those files to the world
5. Your website is live in ~30 seconds! 🎉

### The `vercel.json` File

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel: "No matter what URL the user visits (like `/project/samu`), always serve `index.html`." This is needed because React Router handles the routing on the client side, not the server.

---

## 🖼️ How to Add Images

1. **Get your image file** (`.jpg`, `.jpeg`, `.png`, etc.)
2. **Put it in the `public/` folder** at the project root
3. **Reference it in `data.js`** with a leading `/`:
   ```javascript
   image: "/my_image.jpeg"
   ```
4. That's it! The image is now accessible at `https://your-site.vercel.app/my_image.jpeg`

### Image Tips
- **Naming:** Use lowercase with underscores, no spaces (e.g., `team_photo.jpeg`, NOT `Team Photo.jpeg`)
- **Size:** Try to keep images under 500KB for fast loading
- **Format:** `.jpeg` and `.png` work great. `.webp` is even better for performance
- **Aspect Ratio:** Images in the card grid are displayed at 220px height and will be cropped to fill. If you don't want cropping, set `imageFit: "contain"` in your data

---

## 🔧 Common Tasks

### Push Changes to GitHub (and auto-deploy)

```bash
git add .
git commit -m "Describe what you changed"
git push
```

### Build for Production (optional — Vercel does this automatically)

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Preview the Production Build Locally

```bash
npm run preview
```

---

## 🎨 Customizing the Design

### Changing Colors

Open `src/index.css` and modify the CSS variables at the top:

```css
:root {
  --primary: #0052cc;          /* Main blue color */
  --primary-dark: #003d99;     /* Darker blue */
  --primary-light: #4c8bf5;    /* Lighter blue */
  --primary-very-light: #e6f0ff; /* Very light blue (backgrounds) */
  --bg-main: #f8fafc;          /* Page background */
  --bg-card: #ffffff;          /* Card background */
}
```

Change these values and the **entire website** updates instantly.

### Changing Fonts

The font is loaded in `index.css` line 1:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

To use a different font:
1. Go to [Google Fonts](https://fonts.google.com/)
2. Pick a font and copy the import URL
3. Replace the import in `index.css`
4. Update `font-family` in the `body` rule

---

## ❓ FAQ

### "I added a new project but it doesn't show up!"
- Make sure you added it inside the `projectsData` array (between `[` and `]`)
- Make sure the `category` field matches one of: `"technical"`, `"sports"`, `"seminars"`, `"entrepreneurship"`
- Check for missing commas between objects

### "My image doesn't load!"
- Make sure the file is in the `public/` folder (NOT `src/`)
- Make sure the filename in `data.js` matches exactly (case-sensitive!)
- Make sure the path starts with `/` (e.g., `/my_image.jpeg`)

### "The website works locally but shows a blank page on Vercel!"
- Make sure `vercel.json` exists with the rewrite rules
- Make sure you pushed all files to GitHub

### "How do I add a new category?"
1. Add a new section in `Home.jsx` (copy an existing `<section>` block)
2. Use a new category name in your data (e.g., `category: "arts"`)
3. Add a new filter: `getProjectsByCategory('arts')`
4. Add a new nav link in `Navbar.jsx`

---

## 👥 Credits

Built for the **Faculty of Engineering (FENG)** at **Benha National University** to document and celebrate student achievements.

---

## 📜 License

This project is private and maintained by the FENG student activities team.
