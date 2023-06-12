# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: cohord_id

Researched answer: cohort_id

2. Which RESTful routes must always be passed params? Why?

Your answer: update and destroy?

Researched answer: update and destroy

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model. This command is used to generate a model.
rails generate controller. This command is used to generate a controller and rails generate migration. This command is used to generate a migration file

Researched answer: rails generate model. This command is used to generate a model.
rails generate controller. This command is used to generate a controller and rails generate migration. This command is used to generate a migration file

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

Controller Method: index. This would display a list of all students.

action: "POST" location: /students

Controller Method: create. This would create a new student record based on the data submitted in the request.

action: "GET" location: /students/new

Controller Method: new. This would display a form to create a new student

action: "GET" location: /students/2

Controller Method: show. This would retrieve and display the details of the student with an ID of 2.

action: "GET" location: /students/2/edit

Controller Method: edit. This would display a form to edit the details of the student with an ID of 2.

action: "PATCH" location: /students/2

Controller Method: update. This would update the details of the student with an ID of 2 based on the data submitted in the request.

action: "DELETE" location: /students/2

Controller Method: destroy. This would delete the student with an ID of 2.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user, I want to be able to create a new task with a title and description.
As a user, I want to be able to view a list of all my tasks.
As a user, I want to be able to mark a task as completed.
As a user, I want to be able to edit the title and description of a task.
As a user, I want to be able to delete a task that is no longer needed.
As a user, I want to be able to prioritize tasks by setting due dates.
As a user, I want to be able to filter tasks based on their completion status.
As a user, I want to be able to assign categories or labels to my tasks for better organization.
As a user, I want to be able to set reminders or notifications for important tasks.
As a user, I want to be able to search for specific tasks using keywords or tags.