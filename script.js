/* ---------------------------------------------------------------
   Mobile navigation
   --------------------------------------------------------------- */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

/* ---------------------------------------------------------------
   Sermon video
   ---------------------------------------------------------------
   TO PUBLISH A SERMON VIDEO:
   open index.html, find  <figure class="sermon-media" data-video-id="">
   and paste the YouTube video ID between the quotes.

   The ID is the part after "v=" in the watch URL, for example
   https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  dQw4w9WgXcQ

   Nothing else needs changing. Until an ID is added, the play button
   shows a short "coming soon" note instead of failing silently.
   --------------------------------------------------------------- */
const sermonMedia = document.querySelector(".sermon-media");

function playSermon(event) {
  if (event) event.preventDefault();
  if (!sermonMedia) return;

  const videoId = (sermonMedia.dataset.videoId || "").trim();
  const copy = document.querySelector(".sermon-copy");

  if (!videoId) {
    if (copy && !copy.querySelector(".sermon-note")) {
      const note = document.createElement("p");
      note.className = "sermon-note";
      note.setAttribute("role", "status");
      note.textContent =
        "The video for this sermon is not online yet. Follow us or call 0720 200 619 for details.";
      copy.appendChild(note);
    }
    return;
  }

  if (sermonMedia.classList.contains("is-playing")) return;

  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
  frame.title = "Sermon video";
  frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  frame.allowFullscreen = true;

  sermonMedia.classList.add("is-playing");
  sermonMedia.querySelector(".play-button")?.remove();
  sermonMedia.appendChild(frame);
}

sermonMedia?.querySelector(".play-button")?.addEventListener("click", playSermon);
document.querySelector(".js-watch-sermon")?.addEventListener("click", playSermon);

/* ---------------------------------------------------------------
   Footer year
   --------------------------------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
