export interface Article {
  title: string;
  pubDate: string;
  image_url: string;
  video_url: string | null;
  link: string;
  description: string;
  creator: string[] | null;
}

export interface NewsResponse {
  totalResults: number;
  results: Article[];
  nextPage: number | null;
}
