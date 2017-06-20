# Setup dev environment
1. Install node
    - `nvm` is great for switching node versions.
    - `brew` is also great for mac in general, can be used for other dev tools like `git` as well.
    - Or downloading as a binary from https://nodejs.org/en/download/
2. Install yarn
    - This can also be done via `brew`, but the easiest way is `npm install -g yarn` using the recently installed node.
3. Install a git client
    - I reccomend https://www.sourcetreeapp.com
    - Command line is also feasible after installing the `git` binary.
4. Clone this repository.
5. Navigate to this repository, then in the project root
    - Run `yarn` to setup.
    - This will install all dependencies that this project requires.

# Development
1. Refer to the **Content** header in the README as to what code to be written.
2. Broadly speaking this will act as a singleton store that exports functions which either request or modify calorie data.
3. The initial step in constructing this store is also to fetch calorie data from 3 sources
    - calorie database (a google spreadsheet exported as csv and imported as json)
    - local storage (the user's saved store/session of custom (set) meals)
    - instance storage (the current application state)
4. 

# Coding guidelines
1. Use your IDE to auto-lint your code as you write, or run the linter before pushing code.
    - To lint: `yarn run lint`
2. Write unit tests for every function you create, to ensure it works
    - Under the `test` directory, create a file with the same name as the source file.
    - To run tests: `yarn run`
3. Write in typescript
    - https://www.typescriptlang.org/docs/home.html
    - Javascript by nature is loosely-typed; while advantageous for rapid development, can still be confusing at best and buggy at worst.
    - Typescript enforces types via the linter, any lint error should be regarded as a syntax error.
4. Write in ES6 (also called ES2015)
    - If new to javascript, then learning ES6 may be easier as there's no conflicting language standards to learn.
    - I do not have good tutorials to reccomend, although the following links may serve as a starting point:
    - https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software-d670d14ede30
    - https://babeljs.io/learn-es2015/
    - https://egghead.io/courses/learn-es6-ecmascript-2015
