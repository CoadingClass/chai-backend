# Chai aur Backend

This is a video seriese on chai aur Backend

# Tnisalize npm first

npm init

# Create readme file

# Inisalize our git Reprogetry

git init
git add .
git commit -m "commiting git file first time"
to change branch ==> git branch -M main
set your origen where you want to push your code ==> git remote add origin https://github.com/CoadingClass/chai-backend.git

now you can push your code on git ==> git push -u origin main

# Cteting file OR Setup file structore

first create file name ==> mkdir public
inside public folder create folder name ==> temp
inside temp folder create file name .gitkeep to trac your empty folder in git repojetry ==> .gitkeep
create gitignore file in root folder ==> .gitignore
use git ignore generator to getrate git ignore file code ==> .gitignore
create env file in root folder to keep your impotent variable securly ==> .env
create env.sample file in root folder to shere .env code to student ==> .env.sample
create src folder int root folder ==> mkdir src
go inside src folder and create these file ==> touch app.js constants.js index.js

do some modifacation in packeg.json file add ==> "type": "module",
now inside script object remove every thing and add ==> "dev": "nodemon src/index.js"

- if you are using dotenv and using import keyword then configer like this
  ==> "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"

now create folder inside src folder ==> mkdir controllers db middlewares models routes utils

install prettier as dev devDeendences ==> npm i D- prettier
create prettierrc file in root folder ==> touch .prettierrc
create prettierignore file in root folder ==> touch .prettierignore

# Database connection =================

First go to .env file and Define port and mongodburl ==>
PORT=8000
MONGODB_URI= mongodb+srv://govind:kusum123@cluster0.5fofhsd.mongodb.net/

# Now install three packegs (mongoose, express, dotenv)

==> npm i mongoose express dotenv

# Importent note

Whenever you connect with database always use (try Catch) and (async await)

you can diractly write database connection code in yor src/index.js file OR else you can write dataBase Connectio Code in your src/db/index.js file
