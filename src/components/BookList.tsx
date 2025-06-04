import { Book } from "@/types/book";
import BookCard from "./BookCard";

type BookListProps = {
  title: string;
  books: Book[];
  containerClassName?: string;
};

export default function BookList({
  title,
  books,
  containerClassName,
}: Readonly<BookListProps>) {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </ul>
    </section>
  );
}
