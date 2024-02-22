function generateRecommendation(event) {
  event.preventDefault();

  new Typewriter("#book-results", {
    strings:
      "<strong>On the Road</strong>, by Jack Kerouac <br /><strong>Blue Highways</strong>, by William Least Heat-Moon <br /><strong>Travels with Charley in Search of America</strong>, by John Steinbeck",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let genreFormElement = document.querySelector("#book-genre-form");
genreFormElement.addEventListener("submit", generateRecommendation);
