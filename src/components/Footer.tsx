import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
              <BookOpen className="h-5 w-5" />
              <span>BookHaven</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your destination for discovering and purchasing the best books online.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/books" className="hover:text-primary transition-colors">Browse Books</a></li>
              <li><a href="/cart" className="hover:text-primary transition-colors">Shopping Cart</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BookHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
