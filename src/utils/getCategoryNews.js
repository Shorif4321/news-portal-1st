export const getAllCategoryNews = async (category) => {
    const res = await fetch(`https://the-news-portal-server.vercel.app/news?category=${category}`)
    const data = res.json()
    return data
}