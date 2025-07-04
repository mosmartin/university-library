import { Book } from "@/types/book";
import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

export default function BookCard({
  id,
  title,
  genre,
  color,
  cover,
  isLoaned = false,
}: Readonly<Book>) {
  return (
    <li className={cn(isLoaned && "xs:w-52 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoaned && "w-full flex flex-col items-center")}
      >
        <BookCover coverColor={color} coverImage={cover} />

        <div className={cn("mt-4", !isLoaned && "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>

        {isLoaned && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image
                src="/icons/calendar.svg"
                alt="Currently Loaned"
                width={18}
                height={18}
                className="object-contain"
              />

              <p className="text-light-100">11 days left to return</p>
            </div>

            <Button className="book-btn">Download Receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
}
