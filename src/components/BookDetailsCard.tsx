import { Book } from "@/types/book";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface BookDetailsCardProps {
  book: Book;
}

const BookDetailsCard = ({ book }: BookDetailsCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book, quantity);
    toast.success(`${quantity} ${quantity === 1 ? 'copy' : 'copies'} of "${book.title}" added to cart!`);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-[2/3] overflow-hidden bg-muted md:aspect-auto">
            <img
              src={book.image_url}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 p-6 md:p-8">
            <div>
              <div className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {book.category}
              </div>
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{book.author}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(book.rating || 0)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{book.rating} out of 5</span>
              </div>

              <div className="text-3xl font-bold text-primary mb-6">
                ${book.price.toFixed(2)}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button onClick={handleAddToCart} size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookDetailsCard;
