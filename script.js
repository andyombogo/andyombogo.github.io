const ICONS = {
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.84-4.57 5.1.36.32.69.95.69 1.93 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M6.94 8.53a1.53 1.53 0 1 1 0-3.06 1.53 1.53 0 0 1 0 3.06ZM5.56 9.78h2.77V18H5.56V9.78Zm4.5 0h2.65v1.12h.04c.37-.7 1.28-1.43 2.63-1.43 2.81 0 3.33 1.91 3.33 4.4V18h-2.76v-3.66c0-.87-.02-1.99-1.17-1.99-1.18 0-1.36.95-1.36 1.93V18h-2.76V9.78Z"/>
      <path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm15 17V4H5v16h14Z"/>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.23-.5L12 10.38 18.77 5H5.23ZM19 6.28l-6.38 5.06a1 1 0 0 1-1.24 0L5 6.28V18.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6.28Z"/>
    </svg>
  `,
  external: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M14 4h6v6h-2V7.41l-7.3 7.3-1.4-1.42 7.29-7.29H14V4ZM6 6h5v2H7.5a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 7.5 18h7a1.5 1.5 0 0 0 1.5-1.5V13h2v3.5A3.5 3.5 0 0 1 14.5 20h-7A3.5 3.5 0 0 1 4 16.5v-7A3.5 3.5 0 0 1 7.5 6H6Z"/>
    </svg>
  `,
  grid: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4 4h7v7H4V4Zm2 2v3h3V6H6Zm7-2h7v7h-7V4Zm2 2v3h3V6h-3ZM4 13h7v7H4v-7Zm2 2v3h3v-3H6Zm7-2h7v7h-7v-7Zm2 2v3h3v-3h-3Z"/>
    </svg>
  `,
  spark: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="m12 2 1.62 5.11L19 8.73l-4.38 3.18L16.24 17 12 13.88 7.76 17l1.62-5.09L5 8.73l5.38-1.62L12 2Z"/>
    </svg>
  `
};

const REPO_TONES = new Set(["blue", "teal", "orange", "ink"]);

let revealObserver;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function iconMarkup(name) {
  return ICONS[name] || ICONS.external;
}

function buildLinkContent(label, icon, detail) {
  const iconBlock = icon
    ? `<span class="link-icon" aria-hidden="true">${iconMarkup(icon)}</span>`
    : "";

  const detailBlock = detail
    ? `<span class="link-detail">${escapeHtml(detail)}</span>`
    : "";

  return `
    ${iconBlock}
    <span class="link-copy">
      <span class="link-label">${escapeHtml(label)}</span>
      ${detailBlock}
    </span>
  `;
}

function makeLink(label, href, className, options = {}) {
  const link = document.createElement("a");
  const iconClass = options.icon ? ` ${className}-${options.icon}` : "";

  link.className = `${className}${iconClass}`;
  link.href = href;
  if (!href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  if (options.icon) {
    link.dataset.icon = options.icon;
  }

  link.innerHTML = buildLinkContent(label, options.icon, options.detail);
  return link;
}

function makeAnchorLink(label, href, className, options = {}) {
  const link = document.createElement("a");
  const iconClass = options.icon ? ` ${className}-${options.icon}` : "";

  link.className = `${className}${iconClass}`;
  link.href = href;

  if (options.icon) {
    link.dataset.icon = options.icon;
  }

  link.innerHTML = buildLinkContent(label, options.icon, options.detail);
  return link;
}

function renderExternalLink(href, label, className, icon) {
  return `
    <a class="${escapeHtml(className)}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">
      ${buildLinkContent(label, icon, "")}
    </a>
  `;
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

function getRevealObserver() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -48px 0px",
        threshold: 0.12
      }
    );
  }

  return revealObserver;
}

function observeRevealTargets(root = document) {
  const targets = root.querySelectorAll(".reveal-target:not([data-reveal-bound])");
  const observer = getRevealObserver();

  targets.forEach((node, index) => {
    node.dataset.revealBound = "true";
    node.style.setProperty("--reveal-delay", `${Math.min(index * 80, 320)}ms`);

    if (observer) {
      observer.observe(node);
    } else {
      node.classList.add("is-visible");
    }
  });
}

