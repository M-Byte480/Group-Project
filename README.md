# 3rd Floor CSIS group project

## Table of contents
- [Overview](#overview)
- [Introduction](#introduction)
- [Setting-up](#setting-up)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Configure dependencies](#2-configure-dependencies)
    - [2.1 Setup PATH](#21-setup-path)
    - [2.2 Select Local or System Path to setup](#22-select-local-or-system-path-to-setup)
  - [3. Database Setup](#3-database-setup)
  - [4. Run Configurations](#4-run-configurations)
    - [4.1 Frontend](#41-frontend)
    - [4.2 Backend](#42-backend)
    - [4.3 Backend run configuration](#43-backend-run-configuration)
    - [4.4 Running to test](#44-running-to-test)

# Overview
This project is the goal to expand our knowledge on various features of a full-stack application. Including streaming, file management, security, UI/UX, responsiveness, various frameworks, monolithic and micro-frontend architectures, etc.

Begun this project with some of my course mates, to be a sandbox to be able to experiment and mainly just to learn 😃

# Introduction
The project's first goal is to implement a fullstack implementation of a streaming service. The project shall be divided into two main parts:
- Frontend
- Backend
    - With a database

Just to keep it simple, we will learn about file transfer, different protocols and how to implement them, and how to secure them. Going to try and abide by industry standards.

To keep it simple, we will implement a music/video streaming service. We will use (but not limited) to the following technologies:
- Angular for frontend
- Springboot for backend
- PostgreSQL for starting DB and potentially look into ORM DBs

**Future techs to learn about**
- Docker
- Kubernetes
- Microservices
- React
- Rust based backend
- HTMX

# Setting-up
## 1. Clone the repository
```bash
git clone https://github.com/M-Byte480/3rd_floor_csis/
```
Once the repo is cloned, you will noticed how we have each directory nested within each other. Instead of opening existing project (assuming you use IntelliJ), in 2 separate IDEs, we will configure to be able to run the two instances within the same IDE.

[Jump back to top](#table-of-contents)
## 2. Configure dependencies

You will need to ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download)
- [Java](https://www.oracle.com/ie/java/technologies/downloads/)
- [PostgreSQL](https://www.postgresql.org/download/)
  - [PgAdmin](https://www.pgadmin.org/download/) recommended, it should install with PostgreSQL

If you know how to set up PATH you can skip to [Step 3](#3-database-setup)

### 2.1 Setup PATH
Type `path` in your search bar and select _Edit Environment Variables_
![img.png](resources/path_popup.png)



### 2.2 Select Local or System Path to setup
In the screenshot below you can see we you have two different types of paths. One is for the user account currently logged in, the other is for every user, aka System.
![img.png](resources/paths.png)

Your paths should lead you to two places:
- A: Directory for `.exe` files
- B: Directly to an `.exe` file

It should end up looking something like this:
![img.png](resources/path_similarities.png)

To test it successfully working you can open up `cmd` and just type in the following 3 commands:
```bash
node -v
npm -v
ng v
```
![img.png](resources/successful_setup.png)

[Jump back to top](#table-of-contents)
## 3. Database Setup
1. Once postgres is installed, find `C:\Program Files\PostgreSQL\16\bin` and add this path to your PATH. This will allow you to use `psql` in the command line.
2. Open CMD and type `pg_ctl init -D db` to create a new database cluster in the directory `db`
3. Start the database cluster by typing `pg_ctl -D db start`
   - Note: If you get an error, you may need to clear an instance of the database running on localhost and port 5432.

_You may need to edit the `postgresql.conf` file to get it running, by defining which port and `localhost` address to run on. If uncommenting the two doesn't work, change the IP address to `127.0.0.1` from `localhost`_
![img.png](resources/postgres_conf.png)

Once running, make sure you do not close the terminal window. The instance is only running while the terminal is open. You can now connect to the DB via pgAdmin, psql in terminal, or any other DB management tool such as the one in IntelliJ.

[Jump back to top](#table-of-contents)

## 4. Run Configurations
### 4.1 Frontend
Once you have confirmed you can access `npm` and `ng` in the command line, you can now open up IntelliJ and configure the run configurations.  
Firstly, please navigate into the `frontends/angular` directory and run `npm install` to install all the dependencies.

Next, beside the run button there are configurations. 
![img.png](resources/edit_configurations.png)

Click on the `+` and select `npm` from the list. Then setup the configuration as follows:

![img.png](resources/run_config.png)

Give it any name you want. After trying to run it, if done correctly this is what you should see:
![img_1.png](resources/angular_successfully_ran.png)

### 4.2 Backend
`Ctrl + Shift + Alt + S` to open the Project settings window. Make sure you have an SDK setup. You can use the Java you downloaded or you can download one with the current window open:  
</br>
![img.png](resources/img.png)

Now navigate to Module settings, here we will need to let the IDE know that we have a sub project inside our project. Hit the `+` and select `Import Module`. Now follow through the screenshots:
</br>

![img_2.png](resources/img_2.png)
</br>
</br>
![img_3.png](resources/img_3.png)
</br>
</br>
![img_4.png](resources/img_4.png)
</br>
</br>
![img_5.png](resources/img_5.png)

Now you have setup the folder structure interpretation for the IDE. If you ever want to change your output directory, or the compiler is checking some folder which it shouldn't, this is where you can change it.

### 4.3 Backend run configuration
Once the module is setup, it should be auto detected, if not then you can manually set it up as the following:
</br>
![img_1.png](resources/img_1.png)
Hit the `+` and select `SpringBoot`. Now follow through the screenshots:
</br>
![img_6.png](resources/img_6.png)
Setup the names as you wish and the project's root package. This is where the main class is located.
</br>
Hit `Modify options` and double check these are ticked:
![img_7.png](resources/img_7.png)
</br>
</br>

Once you have the `Use environment variables` ticked, you can now add the following environment variables:
```
PORT=8080;dbName=yourNameForDB;dbPass=yourPasswordForDB
```
It should look something like this:
![img_8.png](resources/img_8.png)

### 4.4 Running to test
If your console looks like this, with the last line being `Started Application in 2.5 seconds (process running for 3.456)`, then you have successfully setup the backend.
</br>
![img_9.png](resources/img_9.png)

Now you are ready to start developing :)

[Jump back to top](#table-of-contents)