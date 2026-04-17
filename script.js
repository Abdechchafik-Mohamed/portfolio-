// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

const projects = {
  "sa-siem": {
    title: "SA-SIEM",
    desc: "Système de détection d'anomalies basé sur l'analyse des logs et un modèle intelligent.",
    tech: "Python, Machine Learning",
    link: "https://github.com/your-repo"
  },
  "can-go": {
    title: "CAN-Go",
    desc: "Application mobile de gestion avec communication client-serveur.",
    tech: "Flutter, PHP, MySQL",
    link: "https://github.com/your-repo"
  },
  "bien-etre": {
    title: "Bien-Être",
    desc: "Plateforme web avec gestion des utilisateurs et authentification.",
    tech: "Laravel, PHP, MySQL",
    link: "https://github.com/your-repo"
  }
};

function openProject(id) {
  const p = projects[id];

  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDesc").innerText = p.desc;
  document.getElementById("modalTech").innerText = p.tech;
  document.getElementById("modalLink").href = p.link;

  document.getElementById("projectModal").classList.remove("hidden");
}

function closeProject() {
  document.getElementById("projectModal").classList.add("hidden");
}