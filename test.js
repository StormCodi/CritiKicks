function create_post() {
    const post_title = prompt("Enter the post title: ");
    const post_category = prompt("Enter the post category: ");
    const post_rating = prompt("Enter the post rating (out of 10): ");
    const image_url = prompt("Enter the image URL: ");
    const link_url = prompt("Enter the link URL: ");
    const post_description = prompt("Enter the post description: ");
    const author_name = prompt("Enter the author name: ");
    const element_id = prompt("Enter the element ID: ");
  
    const html_template = `
      <div class="post" id="${element_id}">
        <h2 class="post-title">${post_title}</h2>
        <div class="post-details">
          <div class="post-category">${post_category}</div>
          <div class="post-rating">${post_rating}/10</div>
        </div>
        <a href="${link_url}" target="_blank">
          <img class="rounded" src="${image_url}" alt="Product Image" width="100" height="100">
        </a>
        <p class="post-description">
          ${post_description}
        </p>
        <div class="post-author">
          <span>Written by:</span>
          <span class="author-name">${author_name}</span>
        </div>
      </div>
    `;
  
    console.log(`\nHere's your HTML:\n${html_template}`);
  }
  