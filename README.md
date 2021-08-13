The project name : Would You Rather

It is Udacity scholership 2nd project .
It is a web application has been created using react and Redux 


you can get the Would Your Rather - React Redux app from the following link (https://github.com/magedtolbaslama/Would-you-rather-app)

The app enables  the user the to create polls as a question form  with 2 suggested answers for these questions. For example, "Would you rather, to be front end developper or back end developper"? The would you rather provides  users to answer and view question results (polls) and review others users polls too. it also  allows users to login impersonate fake users already exist in a list (without password) as different users. The backend JSON data is created in  a static JavaScript file that is why  new questions and polls don't actually get saved in real database so do not worruy if the questions and polls were not saved in the would you rather application. therefore the would you rather is only a simulation for  real world scenarios with response and saving processes with time delay . The app provides a a simple  example with pure and clean code, how to combine different React and Redux components and packages together in order to give a meaningful solution project

 Prerequisities:-

1. NodeJS
2. NPM
3. Command Prompt w/ GitBash (windows)
4. Terminal (mac)


 Installation

1. Install Node.js from the following link   (https://nodejs.org/dist/v14.17.4/).

2. Install npm latest versionfrom the following link (https://www.npmjs.com/package/npm).

3. clone or download the would you project as a zip from the following link ().

4. Extract the compressed zipped file and change directory to the project folder. ( CD would_you_rather).

5. Run npm install.

6. Then npm start, run 'npm start' in the command line (windows)

7. Open your browser Google Chrome , Microsoft Edge or Mozilla fireFox .

8. Type the ddress: http://localhost:3000 in browser URL

7. In order to accesses images (user avatars) and the Semantic-UI CSS file from a CDN , You should be connected to the Internet 
 Built With
1. NPM - Package Management
2. ReactJS - The JavaScript framework used


Login

http://localhost:3000/login

There are 3 users list , you can choose one of the 3 users, then click login button without password 

You should login first before you can access any part of the app parts.

Home
At the Home page : there is a list of questions asked by different  users (including the current logged in user that you selected in previous login screen ) in chronological order (newest first). The questions are classified in to 2 tabs with a count of questions numbers for each classification: 

- Unanswered Questions (with question count) 
- Answered Questions (with question count)


When you first login you will visit the home page, then you will see the Unanswered Questions list are shown. 

The home page keeps the tab the user is currently viewing then display this tab again when you login  . So for example, if the you  were looking at Answered Questions, then you decided to review a question (by mouse clicking on the View Polls button) or look at the leaderboard to view other users and then  you come back to Home page ,the would you rather app will display the Answered Questions tab .

when you create a new question, the you will find the Unanswered Questions because it contains the recent added question which you just created and will list it as top.

View Polls

    http://localhost:3000/questions/<question_id>

The view polls page shows the question details

- If you answered the question , The would you rather app will show the poll results and numbers. 
- If you did not answer the question,  The would you rather app will allow the you to pick an answer and submit it .

Poll results or user answers won't be shown to users unless they submit their own answer first.

Poll Results

The Woud you rather app will automatically show Poll results in the form of a total vote count with  percent of user votes hits . including (The currently logged in user's vote (answer)), it's also marked in the vote results.

 Answer Question
If you did not answer a question , then poll results are not shown and the you will need to submit your answer first in order to enable you to see the poll results. you can't submit without choosing an answer (otherwise you get message ).

New Questions

http://localhost:3000/add

You can submit new questions. there will be 2 possible text field options are displayed and both needs to be filled first. 

Leaderboard

http://localhost:3000/leaderboard

The leaderboard page users sorted on their scores then ranked . Scores depends on the sum oftotal created questions and total questions answered.

Logout

When you hit a click on logout button on the top of the page ,the user will be logged out and the login page is displayed.

Redirects, Referrals and 404s

1. The would you rather app login component remembers visited URLs. For example, you may directly try to access the URL http://localhost:3000/add. The would you rather app will first redirect you to http://localhost:3000/login so you will login first. Then the app will automatically redirect you to the original referred URL http://localhost:3000/add.

2. If you tried to access a non-existent URL immediately the app will display a 404 error message.
3. If you tried to access a non-existent question  , the app will redirect you immediately to a 404 error page.



# Would-you-rather-Progect
