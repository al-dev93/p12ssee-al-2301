# Project 12 Front-end graphical analytics dashboard

## 1. General informations

The folders and files contained in this part of the repository tree relate to the front-end of the project. View the [repository folder for back-end installation](https://github.com/al-dev93/p12ssee-al-2301/tree/p12ssee-us15/sport-see-backend) folder to install the micro API.

## 2. Project setup

### 2.1 Prerequisites

First you have to fork the repository and clone it on your computer. You must also install the micro API before installing the front end, read [README.md for back-end](https://github.com/al-dev93/p12ssee-al-2301/blob/p12ssee-us15/sport-see-backend/README.md) for mor informations.

### 2.2 Front-End installation

Once the repository is cloned on your computer and the micro API is installed, go to your terminal in the folder `/sport-see-frontend` and use the `yarn` command to install the project dependencies.

## 3. Run project

### 3.1 Run with mocked data

#### 3.1.1 Mocked data

Data is mocked in the following json files:

- `activity.json`
- `average-sessions.json`
- `performance.json`
- `users.json`
  These files are saved in the directory `/sport-see-frontend/src/services/mock`

#### 3.1.2 Run in dev mode

- In the terminal, go to the front-end folder `/sport-see-frontend`
- Use the command `yarn dev`
- The browser opens to the homepage, otherwise enter `http://localhost:3000` in the adress bar of the browser
- Click on one of the two users created to access their graphical analysis dashboard of their sports activity

### 3.2 Run with API data

**Note**: make sure the micro API has been installed beforehand.

- In the terminal, go to the back-end folder `/sport-see-backend`
- Use the command `yarn dev`
- In the terminal, a message is displayed warning that the API has started on port 4000
- In the terminal, go to the front-end folder `/sport-see-frontend`
- Use the command `yarn start`
- The browser opens to the homepage, otherwise enter `http://localhost:3000` in the adress bar of the browser
- Click on one user to access their graphical analysis dashboard of their sports activity
