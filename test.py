def create_post():
    post_title = input("Enter the post title: ")
    post_category = input("Enter the post category: ")
    post_rating = input("Enter the post rating (out of 10): ")
    image_url = input("Enter the image URL: ")
    link_url = input("Enter the link URL: ")
    post_description = input("Enter the post description: ")
    author_name = input("Enter the author name: ")
    element_id = input("Enter the element ID: ")

    html_template = f'''
        <div class="post" id="{element_id}">
            <h2 class="post-title">{post_title}</h2>
            <div class="post-details">
                <div class="post-category">{post_category}</div>
                <div class="post-rating">{post_rating}/10</div>
            </div>
            <a href="{link_url}" target="_blank">
                <img class="rounded" src="{image_url}" alt="Product Image" width="100" height="100">
            </a>
            <p class="post-description">
                {post_description}
            </p>
            <div class="post-author">
                <span>Written by:</span>
                <span class="author-name">{author_name}</span>
            </div>
        </div>
    '''

    print(f"\nHere's your HTML:\n{html_template}")

create_post()