class Admin::OverviewController < Admin::BaseController
  def index
    @num_users = User.all.count
    @shirt_size = shirt_size
    @trending_topics = trending_topics
  end
end

private
def shirt_size
  {
    'S' => User.where(shirt_size: 'S').count,
    'M' => User.where(shirt_size: 'M').count,
    'L' => User.where(shirt_size: 'L').count,
    'XL' => User.where(shirt_size: 'XL').count,
    '2XL' => User.where(shirt_size: '2XL').count,
    '3XL' => User.where(shirt_size: '3XL').count,
    '4XL' => User.where(shirt_size: '4XL').count,
    '5XL' => User.where(shirt_size: '5XL').count,
    '6XL' => User.where(shirt_size: '6XL').count
  }
end

def trending_topics
  Topic.joins(:users)
    .group("topics.id")
    .order("count(users.id) desc")
    .limit(3)
end
