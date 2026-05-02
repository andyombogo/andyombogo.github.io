window.PORTFOLIO_CONFIG = {
  site: {
    title: "John Andrew | Health Data Scientist",
    description:
      "Selected work by John Andrew across health data science, analytics, statistics, and public health."
  },
  profile: {
    name: "John Andrew",
    title: "Health Data Scientist",
    positioning:
      "Public-health and research analytics with a bias for decision-ready dashboards.",
    focus:
      "Public health analytics, statistics, data science, explainable ML, dashboards, and research consulting.",
    location: "Nairobi, Kenya",
    bio:
      "I turn complex health and research data into clear analytical workflows, live dashboards, and interpretable machine learning tools people can actually use.",
    intro:
      "Recent work spans public-health dashboards, research-facing analytics, and reusable tooling for teams that need evidence they can actually act on.",
    highlight:
      "Research collaborations, dashboard delivery, and interpretable health-data tools.",
    avatarUrl: "https://avatars.githubusercontent.com/u/185175445?v=4&updated=20260324",
    githubUrl: "https://github.com/andyombogo",
    linkedinUrl: "https://linkedin.com/in/john-andrew-dts",
    email: "andyombogo@gmail.com",
    profileLinks: [
      {
        label: "GitHub",
        href: "https://github.com/andyombogo",
        icon: "github",
        detail: "Code and repos"
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/john-andrew-dts",
        icon: "linkedin",
        detail: "Professional profile"
      },
      {
        label: "ORCID",
        href: "https://orcid.org/0009-0009-2063-3060",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg",
        imageAlt: "ORCID logo",
        detail: "0009-0009-2063-3060"
      },
      {
        label: "SSACAB II Fellow",
        href: "https://www.ssacab.co.za/Fellows/SSACABII/Masters.aspx",
        imageUrl:
          "https://www.ssacab.co.za/Portals/0/SSACAB_logo_transparent.png?ver=27CKj2D64YeH-b1nGgARMQ%3d%3d",
        imageAlt: "SSACAB logo",
        detail: "Consortium fellow profile"
      }
    ],
    affiliations: [
      {
        name: "Aga Khan University",
        detail: "Brain and Mind Institute",
        href: "https://www.aku.edu/bmi/Pages/home.aspx",
        imageUrl: "https://www.aku.edu/Style%20Library/Images/AKU_logo.gif",
        imageAlt: "Aga Khan University logo"
      },
      {
        name: "University of Nairobi",
        detail: "Department of Mathematics",
        href: "https://mathematics.uonbi.ac.ke/",
        imageUrl:
          "https://mathematics.uonbi.ac.ke/sites/mathematics.uonbi.ac.ke/files/best-logo59_0.png",
        imageAlt: "University of Nairobi logo"
      }
    ],
    repoCount: 5,
    footerNote:
      "If a project looks relevant, the code, live demo, or readme is never more than a click away."
  },
  heroFacts: [
    { label: "Live builds", value: "3 public demos" },
    { label: "Working style", value: "Research + delivery" },
    { label: "Open to", value: "Collaborations" }
  ],
  workWithMe: {
    headline: "Research-facing analytics that moves from data to decisions.",
    summary:
      "I am a strong fit for collaborations that need rigorous analysis and something practical at the end: a cleaned workflow, an interpretable model, or a dashboard people can actually use.",
    ctaLabel: "Start a conversation",
    ctaHref: "mailto:andyombogo@gmail.com",
    items: [
      {
        title: "Research data projects",
        detail:
          "Study support, analytical workflows, and reproducible outputs for public-health and academic work."
      },
      {
        title: "Dashboards and reporting",
        detail:
          "Decision-ready dashboards and KPI views that make trends, gaps, and results easier to explore."
      },
      {
        title: "Explainable analytics",
        detail:
          "Interpretable models, validation, and reasoning you can defend in research or stakeholder settings."
      }
    ]
  },
  featuredSummary:
    "A focused set of builds that shows how I work: public-health dashboards, interpretable machine learning, and reusable analytics tooling.",
  repoFeedSummary:
    "A curated repo selection centered on live public-health builds, evolving research tooling, and clean analytical workflows.",
  featuredProjects: [
    {
      repo: "open-health-risk-engine",
      spotlight: true,
      category: "Explainable Machine Learning",
      title: "Open Health Risk Engine",
      language: "Python",
      summary:
        "An explainable mental-health risk demo that brings modeling, interpretation, and a live scoring experience together in one public build.",
      detail:
        "Built from NHANES data with a reproducible pipeline, model comparison, SHAP explanations, automated tests, and a deployment-ready interface.",
      callout:
        "Shows that I can take an ML idea all the way from data prep to a public-facing, interpretable product.",
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
        "A live public-health dashboard for exploring CDC maternal vaccination coverage across geography, season, and demographic dimensions.",
      detail:
        "The current build separates a lightweight deployed app from the heavier offline workflow and packages it cleanly for Render with CI-backed checks.",
      callout:
        "Turns a complex CDC dataset into a faster, policy-friendly dashboard with clear top-line indicators.",
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
        "An interactive Flask dashboard for exploring WHO antiretroviral therapy coverage by country, region, and year.",
      detail:
        "It now reads more like a maintained product than a loose analysis project, with Render deployment, CI-backed checks, cleaner structure, and exportable views.",
      callout:
        "Makes a broad WHO dataset easier to scan, compare, and use through a cleaner public-health interface.",
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
      repo: "khis-toolkit",
      category: "Kenya Health Data Toolkit",
      title: "KHIS Toolkit",
      language: "Python",
      status: "In development",
      summary:
        "A Kenya-first toolkit for DHIS2 and KHIS workflows, designed to help county teams move from extraction to cleaning, quality checks, forecasting, and dashboard-ready outputs.",
      detail:
        "I am still iterating on the package, but the direction is clear: county-aware data pulls, KHIS-specific cleaning, data quality scorecards, forecasting options, and a mental-health workflow that can support both research and operational review.",
      callout:
        "Still in development and active iteration, with the readme acting as the clearest public snapshot of where the toolkit is going.",
      tags: ["KHIS", "DHIS2", "Kenya", "Forecasting", "Data Quality"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/khis-toolkit",
          icon: "github"
        },
        {
          label: "Readme",
          href: "https://github.com/andyombogo/khis-toolkit/blob/main/README.md",
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
        "A lighter Python project centered on repeatable cleaning, exploration, and analysis with movie data.",
      detail:
        "It represents the quieter side of my work: taking a dataset, structuring it well, and making the exploratory process cleaner and easier to extend.",
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
      name: "open-health-risk-engine",
      tone: "blue",
      eyebrow: "Flagship ML Product",
      html_url: "https://github.com/andyombogo/open-health-risk-engine",
      description:
        "Explainable mental-health risk engine built from NHANES data with XGBoost, SHAP, and a live calculator experience.",
      impact:
        "Strongest end-to-end proof of how I work: modeling, explainability, testing, and a live user-facing build.",
      language: "Python",
      homepage: "https://open-health-risk-engine.onrender.com/",
      homepageLabel: "Live demo",
      stargazers_count: 0,
      updated_at: "2026-03-21T16:09:16Z",
      topics: ["data-science", "machine-learning", "mental-health", "shap", "xgboost"]
    },
    {
      name: "vaccination-coverage-analysis-usa",
      tone: "teal",
      eyebrow: "Dashboard Build",
      html_url: "https://github.com/andyombogo/vaccination-coverage-analysis-usa",
      description:
        "Deployment-ready Streamlit dashboard for exploring CDC maternal vaccination coverage with KPI cards, trend views, geography comparisons, and export.",
      impact:
        "A good example of turning a complex public-health dataset into a lighter, more usable dashboard without losing rigor.",
      language: "Python",
      homepage: "https://vaccination-coverage-dashboard.onrender.com/",
      homepageLabel: "Live dashboard",
      stargazers_count: 0,
      updated_at: "2026-03-24T07:12:21Z",
      topics: ["streamlit", "cdc", "dashboard", "public-health", "render"]
    },
    {
      name: "art-coverage-app",
      tone: "teal",
      eyebrow: "Flask Dashboard",
      html_url: "https://github.com/andyombogo/art-coverage-app",
      description:
        "Interactive Flask dashboard for exploring WHO ART coverage by country, region, and year, with exportable views and a summary API.",
      impact:
        "Shows product-minded cleanup: cleaner structure, clearer views, Render deployment, and public-health storytelling that is easier to follow.",
      language: "HTML",
      homepage: "https://art-coverage-dashboard.onrender.com/",
      homepageLabel: "Live dashboard",
      stargazers_count: 0,
      updated_at: "2026-03-24T12:33:50Z",
      topics: ["flask", "plotly", "public-health", "render", "data-visualization"]
    },
    {
      name: "khis-toolkit",
      tone: "ink",
      eyebrow: "In Development",
      status: "Iterating",
      html_url: "https://github.com/andyombogo/khis-toolkit",
      description:
        "Kenya-first Python analytics toolkit for DHIS2 and KHIS data, built to help county teams move from extraction to cleaning, quality checks, forecasting, and dashboard-ready outputs.",
      impact:
        "Still iterating, but already pointing toward a reusable workflow for county health analytics, mental-health indicators, and public-health decision support.",
      language: "Python",
      homepage: "https://github.com/andyombogo/khis-toolkit/blob/main/README.md",
      homepageLabel: "Readme",
      stargazers_count: 0,
      updated_at: "",
      topics: ["khis", "dhis2", "kenya", "public-health", "forecasting"]
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
  ],
  repoFeed: {
    username: "andyombogo",
    limit: 20,
    exclude: ["minimal-portfolio", "andyombogo", "andyombogo.github.io", "SDS-6103", "design"]
  }
};
