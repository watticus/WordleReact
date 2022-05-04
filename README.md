# Wordle-React

A Wordle clone made with React

---

## Requirements

You will need a modern web browser, NodeJS, and NPM to run this project.

### Node

- #### Node installation on Windows

   Go to the [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

```bash
  $ sudo apt install nodejs
  $ sudo apt install npm
```

- #### Other Operating Systems
  
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```bash
  $ node --version
  v18.1.0

  $ npm --version
  8.8.0
```

If you need to update `npm`, you can do so using `npm`! Cool right? After running the following command, after running relaunch your command line editor.

```bash
  $ npm install npm -g
```

---

## Install

    $ git clone https://gitlab.com/maximumsnow/wordle-react
    $ cd wordle-react
    $ npm install

## Running the project

```bash
  $ npm start
```

---

## Exercises

### 1. Separate Data from Code

This project contains a set of words within the code to be used for the word being guessed. This means that to add/remove/update the words being used a code file must be edited. This is considered bad practice. If we know data is going to be changed it should be located outside the code so it can be altered without touching code files. This exercise consists of multiple parts.

#### 1. Part 1

Create a file that contains the current word list contained in the project.

#### 1. Part 2

Create an API that returns a random word from the file created in step 1. Remember to create unit tests for your code where possible.

#### 1. Part 3

Refactor this project to contact the API created in Part 2 and use the word provided by the API as the solution to the puzzle.

---

### 2. End-to-End Test Automation

The value of test automation has been proven many times. However, automation requires known and expected outcomes. The randomness of the word to be guessed makes automation difficult. Sometimes to make automation easier a way to test the project needs to be programmatically be added. This exercise consists of multiple parts.

Note: Exercise 1 should be completed first.

#### 2. Part 1

Refactor the project from exercise 1. To accept a URL Query String named test. When the query string test exists, the project should use the value of test for the word being guessed. This way test automation can specify a word to be used for testing

#### 2. Part 2

Using your preferred test automation framework, create end-to-end test automation for the project.


#### 3. Containerization

TBA