import "./style.css";
import { projects, projectSlugs } from "./projects.js";

const app = document.querySelector("#app");
const currentSlug = window.location.pathname.replace(/^\/+|\/+$/g, "");

if (currentSlug && projectSlugs.has(currentSlug)) {
  document.title = "";
  document.body.classList.add("blank-page");
} else {
  app.innerHTML = `
    <main class="profile">
      <img
        class="profile__portrait"
        src="/images/artist-image.png"
        alt="Portrait of Jeremy Alexander"
        width="310"
        height="310"
      />

      <nav aria-label="Selected work">
        <ul class="project-list">
          ${projects
            .map(
              ({ title, slug }) => `
                <li class="project-list__item">
                  <a href="/${slug}">${title}</a>
                </li>`,
            )
            .join("")}
        </ul>
      </nav>

      <footer class="footer">
        <img
          class="footer__stars"
          src="/images/footer-stars.png"
          alt=""
          width="285"
          height="165"
        />
        <div class="footer__legal">
          <span>JEREMY ALEXANDER L.L.C.</span>
          <span>2022-2027</span>
        </div>
        <img
          class="footer__marks"
          src="/images/footer-marks.png"
          alt="Baige brand marks"
          width="280"
          height="49"
        />
      </footer>
    </main>
  `;
}