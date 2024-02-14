# Project name HoneyComb Havoc Frontend



## Description

A user profile page for an imaginary game called HoneyComb Havoc, with a React frontend that connects directly to a backend application hosted in the cloud on AWS Beanstalk.
Direct url to the backend application is http://honeycombback-env.eba-7gcu2wx7.us-west-2.elasticbeanstalk.com (specified directly through proxy in package.json)

Any entered data visible in the browser URL will be saved and updated to a remote mongoDB database.

# What was your motivation?

I wanted to learn and try on React as a frontend environment as well, and learn more on my recently applied javascript learnings. Also i want to develop more and nicer GUI:s aiming to be good, empirical fullstack environments soon (terminal UI:s are no longer an option)

# What problem does it solve?
It creates a simple but nice and easily understood GUI for a backend application hosted in the cloud. It also saves and updates data to a remote mongoDB database.  
If wanted, it can be used locally as well and simply just change the proxy in package.json to the local backend server.

# What did you learn?
I learned how to connect two separate applications (first time creating two totally separate applications in IntelliJ) with totally different languages, and one actually hosted in the cloud and one isnt! And that it actually isnt that hard to connect two different applications with each other. 

It aint that hard to actually break down and divide applications down to its more basic-basic functions and actual needs (meant in a kind way) and make them work together with one another.  
Maybe a lesson for us humans and life as well?  

I also learned how to use React and how to create a simple but nice GUI with it.

# Installation and usage
- Copy repository to your local machine, open in IDE and from there in CLI navigate to project root (using cd commands) type npm start in CLI to start the application.
- Open your browser and (if it doesnt open up automatically, which it should) navigate to localhost:3000 to see the application in action.
# Credits
Classmates from school, family, myself, Mighty Duck rubber duck and some chatGPT for debugging.

# License

🏆 MIT License

# Badges

![Static Badge](https://img.shields.io/badge/Javascript_64%25-orange)  
![Static Badge](https://img.shields.io/badge/CSS_21%25-blue)  
![Static Badge](https://img.shields.io/badge/HTML_14%25-black)

# Features
- A simple, yet functional GUI of a User profiles page (you are an admin)
- As an admin you have full CRUD functionality on every user profile.
- Saves and updates data to a mongoDB remote server.