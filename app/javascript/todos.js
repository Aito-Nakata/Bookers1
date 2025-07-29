// Todo List JavaScript Interactions

document.addEventListener('DOMContentLoaded', function() {
  // Auto-expand textarea as user types
  const textareas = document.querySelectorAll('.form-input-description');
  textareas.forEach(textarea => {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  });

  // Add loading state to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.type === 'submit' && !this.classList.contains('btn-secondary')) {
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Re-enable button after form submission
        setTimeout(() => {
          this.textContent = originalText;
          this.disabled = false;
        }, 2000);
      }
    });
  });

  // Smooth scroll to form when adding new todo
  const addTodoButton = document.querySelector('.btn-primary');
  if (addTodoButton && addTodoButton.textContent.includes('Add Todo')) {
    addTodoButton.addEventListener('click', function(e) {
      const form = document.querySelector('.todo-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Add confirmation dialog for delete actions
  const deleteButtons = document.querySelectorAll('a[data-method="delete"]');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const todoTitle = this.closest('.todo-item').querySelector('.todo-title').textContent;
      const confirmMessage = `Are you sure you want to delete "${todoTitle}"?`;
      
      if (!confirm(confirmMessage)) {
        e.preventDefault();
        return false;
      }
    });
  });

  // Add keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      const activeForm = document.querySelector('.todo-form');
      if (activeForm) {
        const submitButton = activeForm.querySelector('input[type="submit"], button[type="submit"]');
        if (submitButton) {
          submitButton.click();
        }
      }
    }
    
    // Escape to clear form
    if (e.key === 'Escape') {
      const titleInput = document.querySelector('.form-input-title');
      const descriptionInput = document.querySelector('.form-input-description');
      if (titleInput) titleInput.value = '';
      if (descriptionInput) descriptionInput.value = '';
    }
  });

  // Add hover effects and animations
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
      if (!this.classList.contains('completed')) {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });
  });

  // Focus on title input when page loads
  const titleInput = document.querySelector('.form-input-title');
  if (titleInput && window.location.pathname === '/') {
    setTimeout(() => {
      titleInput.focus();
    }, 100);
  }

  // Add success animation for completed todos
  const toggleButtons = document.querySelectorAll('a[href*="toggle"]');
  toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const todoItem = this.closest('.todo-item');
      if (todoItem) {
        // Add a temporary success animation
        todoItem.style.transition = 'all 0.3s ease';
        todoItem.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
          todoItem.style.transform = 'scale(1)';
        }, 200);
      }
    });
  });

  // Add form validation feedback
  const form = document.querySelector('.todo-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const titleInput = this.querySelector('.form-input-title');
      const title = titleInput.value.trim();
      
      if (!title) {
        e.preventDefault();
        titleInput.focus();
        titleInput.style.borderColor = '#dc3545';
        titleInput.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.1)';
        
        // Remove error styling after user starts typing
        titleInput.addEventListener('input', function() {
          this.style.borderColor = '#e9ecef';
          this.style.boxShadow = 'none';
        }, { once: true });
        
        return false;
      }
    });
  }

  // Add character counter for description
  const descriptionInput = document.querySelector('.form-input-description');
  if (descriptionInput) {
    const maxLength = 1000;
    const counter = document.createElement('div');
    counter.className = 'character-counter';
    counter.style.cssText = `
      font-size: 0.8rem;
      color: #6c757d;
      text-align: right;
      margin-top: 5px;
    `;
    
    descriptionInput.parentNode.appendChild(counter);
    
    function updateCounter() {
      const remaining = maxLength - descriptionInput.value.length;
      counter.textContent = `${remaining} characters remaining`;
      
      if (remaining < 100) {
        counter.style.color = '#ffc107';
      } else if (remaining < 50) {
        counter.style.color = '#dc3545';
      } else {
        counter.style.color = '#6c757d';
      }
    }
    
    descriptionInput.addEventListener('input', updateCounter);
    updateCounter(); // Initialize counter
  }

  // Add progress indicator
  const stats = document.querySelector('.stats-container');
  if (stats) {
    const totalTodos = parseInt(stats.children[0].querySelector('.stat-number').textContent);
    const completedTodos = parseInt(stats.children[2].querySelector('.stat-number').textContent);
    
    if (totalTodos > 0) {
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.style.cssText = `
        width: 100%;
        height: 8px;
        background: #e9ecef;
        border-radius: 4px;
        margin: 20px 0;
        overflow: hidden;
        position: relative;
      `;
      
      const progressFill = document.createElement('div');
      progressFill.className = 'progress-fill';
      const percentage = (completedTodos / totalTodos) * 100;
      progressFill.style.cssText = `
        width: ${percentage}%;
        height: 100%;
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        border-radius: 4px;
        transition: width 0.5s ease;
      `;
      
      progressBar.appendChild(progressFill);
      stats.parentNode.insertBefore(progressBar, stats.nextSibling);
      
      // Add percentage text
      const percentageText = document.createElement('div');
      percentageText.textContent = `${Math.round(percentage)}% Complete`;
      percentageText.style.cssText = `
        text-align: center;
        font-size: 0.9rem;
        color: #6c757d;
        font-weight: 500;
        margin-top: 8px;
      `;
      progressBar.parentNode.insertBefore(percentageText, progressBar.nextSibling);
    }
  }
});

// Add CSS for character counter and progress bar
const style = document.createElement('style');
style.textContent = `
  .character-counter {
    transition: color 0.3s ease;
  }
  
  .progress-bar {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .progress-fill {
    position: relative;
  }
  
  .progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .todo-item {
    transition: all 0.3s ease !important;
  }
  
  .form-input:invalid {
    border-color: #dc3545;
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;
document.head.appendChild(style);