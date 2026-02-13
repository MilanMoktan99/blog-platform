const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Discover the trends shaping modern web development in 2026.",
    image: "/assets/images/img1.jpg"
  },
  {
    id: 2,
    title: "Design Tips for Beginners",
    description: "Simple UI/UX principles to improve your design instantly.",
    image: "/assets/images/img2.jpg"
  },
  {
    id: 3,
    title: "Why Blogging Still Matters",
    description: "How blogging builds authority and long-term brand value.",
    image: "/assets/images/img3.jpg"
  },
  {
    id: 4,
    title: "Mastering JavaScript",
    description: "Level up your JavaScript skills with practical techniques.",
    image: "/assets/images/img4.jpg"
  }
];

// static blogs rendering

const blogsContainer = document.getElementById("blogs-container");

function renderBlogs() {

    if (!blogsContainer) return;
  
  posts.forEach(post => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    `;

    blogsContainer.appendChild(blogCard);
  });
}

renderBlogs();

const verticalContainer = document.getElementById("vertical-container");

function renderVerticalBlogs() {
  posts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("vertical-card");

    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="vertical-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    `;

    verticalContainer.appendChild(card);
  });
}

renderVerticalBlogs();
