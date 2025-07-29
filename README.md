# Todo List Application

A beautiful and modern todo list application built with Ruby on Rails 8, featuring a responsive design, smooth animations, and intuitive user experience.

## Features

- ✅ **CRUD Operations**: Create, read, update, and delete todos
- 🎨 **Modern UI**: Beautiful gradient backgrounds and smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Real-time Interactions**: Dynamic JavaScript enhancements
- 📊 **Progress Tracking**: Visual progress bar and statistics
- ⌨️ **Keyboard Shortcuts**: Ctrl/Cmd + Enter to submit, Escape to clear
- 🔄 **Status Toggle**: Quick toggle between pending and completed
- 💾 **Auto-save**: Form validation and character counting
- 🎯 **Focus Management**: Smart focus handling for better UX

## Screenshots

The application features:
- A clean, modern interface with gradient backgrounds
- Separate sections for pending and completed todos
- Interactive statistics cards showing total, pending, and completed counts
- Smooth hover effects and animations
- Mobile-responsive design that works on all devices

## Tech Stack

- **Backend**: Ruby on Rails 8.0.2
- **Database**: SQLite3 (development), PostgreSQL recommended for production
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with modern gradients and animations
- **Icons**: Unicode emojis for cross-platform compatibility
- **Deployment**: Docker-ready with included Dockerfile

## Prerequisites

- Ruby 3.3.7
- Rails 8.0.2
- Node.js 18+ (for asset compilation)
- SQLite3 (development)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo_app
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Set up the database**
   ```bash
   rails db:create
   rails db:migrate
   rails db:seed  # Optional: adds sample todos
   ```

4. **Start the server**
   ```bash
   rails server
   ```

5. **Visit the application**
   Open http://localhost:3000 in your browser

## Usage

### Adding Todos
- Fill in the title (required) and description (optional)
- Press "Add Todo" or use Ctrl/Cmd + Enter
- Use Escape to clear the form

### Managing Todos
- **Complete**: Click the ✓ button to mark as completed
- **Edit**: Click the ✏️ button to modify
- **Delete**: Click the 🗑️ button to remove
- **Undo**: Click ↩️ to mark completed todos as pending

### Keyboard Shortcuts
- `Ctrl/Cmd + Enter`: Submit the current form
- `Escape`: Clear the form inputs
- Form automatically focuses on page load

## API Endpoints

The application provides RESTful API endpoints:

- `GET /todos` - List all todos (with HTML/JSON support)
- `POST /todos` - Create a new todo
- `GET /todos/:id` - Show a specific todo
- `PATCH /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo
- `PATCH /todos/:id/toggle` - Toggle completion status

## Deployment

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t todo_app .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 80:80 -e RAILS_MASTER_KEY=$(cat config/master.key) --name todo_app todo_app
   ```

### Kamal Deployment (Recommended)

Rails 8 includes Kamal for easy deployment:

1. **Configure your server in `config/deploy.yml`**
2. **Deploy with Kamal**
   ```bash
   kamal setup
   kamal deploy
   ```

### Manual Deployment

1. **Set up your production server**
2. **Install Ruby and dependencies**
3. **Clone the repository**
4. **Run production setup**
   ```bash
   RAILS_ENV=production bundle install
   RAILS_ENV=production rails db:create db:migrate
   RAILS_ENV=production rails assets:precompile
   ```
5. **Start with a process manager** (systemd, supervisor, etc.)

### Environment Variables

For production deployment, set these environment variables:

- `RAILS_MASTER_KEY`: Your application's master key
- `DATABASE_URL`: Your database connection string (if using PostgreSQL)
- `RAILS_ENV=production`

## Development

### Running Tests
```bash
rails test
```

### Code Quality
```bash
bundle exec rubocop  # Ruby linting
bundle exec brakeman # Security scanning
```

### Database Operations
```bash
rails db:reset      # Reset database
rails db:seed       # Add sample data
rails console       # Rails console
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Performance Features

- **Optimized queries**: Efficient database queries with proper indexing
- **Responsive design**: CSS Grid and Flexbox for optimal layouts
- **Smooth animations**: Hardware-accelerated CSS transitions
- **Progressive enhancement**: Works without JavaScript, enhanced with it
- **Mobile-first**: Designed for mobile, enhanced for desktop

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Future Enhancements

- [ ] User authentication and personal todo lists
- [ ] Real-time updates with WebSockets
- [ ] Drag and drop reordering
- [ ] Categories and tags
- [ ] Due dates and reminders
- [ ] Dark mode toggle
- [ ] Export/import functionality
- [ ] PWA support for offline usage

## Support

If you encounter any issues or have questions, please open an issue on the repository or contact the development team.

---

Built with ❤️ using Ruby on Rails 8
