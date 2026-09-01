import CategoryLanding from "@/components/CategoryLanding";
import { createMetadata } from "@/lib/seo";
import { getCategory } from "@/lib/tours";

const category = getCategory("toubkal")!;

export const metadata = createMetadata({
  title: category.seoTitle,
  description: category.seoDescription,
  path: category.path,
});

export default function ToubkalCategoryPage() {
  return <CategoryLanding category={category} />;
}
