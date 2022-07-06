interface Article
{
    title: string,
    pubDate: string,
    image_url: string,
    video_url: string | null,
    link: string,
    description: string,
    creator: string[] | null;

}

interface ArticlesState
{
    articles: Article[],
    totalResults: number,
    nextPage: number | null,
    currentPage: number,
}
