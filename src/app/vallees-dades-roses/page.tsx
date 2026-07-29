import CategoryLanding from "@/components/CategoryLanding";
import { createMetadata } from "@/lib/seo";
import { getCategory } from "@/lib/tours";

const category = getCategory("dades-roses")!;

export const metadata = createMetadata({
  title: category.title,
  description: category.description,
  path: category.path,
});

export default function DadesRosesCategoryPage() {
  return <CategoryLanding category={category} />;
}
