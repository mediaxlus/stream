async function fetchMovie(id, lang='id-ID') {
  const key = `${id}_${lang}`;
  if (APP.cache.has(key)) return APP.cache.get(key);

  const res = await fetch(`${APP.api}?id=${id}&lang=${lang}`);
  const data = await res.json();
  APP.cache.set(key, data);
  return data;
}

