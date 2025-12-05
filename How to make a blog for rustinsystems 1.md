# How to Add a New Blog Post

This guide explains how to add a new article to the Engineering Log.

## 1. Create a New File

Navigate to the `content/posts` directory and create a new Markdown file.

- **Path**: `content/posts/your-post-title.md`
- **Filename**: Use hyphens for spaces (recommended for URLs), e.g., `optimizing-linux-kernel.md`.

## 2. Add Frontmatter

Copy and paste the following template at the very top of your new file. This metadata is required.

---

title: "Your Post Title Here"

date: "2025-12-06"

excerpt: "A brief summary of the post that appears on the blog index page (1-2 sentences)."

tags: ["Category1", "Category2", "Tech Stack"]

---

## 3. Write Your Content

Write your article using standard Markdown below the second `---`.

### Formatting Tips

- Use `##` for main section headers.
- Use `###` for subsections.
- Use `**bold**` for emphasis.
- Use `code` for inline code.
- Use triple backticks for code blocks: ```bash echo "Hello World" ```

### Adding Images

1. Place your image file in the `public/images` folder (create it if it doesn't exist).
2. Reference it in your markdown like this: `![Description of image](/images/your-image.png)`

## 4. Verify

1. Run the development server: `npm run dev`
2. Go to `http://localhost:3000/blog`
3. Your new post should appear automatically in the list.