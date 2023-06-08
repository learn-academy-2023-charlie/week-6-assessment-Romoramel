# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb


    # ---1) class inheritance 
class BlogPostsController < ApplicationController
  def index
    # ---2) Fetch all blog posts from the database
    @posts = BlogPost.all
  end

  def show
    # ---3) Find a specific blog post by its ID and assign it to the @post variable
    @post = BlogPost.find(params[:id])
  end

  def new
    # ---4) Create a new instance of the BlogPost model for the new blog post form
    @post = BlogPost.new
  end

  def create
    # ---5) Create a new blog post with the submitted parameters
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Find the blog post to be edited by its ID and assign it to the @post variable
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Update the blog post with the submitted parameters
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Redirect to the index page after successfully deleting a blog post
      redirect_to blog_posts_path
    end
  end

  # ---9) anything below private cannot be accessed outside of this file
  private

  # ---10) Define the allowed parameters for the blog post (title and content) to prevent mass assignment vulnerability
  def blog_post_params
    params.require(:blog_post).permit(:title, :content)
  end
end
