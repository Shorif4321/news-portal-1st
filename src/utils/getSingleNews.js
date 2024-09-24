export const getSingleNews = async (id) => {
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/${id}`, {
        cache: "no-store"
    })
    // const data =  res.json()
    return res.json()
}