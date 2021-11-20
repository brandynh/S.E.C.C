# S.E.C.C. (Store, Edit, Create, Collaborate)

# Summary
For this Project, we were asked to create a full stack application that we will be able to showcase to potential employers, the following requirements for this application included:

* The application must use Node.js and Express.js to create a RESTful API.
* The application must use Handlebars.js as the template engine.
* The application must use MySQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Use at least one new library, package, or technology that we haven’t discussed.
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Be deployed using Heroku (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).

The end result was this: <!-- INSERT LINK TO WEBSITE -->

# Getting Started
When coming up with an idea for our project, as a group, we all felt like we were all on the same page when it came to the concept of the project, we felt that this factor allowed us to come up with an idea faster. From day one, we were ready to create our app, as well as assign roles to one another in order to officially get started.

The idea that we came up with for a project was the Project Collaborator, which was app that could: 

- Allow a user to sign up and create their own account
- Allow a user to create, join, edit, and delete a project
- Allow a user to view their projects in their own, personal dashboard
- Allow a user to interact with other projects / posts 


# What Problem are we Trying to Solve?
With our app, we are trying to make project collaborating a lot easier, as well as to create, store, edit, and join a project! 

# Installation of the App
To install and run this app on your own computer, you must follow the following steps in order to get the app to run successfully:

1) In your command line, type in the command "git clone << REPOSITORY HTTPS OR SSH KEYS >>" and the project files should clone into your computer.

2) After your project is cloned, go ahead and open up your project files in Visual Studio Code, or whatever code editor you may be using, you are going to need a few more files in order to get the app running, so here's what you do:

3) In your integrated terminal, make sure to type in the command "npm install" or "npm i" to download the necessary files, in this case the 'node_modules', to get this app running successfully. 

4) After your node_modules have successfully downloaded into your project folder, go ahead and create an .env file (if it has not been created for you), after that, you must input the following: 
    - DB_NAME= secc_db
    - DB_PASSWORD= * type in your MySQL password if you have one, if not, leave this  blank * 
    - DB_USER= root

5) After setting up your .env file, in your integrated terminal, log into MySQL by using the command "mysql -u root -p" and type in your password if you have one, the following should come up after you have logged in: 
    <!-- SCREENSHOT HERE -- >

6) Then, after logging in, type into the integrated terminal and type in the command "source db/schema.sql" this will source your schema file which is needed to run the app! After successfully running the file, you may logout of MySQL using the command "quit" or "exit" 

7) After logging out, type in the following command "npm run seed" which should run ALL the seeds in the seeds file that is needed to run the app. The following should come up after you have ran the seeds:

<!-- SCREENSHOT HERE -->

8) Last, but not least, type in the command "node server.js" into your integrated terminal, if everything has run successfully, then you should get a message along the lines of "app listening on server", which you can navigate to 'localhost:3001' on your preffered web browser, 

And there you go! 


# What we Learned / Final Thoughts

* WORKING WITH BULMA: For this project, we were asked to use a new package, library, or technology that has not been discussed in class in order to help us create this app, for this, we decided to use BULMA. BULMA is a CSS framework that allows the user to style their webpage to make it look cleaner and more professional. Using a new CSS framework was not all that difficult to use, but just like anything else, there were some bumps along the way when it came to getting it to run, some things would fly off the page when edited or some things would not even appear on the page. After working with BULMA for this project, we feel more confortable with using a framework!


* WORKING WITH HANDLEBARS: Since Handlebars was a VERY NEW concept to us, working with it seemed a little tricky at first, we did have some Handlebars that we could reference from lesson activities of course, but creating them from scratch felt like somewhat of an obstacle. The more that we worked with handlebars, the easier it sort of got. Because we used Handlebars as our template engine throughout this whole process, we know feel more familiar with them as well as more comfortable with working with them!


<!-- YOU GUYS ARE MORE THAN WELCOME TO TYPE IN WHAT Y'ALL LEARNED  -->



# Screenshots / App Demo
<!-- WE COULD INSERT SOME SCREENSHOTS OF THE APP AS WELL AS A SHORT GIF ABOUT HOW 
THE APP WORKS -->
