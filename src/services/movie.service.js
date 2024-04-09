

export async function getAllMovieService() {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api', { cache: 'no-store' })

    const data = await res.json();
    return data;
}

export async function getMovieById() {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`)
    const data = await res.json();

    console.log("Data By ID : ", data)
    return data;
}