function renderFeaturedProjects(config) {
  const container = document.getElementById("featured-projects");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  config.featuredProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = project.spotlight
      ? "case-study case-study-spotlight reveal-target"
      : "case-study reveal-target";

    const metaChips = [project.category, project.language]
      .filter(Boolean)
      .map((value) => `<span class="meta-chip">${escapeHtml(value)}</span>`)
      .join("");

    const tagMarkup = (project.tags || [])
      .map((tag) => `<span class="meta-chip">${escapeHtml(tag)}</span>`)
      .join("");

    const linkMarkup = (project.links || [])
      .map((link) => {
        const classes = link.primary ? "case-link case-link-primary" : "case-link";
        const icon = link.icon || (link.primary ? "external" : "github");
        return renderExternalLink(link.href, link.label, classes, icon);
      })
      .join("");

    const imageMarkup = project.imageUrl
      ? `
        <figure class="case-study-visual">
          <img src="${escapeHtml(project.imageUrl)}" alt="${escapeHtml(project.imageAlt || project.title)}">
        </figure>
      `
      : "";

    const calloutMarkup = project.callout
      ? `<p class="case-study-callout">${escapeHtml(project.callout)}</p>`
      : "";

    const bodyMarkup = `
      <div class="case-study-meta">${metaChips}</div>
      <h3>${escapeHtml(project.title)}</h3>
      <p class="case-study-summary">${escapeHtml(project.summary)}</p>
      <p class="case-study-detail">${escapeHtml(project.detail)}</p>
      ${calloutMarkup}
      <div class="case-study-meta">${tagMarkup}</div>
      <div class="case-study-links">${linkMarkup}</div>
    `;

    article.innerHTML = project.spotlight
      ? `
        <div class="case-study-spotlight-grid">
          <div class="case-study-body">
            ${bodyMarkup}
          </div>
          ${imageMarkup}
        </div>
      `
      : bodyMarkup;

    container.appendChild(article);
  });

  observeRevealTargets(container);
}

function renderRepoItem(repo) {
  const item = document.createElement("article");
  const tone = REPO_TONES.has(repo.tone) ? repo.tone : "blue";
  const featuredClass = repo.featured ? " repo-item-featured" : "";

  item.className = `repo-item repo-item-${tone}${featuredClass} reveal-target`;

  const name = escapeHtml(repo.name);
  const description = escapeHtml(repo.description || "Public project on GitHub.");
  const language = escapeHtml(repo.language || "Repository");
  const htmlUrl = escapeHtml(repo.html_url);
  const homepage = repo.homepage || "";
  const homepageLabel = repo.homepageLabel || "Website";
  const stars = repo.stargazers_count || 0;
  const topics = normalizeTopics(repo.topics).slice(0, 4);

  const eyebrowMarkup = repo.eyebrow
    ? `<span class="repo-kicker">${escapeHtml(repo.eyebrow)}</span>`
    : "";

  const tagMarkup = topics.length
    ? `<div class="repo-tags">${topics.map((topic) => `<span class="repo-tag">${escapeHtml(topic)}</span>`).join("")}</div>`
    : "";

  const impactMarkup = repo.impact
    ? `<p class="repo-impact">${escapeHtml(repo.impact)}</p>`
    : "";

  const metaItems = [
    `Updated ${formatMonthYear(repo.updated_at)}`,
    stars ? `${stars} stars` : ""
  ].filter(Boolean);

  const metaMarkup = metaItems.length
    ? `<div class="repo-meta">${metaItems.map((value) => `<span class="repo-meta-pill">${escapeHtml(value)}</span>`).join("")}</div>`
    : "";

  const repoLinkLabel = homepage ? "Source code" : "Repository";
  const repoLinkClass = homepage ? "repo-link" : "repo-link repo-link-primary";
  const primaryLinkMarkup = renderExternalLink(htmlUrl, repoLinkLabel, repoLinkClass, "github");
  const extraLinkMarkup = homepage
    ? renderExternalLink(homepage, homepageLabel, "repo-link repo-link-primary", "external")
    : "";

  item.innerHTML = `
    <div class="repo-topline">
      ${eyebrowMarkup}
      <span class="repo-language">${language}</span>
    </div>
    <div class="repo-item-head">
      <h3><a href="${htmlUrl}" target="_blank" rel="noreferrer">${name}</a></h3>
    </div>
    <p class="repo-text">${description}</p>
    ${impactMarkup}
    ${tagMarkup}
    ${metaMarkup}
    <div class="repo-links">
      ${primaryLinkMarkup}
      ${extraLinkMarkup}
    </div>
  `;

  return item;
}

