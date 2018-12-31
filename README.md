# Constructables
An Instructables-inspired DIY project-sharing web app. 

[Constructables Live](https://constructables-dac.herokuapp.com/#/)

## The Front-End 

Built using a React, Redux, and JavaScript frontend, the site renders and updates dynamically.
Modular architecture is utilized to minimize components to improve readability, reusability and scaling potential. 

## The Back-End 

Built using a Ruby on Rails backend that communicates with a PostgreSQL database and interacts with Amazon Web Services S3 to store and retrieve user uploaded images. Nested attributes were used to create Steps each time a Project is created.

## Features 

### User Auth 
Login and signup using BCrypt encryption with contextual error messages. Both a front-end and back-end authentication system was set up to give the users a tailored and personal experience on the app.

### Projects
Projects can be created, edited, and deleted by users.  Users can add image files to projects and steps and edit them using the Quill-React text editor to style their text to their hearts content.

### Comments
Users can add, edit, and delete comments.  Comments are only creatable when logged in.  Comments are only editable when logged in as the author of the original comment.
