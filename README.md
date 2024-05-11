# 3rd Floor CSIS group project
## Table of contents
- [Overview](#overview)
- [Introduction](#introduction)
- [Setting-up](#setting-up)

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

## 2. Configure dependencies
You will need to ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download)
- [Java](https://www.oracle.com/ie/java/technologies/downloads/)
- [PostgreSQL](https://www.postgresql.org/download/)
  - [PgAdmin](https://www.pgadmin.org/download/) recommended, it should install with PostgreSQL

If you know how to set up PATH you can skip to [Step 3](#3-run-configurations)

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


## 3. Run Configurations