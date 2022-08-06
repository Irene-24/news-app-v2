enum Categories {
  headlines = "top",
  business = "business",
  politics = "politics",
  entertainment = "entertainment",
  health_food = "health,food",
  sports = "sports",
  science_technology = "science,technology",
}

enum Tags {
  Article = "Article",
  Joke = "Joke",
  Rates = "Rates",
}

const apiKey = process.env.NEXT_PUBLIC_NEWSDATA_IO_API_KEY;

export type Category = keyof typeof Categories;

export { Categories, Tags, apiKey };
