window.PORTFOLIO_CONFIG = {
  site: {
    title: "John Andrew | Data Scientist",
    description:
      "Selected work by John Andrew across data science, analytics, and public health."
  },
  profile: {
    name: "John Andrew",
    title: "Data Scientist",
    focus:
      "Public health analytics, statistics, data science, explainable ML, dashboards, and remote data science delivery.",
    location: "Nairobi, Kenya",
    bio:
      "I build practical data science work that goes beyond notebooks, from data cleaning and modeling to documentation, deployment, and interfaces people can actually use.",
    intro:
      "Most of my recent work sits at the intersection of public health, machine learning, and analytical storytelling, especially when I can turn a research workflow into something clearer and more usable.",
    highlight:
      "Applied machine learning, public health data, and decision-support interfaces.",
    avatarUrl: "https://avatars.githubusercontent.com/u/185175445?v=4&updated=20260324",
    githubUrl: "https://github.com/andyombogo",
    linkedinUrl: "https://linkedin.com/in/john-andrew-dts",
    email: "andyombogo@gmail.com",
    repoCount: 5,
    footerNote:
      "Selected projects, source code, and live demos are organized here to make the work easy to explore."
  },
  featuredSummary:
    "A tighter selection of projects that show how I approach applied data work: practical problems, interpretable outputs, and thoughtful presentation.",
  repoFeedSummary:
    "A curated GitHub selection focused on the projects that best represent my public health, analytics, and deployment work, with a live refresh on page load.",
  featuredProjects: [
    {
      repo: "open-health-risk-engine",
      spotlight: true,
      category: "Explainable Machine Learning",
      title: "Open Health Risk Engine",
      language: "Python",
      summary:
        "An end-to-end mental health risk demo built from NHANES survey data and designed to feel like a serious applied machine learning case study.",
      detail:
        "The project combines a reproducible data pipeline, model comparison, SHAP-based explanation, automated tests, and an interactive Streamlit interface. It is the kind of work I enjoy most: using public data to build something analytical, interpretable, and deployment-ready.",
      callout:
        "The live demo gives visitors a direct look at how the scoring experience works in practice.",
      imageUrl:
        "https://raw.githubusercontent.com/andyombogo/open-health-risk-engine/main/figures/app_walkthrough.png",
      imageAlt:
        "Open Health Risk Engine calculator walkthrough",
      tags: ["NHANES", "Streamlit", "SHAP", "XGBoost", "Healthcare"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/open-health-risk-engine",
          icon: "github"
        },
        {
          label: "Live demo",
          href: "https://open-health-risk-engine.onrender.com/",
          primary: true,
          icon: "external"
        }
      ]
    },
    {
      repo: "vaccination-coverage-analysis-usa",
      category: "Deployed Public Health Dashboard",
      title: "US Maternal Vaccination Coverage Dashboard",
      language: "Python",
      summary:
        "A live Streamlit dashboard for exploring CDC maternal vaccination coverage across vaccines, geographies, seasons, and demographic dimensions.",
      detail:
        "The latest version cleanly separates a lightweight deployed dashboard from the heavier offline Spark workflow, adds CI-backed tests, and packages the app for Render so the public experience feels maintained and production-minded rather than experimental.",
      callout:
        "The current dashboard surfaces 4,322 cleaned CDC records with 62.6% average coverage and 61.7% weighted coverage in the top-level KPI view.",
      imageUrl:
        "https://raw.githubusercontent.com/andyombogo/vaccination-coverage-analysis-usa/master/docs/assets/dashboard-hero-preview.png",
      imageAlt:
        "US maternal vaccination coverage dashboard hero preview",
      metrics: [
        { label: "Records", value: "4,322" },
        { label: "Average coverage", value: "62.6%" },
        { label: "Weighted coverage", value: "61.7%" }
      ],
      tags: ["CDC", "Render", "Streamlit", "CI", "Public Health"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/vaccination-coverage-analysis-usa",
          icon: "github"
        },
        {
          label: "Live dashboard",
          href: "https://vaccination-coverage-dashboard.onrender.com/",
          primary: true,
          icon: "external"
        }
      ]
    },
    {
      repo: "art-coverage-app",
      category: "Interactive Flask Dashboard",
      title: "WHO ART Coverage Dashboard",
      language: "Python",
      summary:
        "An interactive Flask + Plotly dashboard for exploring WHO antiretroviral therapy coverage by country, region, and year.",
      detail:
        "The repo now reads like a real product instead of a loose analysis project: Render-ready deployment, CI-backed checks, a cleaner structure, exportable filtered CSV views, a lightweight JSON summary endpoint, and clearer analytical views for overview, regional trends, and top or bottom performers.",
      callout:
        "The latest dashboard works with 3,407 usable country records across 146 countries, covering coverage estimates from 2000 through 2023.",
      imageUrl:
        "https://raw.githubusercontent.com/andyombogo/art-coverage-app/master/docs/assets/overview-preview.svg",
      imageAlt:
        "WHO ART coverage dashboard overview preview",
      metrics: [
        { label: "Usable records", value: "3,407" },
        { label: "Countries", value: "146" },
        { label: "Coverage years", value: "2000-2023" }
      ],
      tags: ["WHO", "Flask", "Plotly", "Render", "Public Health"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/art-coverage-app",
          icon: "github"
        },
        {
          label: "Live dashboard",
          href: "https://art-coverage-dashboard.onrender.com/",
          primary: true,
          icon: "external"
        }
      ]
    },
    {
      repo: "movies-dataset",
      category: "Data Exploration",
      title: "Movies Dataset Exploration",
      language: "Python",
      summary:
        "A smaller Python project centered on working with movie data through repeatable cleaning, exploration, and analysis.",
      detail:
        "Not every project needs a large deployment story. This repository represents the other side of my work: taking a dataset, structuring it well, and using code to make the exploratory process cleaner and easier to extend.",
      tags: ["EDA", "Python", "Data Wrangling"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/movies-dataset",
          icon: "github"
        }
      ]
    }
  ],
  publicRepos: [
    {
      name: "andyombogo.github.io",
      featured: true,
      tone: "ink",
      eyebrow: "Portfolio Source",
      html_url: "https://github.com/andyombogo/andyombogo.github.io",
      description:
        "Root GitHub Pages portfolio for John Andrew, designed as the main public home for selected work and live project links.",
      impact:
        "This is the repo behind the site you are reading now, where the portfolio presentation itself is treated like a product.",
      language: "HTML",
      homepage: "https://andyombogo.github.io/",
      homepageLabel: "Portfolio",
      stargazers_count: 0,
      updated_at: "2026-03-22T09:30:00Z",
      topics: ["portfolio", "github-pages", "personal-site", "data-science"]
    },
    {
      name: "vaccination-coverage-analysis-usa",
      tone: "teal",
      eyebrow: "Dashboard Build",
      html_url: "https://github.com/andyombogo/vaccination-coverage-analysis-usa",
      description:
        "Deployment-ready Streamlit dashboard for exploring CDC maternal vaccination coverage with KPI cards, trend views, geography comparisons, and CSV export.",
      impact:
        "The latest build balances a fast public dashboard with preserved Spark analysis, plus CI and Render deployment so the project feels polished end to end.",
      language: "Python",
      homepage: "https://vaccination-coverage-dashboard.onrender.com/",
      homepageLabel: "Live dashboard",
      stargazers_count: 0,
      updated_at: "2026-03-24T07:12:21Z",
      topics: ["streamlit", "cdc", "dashboard", "public-health", "render"]
    },
    {
      name: "open-health-risk-engine",
      tone: "blue",
      eyebrow: "Flagship ML Product",
      html_url: "https://github.com/andyombogo/open-health-risk-engine",
      description:
        "Explainable mental health risk engine built from NHANES data with XGBoost, SHAP, and a live Streamlit-style calculator experience.",
      impact:
        "This is the strongest example of my workflow end to end: modeling, explainability, testing, and a live user-facing experience.",
      language: "Python",
      homepage: "https://open-health-risk-engine.onrender.com/",
      homepageLabel: "Live demo",
      stargazers_count: 0,
      updated_at: "2026-03-21T16:09:16Z",
      topics: ["data-science", "machine-learning", "mental-health", "shap", "xgboost"]
    },
    {
      name: "movies-dataset",
      tone: "orange",
      eyebrow: "Exploration Workflow",
      html_url: "https://github.com/andyombogo/movies-dataset",
      description:
        "Python data exploration project focused on cleaning, structuring, and analyzing a movie dataset with a reusable workflow.",
      impact:
        "It represents the quieter side of my work: clear data wrangling, sensible structure, and repeatable analysis foundations.",
      language: "Python",
      homepage: "",
      homepageLabel: "",
      stargazers_count: 0,
      updated_at: "2025-03-03T11:45:49Z",
      topics: ["python", "data-analysis", "eda", "data-cleaning"]
    },
    {
      name: "art-coverage-app",
      tone: "teal",
      eyebrow: "Flask Dashboard",
      html_url: "https://github.com/andyombogo/art-coverage-app",
      description:
        "Interactive Flask + Plotly dashboard for exploring WHO ART coverage by country, region, and year, with exportable views and a summary API.",
      impact:
        "The latest version feels product-ready: Render deployment, CI-backed checks, cleaner repo structure, filtered CSV downloads, and dashboard views that tell a clearer public-health story.",
      language: "HTML",
      homepage: "https://art-coverage-dashboard.onrender.com/",
      homepageLabel: "Live dashboard",
      stargazers_count: 0,
      updated_at: "2026-03-24T12:33:50Z",
      topics: ["flask", "plotly", "public-health", "render", "data-visualization"]
    }
  ],
  repoFeed: {
    username: "andyombogo",
    limit: 20,
    exclude: ["minimal-portfolio", "andyombogo", "SDS-6103", "design"]
  }
};
