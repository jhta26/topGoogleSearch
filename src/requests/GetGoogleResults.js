import env from '../env'

async function GetGoogleResults(googleSearch) {
    try {
        let response = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${env.GOOGLE_API_KEY}&cx=${env.CX}&q=${googleSearch.googleSearch}`, { method: 'GET' }
        )
        let results = await response.json()
         console.log(results)
        var data = {
            title1: results.items[0].title,
            URL1: results.items[0].formattedUrl,
            image1:results.items[0].pagemap.cse_image[0].src,
            thumbnail1:results.items[0].pagemap.cse_thumbnail[0].src,
            snippet1:results.items[0].snippet,
            title2:results.items[1].title,
            URL2:results.items[1].formattedUrl,
            image2:results.items[1].pagemap.cse_image[0].src,
            thumbnail2:results.items[1].pagemap.cse_thumbnail[0].src,
            snippet2:results.items[1].snippet,
            title3: results.items[2].title,
            URL3:results.items[2].formattedUrl,
            image3:results.items[2].pagemap.cse_image[0].src,
            thumbnail3:results.items[2].pagemap.cse_thumbnail[0].src,
            snippet3:results.items[2].snippet,

        }
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export default GetGoogleResults;