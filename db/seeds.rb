# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Clear existing data
Todo.destroy_all

# Create sample todos
todos = [
  {
    title: "Complete the Rails todo app",
    description: "Build a beautiful and functional todo list application with modern UI and responsive design.",
    completed: true
  },
  {
    title: "Deploy to production",
    description: "Set up deployment pipeline and deploy the application to a cloud platform.",
    completed: false
  },
  {
    title: "Add user authentication",
    description: "Implement user registration and login functionality so users can have their own todo lists.",
    completed: false
  },
  {
    title: "Implement real-time updates",
    description: "Add WebSocket support for real-time todo updates across multiple browser sessions.",
    completed: false
  },
  {
    title: "Create mobile app",
    description: "Develop a mobile application version using React Native or Flutter.",
    completed: false
  },
  {
    title: "Write comprehensive tests",
    description: "Add unit tests, integration tests, and end-to-end tests to ensure application reliability.",
    completed: true
  },
  {
    title: "Optimize performance",
    description: "Profile the application and optimize database queries, caching, and frontend performance.",
    completed: false
  },
  {
    title: "Add drag and drop",
    description: "Implement drag and drop functionality to reorder todos and change their priority.",
    completed: false
  }
]

todos.each do |todo_attrs|
  Todo.create!(todo_attrs)
end

puts "Created #{Todo.count} todos!"
puts "Pending todos: #{Todo.pending.count}"
puts "Completed todos: #{Todo.completed.count}"
