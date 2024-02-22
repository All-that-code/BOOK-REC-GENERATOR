function showRecommendations(response) {
  new Typewriter("#book-results", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateRecommendation(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "8o03bb70ba39844fdc4a5a5t25cc70b6";
  let prompt = `Generate three book recommendations of the ${userInput.value} genre or theme`;
  let context =
    "You are a literature expert and avid reader, great at recommending books based on their genre or theme. Please provide three book recommendations in a simple way, providing the titles and their authors. Please change the titles every time and avoid repeating yourself, even if the ${userInput.value} remains the same. Use this answer as a format example: <strong>On the Road</strong>, by Jack Kerouac<br/><strong>Blue Highways</strong>, by William Least Heat-Moon<br/><strong>Travels with Charley in Search of America</strong>, by John Steinbeck";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let resultElement = document.querySelector("#book-results");
  resultElement.classList.remove("book-teaser");
  resultElement.innerHTML = `<div class="generating-recommendations">Generating book recommendations on ${userInput.value}</div>`;

  axios.get(apiUrl).then(showRecommendations);
}

let genreFormElement = document.querySelector("#book-genre-form");
genreFormElement.addEventListener("submit", generateRecommendation);
