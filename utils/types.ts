export interface Article {
  title: string;
  pubDate: string;
  image_url: string;
  link: string;
  description: string;
}

export interface NewsResponse {
  totalResults: number;
  results: Article[];
  nextPage: number | null;
}
