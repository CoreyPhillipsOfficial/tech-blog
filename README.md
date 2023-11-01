# tech-blog

## This application is a CMS-style blog where developers can publish blog posts, and comment on other developers' blog posts. It follows the Model-View-Controller paradigm. Handlesbars.js is the templating language. The ORM is Sequelize. Express-session npm is used for authentification.

<!-- Link: <a href="https://coreyphillipsofficial.github.io/javascript_quiz/">Javascript Quiz</a>  -->


## Installation

To install and run the Tech-Blog application:

Clone the repository to your local machine.<br>
Navigate to the application's root directory.<br>
Run `npm install` in your terminal to install the required packages.<br>
Set up the database by running `mysql -u <username> -p`. Replace `<username>` with your MySQL username. Enter your password when prompted.<br>
When you are in the MySQL shall, run `source config/schema.sql` to create the database.<br>
Exit the MySQL shell by running `exit`.<br>
Create a .env file in the root directory of the project. Include the following:<br>
```DB_NAME='tech_blog_db'
DB_USER='<your_mysql_username>'
DB_PASSWORD='<your_mysql_password>'
SESSION_SECRET='<your_session_secret>'```

Run `npm start`.<br>
In your web browser, visit http://localhost:3001.<br>
You've now accessed the Tech-Blog!


## Usage

The user visits the website, clicks the start button, and must take the quiz in the alotted amount of time.

## Credits

I receieved guidance on this application from my instructor, JD Tadlock in class. I also referred to ChatGPT to help me figure out where my syntax was incorrect.

## License

Please refer to the LICENSE in the repo.