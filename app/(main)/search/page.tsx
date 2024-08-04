import TrendSidebar from "@/components/TrendSidebar";
import { Metadata } from "next";
import SearchResults from "./SearchResults";

interface SearchPageProps {
  searchParams: { q: string };
}

export function generateMetadata({
  searchParams: { q },
}: SearchPageProps): Metadata {
  return {
    title: `Search results for ${q}`,
  };
}

const SearchPage = ({ searchParams: { q } }: SearchPageProps) => {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <div className="rounded-2xl bg-card-foreground p-5 shadow-sm">
          <h1 className="line-clamp-2 break-all text-center text-2xl font-bold text-input">
            Search results for &quot;{q}&quot;
          </h1>
        </div>
        <SearchResults query={q} />
      </div>
      <TrendSidebar />
    </main>
  );
};

export default SearchPage;
