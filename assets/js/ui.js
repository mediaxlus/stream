async function renderMovie(id) {
  const m = await fetchMovie(id);
  title.textContent = m.title;
  meta.textContent = `${m.release_date} • ⭐ ${m.vote_average}`;
  overview.textContent = m.overview;

  loadVideo(
    '/media/sample.mp4',
    APP.imageBase + m.backdrop_path
  );
}

