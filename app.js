async function search() {
  const artist = document.getElementById("artist").value;
  const resultsList = document.getElementById("results");

  resultsList.innerHTML = "";

  if (!artist) return;

  const response = await fetch(
    `https://itunes.apple.com/search?entity=song&limit=25&term=${encodeURIComponent(artist)}`
  );

  if (!response.ok) {
    resultsList.innerHTML = "<li>Error fetching data</li>";
    return;
  }

  const data = await response.json();

  if (data.results.length === 0) {
    resultsList.innerHTML = "<li>No songs found</li>";
    return;
  }

  data.results.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.trackName;
    resultsList.appendChild(li);
  });
}
