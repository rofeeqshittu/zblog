# ZBlog - Simple Express Blog Application

A lightweight blog application built with Express.js and EJS templating engine. ZBlog allows users to create, read, update, and delete blog posts through a clean and intuitive interface.

![ZBlog Screenshot](/img/homeScreen.png)

## Features

- **Create Posts**: Add new blog posts with titles and content
- **View Posts**: See all posts on the homepage
- **Edit Posts**: Modify existing post content
- **Delete Posts**: Remove unwanted posts
- **Responsive Design**: Works well on desktop and mobile devices

![ZBlog Screenshot](/img/createPageScreen.png)


## Tech Stack:

- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Data Storage**: In-memory array (can be extended to use a database)
- **Styling**: Custom CSS
- **Routing**: Express.js router
- **Form Handling**: Express.js body-parser

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/rofeeqshittu/zblog.git
   cd zblog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   node index.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
zblog/
├── index.js                  # Main application file
├── package.json              # Node.js dependencies
├── public/                   # Static assets
│   └── css/
│       └── style.css         # CSS styles
└── views/                    # EJS templates
    ├── index.ejs             # Homepage template
    ├── createPost.ejs        # Create post form
    └── edit.ejs              # Edit post form
```

## Usage

### Creating a New Post

1. Click the "Create ZBlog post" button on the homepage
2. Fill in the title and content fields
3. Click "Submit Post" to publish

### Editing a Post

1. Find the post you want to edit on the homepage
2. Click the "Edit Post" button
3. Modify the title and/or content
4. Click "Save Changes" to update

### Deleting a Post

1. Find the post you want to delete on the homepage
2. Click the "Delete Post" button

## Development

### Adding a Database

The current implementation uses an in-memory array to store posts. 
Future Dev. would include a database....


### Future Enhancements

- User authentication and accounts
- Comment system
- Post categories and tags
- Rich text editor
- Image uploads
- Search functionality
- Pagination

## Algorithms

The application uses several key algorithms:

- **Post Creation**: Generates unique IDs and timestamps for new posts
- **Post Retrieval**: Finds posts by ID with O(n) time complexity
- **Post Updating**: Updates specific posts while preserving metadata
- **Post Deletion**: Filters posts array to remove specific posts

## License

[MIT License](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

Rofeeq Shittu - [@rofeeqshittu](https://github.com/rofeeqshittu)

## Acknowledgments

- Capstone project of Web Dev course (Dr. Angebla Yu)
- Express.js team for the excellent web framework
- EJS team for the powerful templating engine
- Node.js community for the incredible ecosystem