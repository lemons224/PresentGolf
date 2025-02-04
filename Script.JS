// Store posts in memory (in a real app, you'd use a database)
let posts = [
    {
        title: "My First Blog Post",
        content: "This is my very first blog post! I'm excited to start sharing my thoughts here.",
        date: "January 29, 2025",
        likes: 0
    }
];

// Function to create a new blog post element
function createPostElement(post, index) {
    const postDiv = document.createElement('div');
    postDiv.className = 'blog-post';
    postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <div class="post-meta">${post.date}</div>
        <div class="post-content">${post.content}</div>
        <button class="like-button" onclick="likePost(${index})">Like</button>
        <span class="likes-count">${post.likes} likes</span>
    `;
    return postDiv;
}

// Function to display all posts
function displayPosts() {
    const blogPosts = document.getElementById('blog-posts');
    blogPosts.innerHTML = '';
    posts.forEach((post, index) => {
        blogPosts.prepend(createPostElement(post, index));
    });
}

// Function to handle post likes
function likePost(index) {
    posts[index].likes++;
    displayPosts();
}

// Function to add new post
function addNewPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Please fill in both title and content!');
        return;
    }

    const newPost = {
        title: title,
        content: content,
        date: new Date().toLocaleDateString(),
        likes: 0
    };

    posts.push(newPost);
    displayPosts();

    // Clear the form
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
}

// Add event listener to submit button
document.getElementById('submit-post').addEventListener('click', addNewPost);

// Initial display of posts
displayPosts();