

var DEFAULT_IMAGE = 'https://placehold.co/210x295?text=No+Image';

function $(selector) {
  return document.querySelector(selector);
}

function createCard(show) {
  var container = document.createElement('div');
  container.className = 'card';

  var img = document.createElement('img');
  img.src = (show && show.image && show.image.medium) ? show.image.medium : DEFAULT_IMAGE;
  img.alt = (show && show.name) ? show.name : 'Show image';
  img.className = 'poster';
  container.appendChild(img);

  var title = document.createElement('h2');
  title.textContent = (show && show.name) ? show.name : 'Untitled';
  container.appendChild(title);

  var summary = document.createElement('div');
  if (show && show.summary) {
   
    summary.innerHTML = show.summary;
  } else {
    summary.textContent = 'No summary available.';
  }
  container.appendChild(summary);

  var link = document.createElement('a');
  link.href = (show && show.url) ? show.url : '#';
  link.target = '_blank';
  link.textContent = (show && show.url) ? 'View on TVMaze' : 'No details';
  container.appendChild(link);

  return container;
}

function searchShows(query) {
  var url = 'https://api.tvmaze.com/search/shows?q=' + encodeURIComponent(query);
  return fetch(url)
    .then(function(response) {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(function(data) {
      var results = [];
      for (var i = 0; i < data.length; i++) {
        results.push(data[i].show);
      }
      return results;
    });
}

document.addEventListener('DOMContentLoaded', function() {
  var form = $('#searchForm');
  var input = $('#query');
  var results = $('#results');

  if (!form || !input || !results) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var q = input.value.trim();
    if (!q) return;

    results.innerHTML = 'Searching...';

    searchShows(q).then(function(shows) {
      results.innerHTML = '';
      if (!shows || shows.length === 0) {
        results.textContent = 'No results for "' + q + '"';
        return;
      }

      for (var i = 0; i < shows.length; i++) {
        var card = createCard(shows[i]);
        results.appendChild(card);
      }
    }).catch(function(err) {
      console.error(err);
      results.textContent = 'Error fetching data';
    });
  });
});