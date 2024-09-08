const content = document.getElementById("content");

function appendMenu() {
  content.innerHTML = `
  <div class="menu">
        <div class="plate-1">
          <div id="plate-1-img"></div>

          <p>Pizza supersupreme</p>
        </div>

        <div class="plate-2">
          <div id="plate-2-img"></div>

          <p>Pizza peperoni</p>
        </div>

        <div class="plate-3">
          <div id="plate-3-img"></div>

          <p>Cheese pizza</p>
        </div>
      </div>`;

  content.style.cssText = "display: block; width: 90vw;";
}

export { appendMenu };
