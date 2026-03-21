function makeLink(label, href, className) {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  if (!href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  link.textContent = label;
  return link;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node && value) {
    node.textContent = value;
  }
}

function normalizeTopics(topics) {
  if (!topics) {
    return [];
  }

  if (Array.isArray(topics)) {
    return topics.filter(Boolean);
  }

  if (typeof topics === "string") {
    return topics
      .split(",")
      .map((topic) => topic.trim())
      .filter(Boolean);
  }

  return [];
}

function formatMonthYear(value) {
  if (!value) {
    return "Recently updated";
  }

  const date = new Date(value);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(date);
}

function renderFeaturedProjects(config) {
  const container = document.getElementById("featured-projects");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  config.featuredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const tags = (project.tags || [])
      .map((tag) => `<li class="tag">${tag}</li>`)
      .join("");

    const liveLink = project.liveUrl
      ? `<a class="project-link" href="${project.liveUrl}" target="_blank" rel="noreferrer">${project.liveLabel || "Live Project"}</a>`
      : "";

    card.innerHTML = `
      <div class="card-topline">
        <span class="card-kicker">Featured</span>
        <span class="card-language">${project.language || "Project"}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-text">${project.description}</p>
      <ul class="tag-list">${tags}</ul>
      <div class="link-row">
        <a class="project-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">View Code</a>
        ${liveLink}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderRepoCard(repo) {
  const card = document.createElement("article");
  card.className = "repo-card";

  const language = escapeHtml(repo.language || "Repository");
  const description = escapeHtml(repo.description || "Public project on GitHub.");
  const name = escapeHtml(repo.name);
  const htmlUrl = escapeHtml(repo.html_url);
  const stars = repo.stargazers_count || 0;
  const homepage = repo.homepage || "";
  const topics = normalizeTopics(repo.topics).slice(0, 4);
  const topicMarkup = topics.length
    ? `<ul class="tag-list">${topics.map((topic) => `<li class="tag">${escapeHtml(topic)}</li>`).join("")}</ul>`
    : "";
  const liveLink = homepage
    ? `<a class="repo-link" href="${escapeHtml(homepage)}" target="_blank" rel="noreferrer">Live Link</a>`
    : "";

  card.innerHTML = `
    <div class="card-topline">
      <span class="card-kicker">Repository</span>
      <span class="card-language">${language}</span>
    </div>
    <h3>${name}</h3>
    <p class="repo-text">${description}</p>
    ${topicMarkup}
    <div class="repo-meta">
      <span>Updated ${formatMonthYear(repo.updated_at)}</span>
      <span>${stars} stars</span>
    </div>
    <div class="link-row">
      <a class="repo-link" href="${htmlUrl}" target="_blank" rel="noreferrer">Repository</a>
      ${liveLink}
    </div>
  `;

  return card;
}

function renderRepoList(container, repos) {
  container.innerHTML = "";

  if (!repos.length) {
    container.innerHTML = `
      <article class="repo-card repo-card-empty">
        <p>No public repositories to show yet.</p>
      </article>
    `;
    return;
  }

  repos.forEach((repo) => {
    container.appendChild(renderRepoCard(repo));
  });
}

async function loadRepoFeed(config) {
  const container = document.getElementById("repo-feed");
  if (!container) {
    return;
  }

  const configuredRepos = config.publicRepos || [];
  renderRepoList(container, configuredRepos);

  const configuredByName = new Map(
    configuredRepos.map((repo) => [repo.name, repo])
  );

  try {
    const response = await fetch(
      `https://api.github.com/users/${config.repoFeed.username}/repos?sort=updated&per_page=100`
    );

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const repos = await response.json();
    const visibleRepos = repos
      .filter((repo) => !repo.fork)
      .slice(0, config.repoFeed.limit)
      .map((repo) => {
        const fallback = configuredByName.get(repo.name) || {};
        return {
          ...fallback,
          ...repo,
          description: repo.description || fallback.description || "",
          homepage: repo.homepage || fallback.homepage || "",
          language: repo.language || fallback.language || "",
          topics: repo.topics || fallback.topics || []
        };
      });

    renderRepoList(container, visibleRepos);
  } catch (error) {
    // Keep the static repo list from the local config if GitHub is unavailable.
  }
}

function bootstrapPortfolio() {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    return;
  }

  document.title = config.site.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", config.site.description);
  }

  setText("profile-name", config.profile.name);
  setText("profile-title", config.profile.title);
  setText("profile-bio", config.profile.bio);
  setText("profile-intro", config.profile.intro);
  setText("profile-location", config.profile.location);
  setText("profile-repo-count", String(config.profile.repoCount));
  setText("profile-focus", config.profile.focus);
  setText("profile-highlight", config.profile.highlight);
  setText("featured-summary", config.featuredSummary);
  setText("repo-feed-summary", config.repoFeedSummary);
  setText("footer-note", config.profile.footerNote);

  const avatar = document.getElementById("profile-avatar");
  if (avatar) {
    avatar.src = config.profile.avatarUrl;
    avatar.alt = `${config.profile.name} profile photo`;
  }

  const heroLinks = document.getElementById("hero-links");
  if (heroLinks) {
    heroLinks.innerHTML = "";
    heroLinks.appendChild(makeLink("GitHub", config.profile.githubUrl, "button-link primary"));
    heroLinks.appendChild(makeLink("LinkedIn", config.profile.linkedinUrl, "button-link secondary"));
    heroLinks.appendChild(makeLink("Email", `mailto:${config.profile.email}`, "button-link secondary"));
  }

  const footerLink = document.getElementById("footer-github-link");
  if (footerLink) {
    footerLink.href = config.profile.githubUrl;
  }

  renderFeaturedProjects(config);
  loadRepoFeed(config);
}

document.addEventListener("DOMContentLoaded", bootstrapPortfolio);
