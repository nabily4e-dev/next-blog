import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return {
    date,
    title,
    body,
  };
}

export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}

export async function getSlugs() {
  const files = await readdir("content/posts");
  return files.map((s) => s.replace(/\.md$/, ""));
}
