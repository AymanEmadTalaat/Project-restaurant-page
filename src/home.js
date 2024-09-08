const content = document.getElementById("content");

function appendHome() {
  content.innerHTML = `
  <div class="home">
        <h2>
          Welcome to pizzeria
          <br />
          <span class="material-symbols-outlined"> star </span>
          <span class="material-symbols-outlined"> star </span>
          <span class="material-symbols-outlined"> star </span>
        </h2>

        <p>
          The vision
          <br />
          The food is pure understand class with a balanced taste structure,
          refinement, individuality, and an italian touch
        </p>
      </div>`;

  content.style.cssText = "display: block;";
}

export { appendHome };
