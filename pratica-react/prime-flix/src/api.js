const urlBase = "https://api.themoviedb.org/3/movie";

async function requisicao(url) {
    const response = await fetch(`${urlBase}${url}`, {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmVkOTc2YjA0ODEwMzJlM2U4YTM1ZTY2YmU2Y2I3ZSIsIm5iZiI6MTcyOTYxNDMwMi42NjQ3NTQsInN1YiI6IjY3MTc5YWQ1NmZiMDllMzk0YzAyYTVkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Oqnnf0-z2JUfoKhiA94vCySBU7KpjAt8JbJIwWyiXs'
        }
    }).then(response => response.json()).then(data => data.results)

    return response;
}

export default requisicao;