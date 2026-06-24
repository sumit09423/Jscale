import BlogDetailClient from "./BlogDetailClient";
import { getBlogPost } from "../blogData";

async function getArticle(blogId) {
  return getBlogPost(blogId);
}

export async function generateMetadata({ searchParams }) {
  const blogId = searchParams?.blog_id || "26";
  const article = await getArticle(blogId);

  return {
    title: article.title
  };
}

export default async function ViewBlogPage({ searchParams }) {
  const blogId = searchParams?.blog_id || "26";
  const article = await getArticle(blogId);

  return <BlogDetailClient article={article} />;
}
