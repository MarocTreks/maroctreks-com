import CategoryLanding from "@/components/CategoryLanding";
import { createMetadata } from "@/lib/seo";
import { getCategory } from "@/lib/tours";

const category = getCategory("anti-atlas")!;

export const metadata = createMetadata({
  title: category.seoTitle,
  description: category.seoDescription,
  path: category.path,
});

export default function AntiAtlasCategoryPage() {
  return <CategoryLanding category={category} />;
}
