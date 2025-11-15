import { Book } from "@/types/book";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(book);
    toast.success(`"₹{book.title}" added to cart!`);
  };

  return (
    <Link to={`/books/₹{book.id}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={book.image_url}
            alt={book.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-1 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {book.category}
          </div>
          <h3 className="mb-1 font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{book.rating}</span>
          </div>
          <p className="text-lg font-bold text-primary">₹{book.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookCard;
