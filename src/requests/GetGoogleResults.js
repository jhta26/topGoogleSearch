import env from '../env';

async function GetGoogleResults(googleSearch) {
    try {
        let response = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${env.GOOGLE_API_KEY}&cx=${env.CX}&q=${googleSearch.googleSearch}`, { method: 'GET' }
        )
        let results = await response.json()
        var data = {
            title: results.items[0].title,
            URL: results.items[0].formattedUrl
        }
        return data
    } catch (error) {
        console.log(error)
    }
}

export default GetGoogleResults;