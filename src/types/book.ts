export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  rating?: number;
}

export interface CartItem {
  book: Book;
  quantity: number;
}