function renderRepoList(container, repos) {
  container.innerHTML = "";

  if (!repos.length) {
    container.innerHTML = `
      <article class="repo-item repo-item-empty reveal-target">
        <p>No public repositories to show yet.</p>
      </article>
    `;
    observeRevealTargets(container);
    return;
  }

  repos.forEach((repo) => {
    container.appendChild(renderRepoItem(repo));
  });

  observeRevealTargets(container);
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
    const excludedRepos = new Set(config.repoFeed.exclude || []);
    const visibleRepos = repos
      .filter((repo) => !repo.fork)
      .filter((repo) => !excludedRepos.has(repo.name))
      .slice(0, config.repoFeed.limit)
      .map((repo) => {
        const fallback = configuredByName.get(repo.name) || {};
        return {
          ...fallback,
          ...repo,
          description: repo.description || fallback.description || "",
          homepage: repo.homepage || fallback.homepage || "",
          homepageLabel: fallback.homepageLabel || "Website",
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
  setText("site-status", config.profile.siteStatus);
  setText("featured-summary", config.featuredSummary);
  setText("repo-feed-summary", config.repoFeedSummary);
  setText("footer-note", config.profile.footerNote);

  const avatar = document.getElementById("profile-avatar");
  if (avatar) {
    avatar.src = config.profile.avatarUrl;
    avatar.alt = `${config.profile.name} profile photo`;
  }

  const heroLinks = document.getElementById("contact-links");
  if (heroLinks) {
    heroLinks.innerHTML = "";
    heroLinks.appendChild(
      makeLink("GitHub", config.profile.githubUrl, "contact-link", {
        icon: "github",
        detail: "Code and repos"
      })
    );
    heroLinks.appendChild(
      makeLink("LinkedIn", config.profile.linkedinUrl, "contact-link", {
        icon: "linkedin",
        detail: "Professional profile"
      })
    );
    heroLinks.appendChild(
      makeLink("Email", `mailto:${config.profile.email}`, "contact-link", {
        icon: "mail",
        detail: config.profile.email
      })
    );
  }

  const introActions = document.getElementById("intro-actions");
  if (introActions) {
    introActions.innerHTML = "";
    introActions.appendChild(
      makeLink("View GitHub", config.profile.githubUrl, "intro-action intro-action-primary", {
        icon: "github"
      })
    );

    const spotlightProject = (config.featuredProjects || []).find((project) => project.spotlight);
    const primarySpotlightLink = spotlightProject && (spotlightProject.links || []).find((link) => link.primary);
    if (primarySpotlightLink) {
      introActions.appendChild(
        makeLink(primarySpotlightLink.label, primarySpotlightLink.href, "intro-action intro-action-secondary", {
          icon: primarySpotlightLink.icon || "spark"
        })
      );
    }

    introActions.appendChild(
      makeAnchorLink("Browse Repositories", "#public-repos", "intro-action intro-action-ghost", {
        icon: "grid"
      })
    );
  }

  const factStrip = document.getElementById("fact-strip");
  if (factStrip) {
    factStrip.innerHTML = "";

    [
      { label: "Public site", value: "Live now" },
      { label: "Selected repos", value: String(config.profile.repoCount) },
      { label: "Featured focus", value: "Health + ML" }
    ].forEach((item) => {
      const card = document.createElement("div");
      card.className = "fact-card";
      card.innerHTML = `
        <span class="fact-label">${escapeHtml(item.label)}</span>
        <strong class="fact-value">${escapeHtml(item.value)}</strong>
      `;
      factStrip.appendChild(card);
    });
  }

  const footerLink = document.getElementById("footer-github-link");
  if (footerLink) {
    footerLink.href = config.profile.githubUrl;
    footerLink.innerHTML = buildLinkContent("View full GitHub profile", "github", "");
  }

  document.querySelectorAll(".sidebar-inner, .intro-section, .repo-section, .page-footer").forEach((node) => {
    node.classList.add("reveal-target");
  });

  renderFeaturedProjects(config);
  loadRepoFeed(config);
  observeRevealTargets(document);
}

document.addEventListener("DOMContentLoaded", bootstrapPortfolio);
