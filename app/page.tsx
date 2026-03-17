import { TrendingBar } from "@/components/TrendingBar";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CommentsSection } from "@/components/CommentsSection";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";

export default function Page() {
  return (
    <div>
      <TrendingBar />
      <ArticleLayout />
      <CommentsSection />
      <Footer />
      <StickyCtaBar />
    </div>
  );
}
