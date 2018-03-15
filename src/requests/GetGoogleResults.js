import env from '../env';

let GetGoogleResults = googleSearch => {
  return fetch(
    `https://www.googleapis.com/customsearch/v1?key=${env.GOOGLE_API_KEY}&cx=${env.CX}&q=${googleSearch.googleSearch}`,
    { method: 'GET' }
  )
    .then(response => response.json())
    .then(results => ({
      title: results.items[0].title,
      URL: results.items[0].formattedUrl
    }));
};

export default GetGoogleResults;
