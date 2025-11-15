import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Star, ShoppingBag } from "lucide-react";
import BookList from "@/components/BookList";
import { mockBooks } from "@/data/mockBooks";

const Home = () => {
  const featuredBooks = mockBooks.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Discover Your Next
            <span className="block text-primary">Great Read</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Explore thousands of books across all genres. From bestsellers to hidden gems,
            find your perfect book at BookHaven.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/books">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-5 w-5" />
                Browse Collection
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Curated Selection</h3>
              <p className="text-sm text-muted-foreground">
                Handpicked books across all genres and categories
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Top Ratings</h3>
              <p className="text-sm text-muted-foreground">
                Only the best-rated books make it to our store
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Easy Shopping</h3>
              <p className="text-sm text-muted-foreground">
                Simple checkout process with secure payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Featured Books</h2>
              <p className="text-muted-foreground">Handpicked recommendations just for you</p>
            </div>
            <Link to="/books">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <BookList books={featuredBooks} />
        </div>
      </section>
    </div>
  );
};

export default Home;
