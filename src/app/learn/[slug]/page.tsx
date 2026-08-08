import { learnPageList, learnPages } from "@/app/data/learnPages";
import LearnArticle from "@/components/LearnArticle";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learnPageList.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = learnPages[slug];
  if (!page) return {};
  return createPageMetadata({
    path: `/learn/${page.slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function LearnSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = learnPages[slug];
  if (!page) notFound();
  return <LearnArticle page={page} />;
}
