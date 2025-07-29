class Todo < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }
  validates :description, length: { maximum: 1000 }
  
  scope :completed, -> { where(completed: true) }
  scope :pending, -> { where(completed: false) }
  scope :recent, -> { order(created_at: :desc) }
  
  def toggle_completed!
    update!(completed: !completed)
  end
  
  def status
    completed? ? 'Completed' : 'Pending'
  end
end
