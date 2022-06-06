const API_URL = 'https://content.guardianapis.com/';
const API_KEY = '9be0c183-d63b-4a10-b8ef-a7bed47be052';

const form = document.querySelector('form');
const handleInput = document.querySelector('input');
const newContainer = document.querySelector('.news-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = handleInput.value;

  fetchDataGuardians(query);
});

async function fetchDataGuardians(query) {
  const responseData = await fetch(
    `${API_URL}search?q=${query}&api-key=${API_KEY}`
  );
  const {
    response: { results },
  } = await responseData.json();
  console.log(results);
  displayResults(results);
}

function displayResults(results) {
  let newResult = '';

  results?.map((result) => {
    const {
      sectionName,
      webPublicationDate: publication,
      webUrl,
      webTitle,
    } = result;
    newResult += `<div class=news>
      <p>${sectionName}</p>
      <p>${publication}</p>
      <a href="${webUrl} target =_blank">${webTitle}</a>
      </div>`;

    newContainer.innerHTML = newResult;
  });
}
