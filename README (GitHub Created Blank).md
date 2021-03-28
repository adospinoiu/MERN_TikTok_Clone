# MERN_TikTok_Clone


#1 Create the first component of the build: Video Component

#2 Added the css to the Vidoe.css file

#3 Created the second and third component of the build: Video Footer and Video Sidebar

#4 Install Material-Ui on the front-end (i.e. in the tiktok-clone folder)

#5 Install react-ticker on the front-end

#6 Complete the front-end first ... then start work on the back-end. Front-end complete with the completion of the components and the addition of the props.

#7 NPM Init to create the package.json in the tiktok-backend folder

#8 Add to the package.json file the 'script' to "start": "node server.js"

#9 Install Express and Mongoose by running npm i express mongoose to establish the server. Installed in tiktok-backend folder

#10 On MongoDB website ... create new project, create cluster (free option) ... Give Project Name, however Cluster Name (can be left as default Cluster0)

#11 Make sure to add (to the back-end package.json file) the line of "type": "module". This will give the ability to use ES6 (i.e. import) otherwise, on the back-end would have to use 'const' and 'require'

#12 Install nodemon on the back-end to help with the development

#13 Create the first api endpoint: get (simple '/') on server.js that sends back hello world

#14 Create the second api endpoint: get (/v1/posts) on server.js that pulls the data from the data.js file

#15 On Mongod Atlas set-up the 'Database Access' by adding a new user and saving the password

#16 On Mongod Atlass set-up the 'Network Access' and the connect on the cluster by grabbing the url

#17 Set-up the DB connection on server.js

#18 Create dbModel.js file and create a Schema to tell the database what to expect

#19 Create data.js file that has a mock-up of what data will look like

#20 Update server.js file and add another API end-point (the post) to test pushing data to database

#21 Update server.js file and add an API end-point (the get) to retrieve the data from the database

#22 Set-up the app on Heroku.com to initialize where the back-end will get deployed

#23 Problems encountered deploying back-end to Heroku
    1) had to do 'heroku run npm install' in the terminal on the back-end
    2) had to have 'process.env.PORT || 9000' in the server.js file on the back-end

#24 Back-end now deployed to Heroku. Next deploy the front-end to Firebase
