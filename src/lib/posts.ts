import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface FAQ {
  question: string;
  answer: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  author?: string;
  faqs?: FAQ[];
}

export interface Post extends PostMeta {
  content: string;
}

const postsDir = path.join(process.cwd(), "content/posts");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as PostMeta[];
}

export function getPostMeta(slug: string): PostMeta | null {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ? String(data.date) : "",
    tags: data.tags ?? [],
    image: data.image,
    author: data.author ?? "Pet Health Guide Team",
    faqs: Array.isArray(data.faqs) ? data.faqs : undefined,
  };
}

export function getPost(slug: string): Post | null {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ? String(data.date) : "",
    tags: data.tags ?? [],
    image: data.image,
    author: data.author ?? "Pet Health Guide Team",
    faqs: Array.isArray(data.faqs) ? data.faqs : undefined,
    content,
  };
}
