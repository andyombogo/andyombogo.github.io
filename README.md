# Portfolio Starter

A lightweight GitHub Pages portfolio for John Andrew. The structure is intentionally simple:

- `index.html` holds the layout.
- `styles.css` handles the visual design.
- `portfolio.config.js` contains the profile details and featured projects.
- `script.js` renders the content and loads extra repos from the GitHub API.

## Customize Content

Edit `portfolio.config.js` when you want to change:

- your bio and intro text
- links like GitHub, LinkedIn, and email
- featured projects
- how many extra repos appear in the live GitHub feed

## Preview Locally

If you want to preview it before pushing:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish On GitHub Pages

1. Create a repository for the site, for example `portfolio` or `andyombogo.github.io`.
2. Push these files to the repository.
3. In GitHub, open `Settings` -> `Pages`.
4. Set the source to `Deploy from a branch`.
5. Choose `main` and `/ (root)`.

If you publish from a normal repo named `portfolio`, the URL will look like:

```text
https://andyombogo.github.io/portfolio/
```

If you publish from `andyombogo.github.io`, the URL will be:

```text
https://andyombogo.github.io/
```
