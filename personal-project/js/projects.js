const ponderProjects = [
    {
      title: "Arrays",
      category: "JS",
      description: "Working with arrays in JavaScript.",
      projectUrl: "../ponder/w01/arrays.html"
    },
    {
      title: "Flexbox Layout",
      category: "CSS",
      description: "Practicing layout using CSS Flexbox.",
      projectUrl: "../ponder/w01/flexbox.html"
    },
    {
      title: "Form Handling",
      category: "HTML / JS",
      description: "Form validation and DOM interaction.",
      projectUrl: "../ponder/w01/form.html"
    },
    {
      title: "Hikes Project",
      category: "JS",
      description: "Rendering hikes dynamically with JavaScript.",
      projectUrl: "../ponder/w01/hikes.html"
    },
    {
      title: "Meta CSS",
      category: "CSS",
      description: "Exploring meta tags and CSS styling.",
      projectUrl: "../ponder/w01/meta-css.html"
    },
    {
      title: "Modal Component",
      category: "JS",
      description: "Creating and controlling a modal window.",
      projectUrl: "../ponder/w01/modal.html"
    },
    {
      title: "Movies List",
      category: "JS",
      description: "Displaying and filtering a list of movies.",
      projectUrl: "../ponder/w01/movies.html"
    },
    {
      title: "Objects Practice",
      category: "JS",
      description: "Practicing JavaScript objects and properties.",
      projectUrl: "../ponder/w01/objects.html"
    },
    {
      title: "Responsive Layout",
      category: "CSS",
      description: "Building a responsive layout.",
      projectUrl: "../ponder/w01/responsive.html"
    },
    {
      title: "Sort & Filter",
      category: "JS",
      description: "Sorting and filtering items using JavaScript.",
      projectUrl: "../ponder/w01/sortfilter.html"
    },
    {
      title: "Theme Switcher",
      category: "JS / CSS",
      description: "Switching between light and dark themes.",
      projectUrl: "../ponder/w01/theme.html"
    }
  ];
  
  const proveProjects = [
    {
      title: "Blog Layout",
      category: "HTML / CSS",
      description: "A blog-style page layout.",
      projectUrl: "../prove/blog/blog.html"
    },
    {
      title: "Character Card",
      category: "HTML / CSS",
      description: "A profile card created for a character.",
      projectUrl: "../prove/charactercard/charactercard.html"
    },
    {
      title: "Cool Pics Gallery",
      category: "HTML / CSS / JS",
      description: "An interactive gallery of cool pictures.",
      projectUrl: "../prove/coolpics/coolpics.html"
    },
    {
      title: "Credit Card Form",
      category: "HTML / JS",
      description: "A styled credit card information form.",
      projectUrl: "../prove/creditcard/creditcard.html"
    },
    {
      title: "Mission Page",
      category: "HTML / CSS",
      description: "A personal mission or purpose page.",
      projectUrl: "../prove/mission/index.html"
    },
    {
      title: "Recipes Page",
      category: "HTML / CSS",
      description: "A page displaying recipes in a clean layout.",
      projectUrl: "../prove/recipes/recipes.html"
    }
  ];
  
  const ponderContainer = document.querySelector("#ponder-container");
  const proveContainer = document.querySelector("#prove-container");
  
  function createCard(project) {
    const card = document.createElement("article");
    card.classList.add("project-card");
  
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p><strong>Category:</strong> ${project.category}</p>
      <p>${project.description}</p>
      <div class="card-buttons">
        <button class="view-btn" data-url="${project.projectUrl}">View</button>
        <button class="code-btn" data-html="${project.projectUrl}">Code</button>
      </div>
    `;
  
    return card;
  }
  
  ponderProjects.forEach(project => {
    ponderContainer.appendChild(createCard(project));
  });
  
  proveProjects.forEach(project => {
    proveContainer.appendChild(createCard(project));
  });
  
  const modal = document.querySelector("#project-modal");
  const iframe = document.querySelector("#project-frame");
  const closeBtn = document.querySelector("#close-modal");
  const liveView = document.querySelector("#live-view");
  const codeView = document.querySelector("#code-view");
  
  const htmlCodeEl = document.querySelector("#html-code");
  const cssCodeEl = document.querySelector("#css-code");
  const jsCodeEl = document.querySelector("#js-code");
  
  const htmlPanel = document.querySelector("#html-panel");
  const cssPanel = document.querySelector("#css-panel");
  const jsPanel = document.querySelector("#js-panel");
  
  const tabButtons = document.querySelectorAll(".tab-btn");
  const codePanels = [htmlPanel, cssPanel, jsPanel];
  
  function openLive(url) {
    codeView.classList.add("hidden");
    htmlPanel.classList.add("hidden");
    cssPanel.classList.add("hidden");
    jsPanel.classList.add("hidden");
  
    liveView.classList.remove("hidden");
    iframe.src = url;
  
    modal.classList.remove("hidden");
  }
  
  function setActiveTab(tabName) {
    tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
  
    htmlPanel.classList.add("hidden");
    cssPanel.classList.add("hidden");
    jsPanel.classList.add("hidden");
  
    if (tabName === "html") htmlPanel.classList.remove("hidden");
    if (tabName === "css") cssPanel.classList.remove("hidden");
    if (tabName === "js") jsPanel.classList.remove("hidden");
  }
  
  async function openCode(htmlPath) {
    liveView.classList.add("hidden");
    codeView.classList.remove("hidden");
  
    iframe.src = "";
  
    modal.classList.remove("hidden");
  
    setActiveTab("html");
    htmlCodeEl.textContent = "Loading HTML...";
    cssCodeEl.textContent = "Loading CSS...";
    jsCodeEl.textContent = "Loading JavaScript...";
  
    try {
      const htmlResponse = await fetch(htmlPath);
      if (htmlResponse.ok) {
        const htmlText = await htmlResponse.text();
        htmlCodeEl.textContent = htmlText;
      } else {
        htmlCodeEl.textContent = "Unable to load HTML file.";
      }
    } catch (err) {
      htmlCodeEl.textContent = "Error loading HTML file.";
      console.error(err);
    }
  
    const basePath = htmlPath.replace(".html", "");
  
    try {
      const cssResponse = await fetch(basePath + ".css");
      if (cssResponse.ok) {
        const cssText = await cssResponse.text();
        cssCodeEl.textContent = cssText;
      } else {
        cssCodeEl.textContent = "No CSS file found for this project.";
      }
    } catch (err) {
      cssCodeEl.textContent = "No CSS file found or error loading CSS.";
      console.error(err);
    }
  
    try {
      const jsResponse = await fetch(basePath + ".js");
      if (jsResponse.ok) {
        const jsText = await jsResponse.text();
        jsCodeEl.textContent = jsText;
      } else {
        jsCodeEl.textContent = "No JavaScript file found for this project.";
      }
    } catch (err) {
      jsCodeEl.textContent = "No JavaScript file found or error loading JS.";
      console.error(err);
    }
  }
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;
      setActiveTab(tabName);
    });
  });
  
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("view-btn")) {
      openLive(event.target.dataset.url);
    }
  
    if (event.target.classList.contains("code-btn")) {
      openCode(event.target.dataset.html);
    }
  });
  
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    iframe.src = "";
    htmlCodeEl.textContent = "";
    cssCodeEl.textContent = "";
    jsCodeEl.textContent = "";
  });
  
  const searchInput = document.querySelector("#searchInput");
  
  function filterProjects() {
    const query = searchInput.value.toLowerCase();
  
    ponderContainer.innerHTML = "";
    proveContainer.innerHTML = "";
  
    ponderProjects
      .filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      )
      .forEach(p => ponderContainer.appendChild(createCard(p)));
  
    proveProjects
      .filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      )
      .forEach(p => proveContainer.appendChild(createCard(p)));
  }
  
  searchInput.addEventListener("input", filterProjects);
  
  const signOutBtn = document.querySelector("#signOutBtn");
  
  signOutBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  