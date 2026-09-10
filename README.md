# Portfolio

A minimal, fast, no-build-step portfolio site. Plain HTML/CSS/JS — no
frameworks, no npm install, no build process. Edit two files to
personalize it, then push to GitHub to publish.

## Editing your content

You only need to touch two files:

- **`config.js`** — your name, role, tagline, about text, and contact links.
- **`projects.js`** — an array of your projects. Copy/paste the object
  pattern to add more, or delete entries you don't need.

Everything else (`index.html`, `style.css`, `script.js`) is the site
shell — you don't need to edit it, but feel free to if you want to
change colors, fonts, or layout. Colors and fonts are defined as CSS
variables at the top of `style.css` under `:root`.

## Preview it locally

Just open `index.html` directly in a browser — no server needed. Or,
if you have Python installed, run this in the project folder for a
local server:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages (free hosting)

1. Create a new repository on GitHub (e.g. `your-portfolio`). Don't
   initialize it with a README — you already have one.
2. In this project folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/your-portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to **Deploy from a
   branch**, branch **main**, folder **/ (root)**. Save.
5. Wait a minute, then your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/your-portfolio/
   ```

### Using it as your main GitHub Pages site

If you'd rather have it live at `https://YOUR-USERNAME.github.io`
(no repo name in the URL), name the repository exactly
`YOUR-USERNAME.github.io` in step 1, and everything else is the same.

## Adding a project later

Open `projects.js` and add a new object to the top of the `PROJECTS`
array:

```js
{
  name: "my-new-project",
  description: "What it does, in a sentence or two.",
  tech: ["Go", "Redis"],
  link: "https://github.com/you/my-new-project",
  demo: "",
  year: "2026"
}
```

Save, commit, and push — GitHub Pages redeploys automatically within
a minute or two:

```
git add projects.js
git commit -m "Add my-new-project"
git push
```

## Custom domain (optional)

In repo **Settings → Pages**, add your domain under "Custom domain"
and follow GitHub's DNS instructions. GitHub will create a `CNAME`
file in your repo automatically.
