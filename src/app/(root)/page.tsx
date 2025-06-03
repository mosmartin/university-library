import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/fixtures/book.fixtures";

export default function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="my-8"
      />
    </>
  );
}
