

<img src="https://image.ibb.co/eccadb/GA_logo.png">

#WDI30 PROJECT 2 - GA Yearbook

##Concept

For this project I created a full-stack RESTful application with authentication.
Given the timeframe I choose to build a Yearbook which was fun and achievable. Users were able to login and register to create and/or view yearbook entries. Users can also edit and delete their profiles only if they are logged in.


##Technologies/Libraries

* Express.js
* Express ejs layouts
* Node.js
* SCSS
* Bootstrap


##Iterations
After setting up my index.js file, I built out the authentication as I thought that it would take the most time. Once the authentication was completed and tested, using the RESTful web services I developed and tested each route at a time using Insomnia.

1. Following the MVC model I created a user model that included a basic schema as well as requiring bcyrpt to hash the passwords.
2. Secondly I built the controller that would handle the HTTP method to register a new user followed by the routes.
3. Once this was completed I then tested the endpoint generating a POST request to check that the registration was successful.
4. After each successful test I then created the view and tested this via the browser.
5. I then repeated a similar process when creating the login, index, show, edit/delete routes.
6. I created the secure routes last as I found it easier to test/iterate my app without having to login to access secure endpoints.


##Screenshots

###Landing page
<img src="https://preview.ibb.co/cwyFdb/yearbook_landing.png">

### Index
<img src="https://preview.ibb.co/i1bbJb/yearbook_index.png">

### Show(Edit/Delete)
<img src="https://preview.ibb.co/mc5xPG/yearbook_show.png">


### Forms(with validation)
<img src="https://preview.ibb.co/n2j7PG/yearbook_form.png">

##Heroku Link
https://hidden-reaches-31565.herokuapp.com/


##What went well
I was able to successfully build the authentication for my app with very few errors. I think the approach I took in developing in stages aided this.


##Challenges
As the concept and scale of my app is fairly simple I could have just used one model. When registering for access to the website I potentially could of collected the data at that point which would be displayed via the yearbook views. In future I will spend a little more time planning out my schemas.

Familiarising myself with EJS syntax was challenging at first, but once I continued writing it became easier to use.


##Feature backlog
I would implement the following features in this app:

1. Responsive design, this was something that I started but was not able to complete during the time.
2. Add more form validation
3. Add a hover animation over the profile images


##Final thoughts
I really enjoyed making my first full-stack application. It was good to learn how the models, views and controllers worked together.
