import { useParams, Navigate } from "react-router-dom";
import BookDetailsCard from "@/components/BookDetailsCard";
import { mockBooks } from "@/data/mockBooks";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Link to="/books">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Books
          </Button>
        </Link>
        <BookDetailsCard book={book} />
      </div>
    </div>
  );
};

export default BookDetails;
