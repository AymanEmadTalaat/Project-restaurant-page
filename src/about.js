const content = document.getElementById("content");

function appendAbout() {
  content.innerHTML = `
  <div class="about">
        <p>
          In business since 1987, Pizzeria Company is a fast food restaurant
          offering delivery and take-out food service, commercial and
          institutional catering.
        </p>

        <footer>
          <p>
            Pizzeria 123456 Pizza Rd, St. Newyork, ON, ABC DEF
            111-222-333-444-555-666
          </p>

          <ul>
            <li>Monday 3:00 PM - 8:00 PM</li>
            <li>Tuesday 3:00 PM - 8:00 PM</li>
            <li>Wednesday 3:30 PM - 8:00 PM</li>
            <li>Thursday 3:30 PM - 8:00 PM</li>
            <li>Friday 3:30 PM - 9:00 PM</li>
            <li>Saturday 3:30 PM - 9:00 PM</li>
            <li>Sunday 3:30 PM - 8:00 PM</li>
          </ul>
        </footer>
      </div>`;

  content.style.cssText = "display: block; width: 90vw;";
}

export { appendAbout };
