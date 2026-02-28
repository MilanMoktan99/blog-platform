// Blog Data (10 Posts)

const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Discover the trends shaping modern web development in 2026.",
    image: "/assets/images/img1.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Web development continues to evolve rapidly with new frameworks, tools, and best practices emerging every year.</p>
      <p>In 2026, AI-assisted coding, serverless architecture, and progressive web applications are becoming mainstream.</p>
      <p>Developers must focus on performance, accessibility, and security to stay competitive.</p>
    `
  },
  {
    id: 2,
    title: "Design Tips for Beginners",
    description: "Simple UI/UX principles to improve your design instantly.",
    image: "/assets/images/img2.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Good design is about clarity and usability.</p>
      <p>Focus on whitespace, typography, and color contrast to improve user experience.</p>
      <p>Always design with the user in mind.</p>
    `
  },
  {
    id: 3,
    title: "Why Blogging Still Matters",
    description: "How blogging builds authority and long-term brand value.",
    image: "/assets/images/img3.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Blogging builds credibility and long-term visibility.</p>
      <p>It helps individuals and businesses establish authority in their niche.</p>
      <p>Consistent blogging improves SEO and brand recognition.</p>
    `
  },
  {
    id: 4,
    title: "Mastering JavaScript",
    description: "Level up your JavaScript skills with practical techniques.",
    image: "/assets/images/img4.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Mastering JavaScript requires understanding core fundamentals.</p>
      <p>Practice ES6 features, asynchronous programming, and modular code structure.</p>
      <p>Build real-world projects to strengthen your skills.</p>
    `
  },
  {
    id: 5,
    title: "Responsive Design Best Practices",
    description: "How to build websites that work on every device.",
    image: "/assets/images/img5.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Responsive design ensures your website works on mobile, tablet, and desktop.</p>
      <p>Use Flexbox, Grid, and media queries effectively.</p>
      <p>Always test on multiple screen sizes.</p>
    `
  },
  {
    id: 6,
    title: "Understanding CSS Flexbox",
    description: "A beginner-friendly guide to mastering Flexbox.",
    image: "/assets/images/img6.jpeg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Flexbox simplifies layout alignment.</p>
      <p>Use justify-content and align-items for positioning elements.</p>
      <p>It makes responsive design easier.</p>
    `
  },
  {
    id: 7,
    title: "Getting Started with APIs",
    description: "Learn how to connect your frontend with external services.",
    image: "/assets/images/img7.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>APIs allow communication between applications.</p>
      <p>Use the Fetch API to send and receive data.</p>
      <p>Always handle errors properly.</p>
    `
  },
  {
    id: 8,
    title: "Improving Website Performance",
    description: "Optimize your website for speed and efficiency.",
    image: "/assets/images/img8.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Compress images and minimize CSS/JS files.</p>
      <p>Use lazy loading for better performance.</p>
      <p>Optimize assets to reduce load time.</p>
    `
  },
  {
    id: 9,
    title: "Accessibility in Web Design",
    description: "Make your website usable for everyone.",
    image: "/assets/images/img9.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Accessibility ensures inclusivity.</p>
      <p>Use semantic HTML and alt text for images.</p>
      <p>Ensure proper color contrast.</p>
    `
  },
  {
    id: 10,
    title: "Building a Strong Developer Portfolio",
    description: "How to showcase your skills effectively.",
    image: "/assets/images/img10.jpg",
    author: "Admin",
    date: "March 2026",
    content: `
      <p>Your portfolio represents your skills.</p>
      <p>Include real projects with live demos.</p>
      <p>Keep the design clean and professional.</p>
    `
  }
];

// blog rendering 

// ===============================
// Detect Current Page
// ===============================
const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname === "/";
const isBlogPage = window.location.pathname.includes("blog.html");

// Latest Blogs (Home Only - 4)
function renderBlogs() {
  const blogsContainer = document.getElementById("blogs-container");
  if (!blogsContainer) return;

  blogsContainer.innerHTML = "";

  const blogsToShow = isHomePage ? posts.slice(0, 4) : posts;

  blogsToShow.forEach(post => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <a href="/pages/blog-details.html?id=${post.id}" class="read-more">
          Read More →
        </a>
      </div>
    `;

    blogsContainer.appendChild(blogCard);
  });
}

// Vertical Blogs Section
function renderVerticalBlogs() {
  const verticalContainer = document.getElementById("vertical-container");
  if (!verticalContainer) return;

  verticalContainer.innerHTML = "";

  // Home → 4 blogs only
  const blogsToShow = isHomePage ? posts.slice(0, 4) : posts;

  blogsToShow.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("vertical-card");

    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="vertical-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <a href="/pages/blog-details.html?id=${post.id}" class="read-more">
          Read More →
        </a>
      </div>
    `;

    verticalContainer.appendChild(card);
  });

  // Add Show More Button ONLY on Home Page
  if (isHomePage) {
    const showMoreContainer = document.createElement("div");
    showMoreContainer.classList.add("show-more-container");

    showMoreContainer.innerHTML = `
      <a href="/pages/blog.html" class="show-more-btn">
        Show More Blogs →
      </a>
    `;

    verticalContainer.appendChild(showMoreContainer);
  }
}

// Run
renderBlogs();
renderVerticalBlogs();