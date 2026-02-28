// Blog Details Page Logic

const params = new URLSearchParams(window.location.search);
const blogId = parseInt(params.get("id"));

const blog = posts.find(post => post.id === blogId);

const container = document.getElementById("blogDetails");

if (container) {
  if (blog) {
    container.innerHTML = `
      <div class="blog-details-card">
        <img src="${blog.image}" alt="${blog.title}">
        <h2>${blog.title}</h2>
        <p class="meta">By ${blog.author} | ${blog.date}</p>
        <div class="blog-full-content">
          ${blog.content}
        </div>
        <a href="../pages/blog.html" class="back-btn">← Back to Blogs</a>
      </div>
    `;
  } else {
    container.innerHTML = "<p>Blog not found.</p>";
  }
}