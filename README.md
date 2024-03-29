# React Base Frontend
This project accompanies the API project located [here](https://github.com/jayps/base-backend-drf).  
This project is created as a base frontend for future projects. A seed project like this makes it easy to just add new pages as you work on the API without needing to worry about the bits that you need to worry about with every project, such as authentication, user management and reduxy stuff.  

The project was bootstrapped with [CRA](https://reactjs.org/docs/create-a-new-react-app.html), using the RTK Typescript template.

## What's included?
Some batteries:
- Public pages: Home, About Us, Login, Register
- Admin pages: Dashboard, User CRUD.
- Styled components
- RTK used for redux state management. It's really cool! Check it out [here](https://redux-toolkit.js.org/)
- JWT Authentication is used for this application. This does not mean the application is inherently secure from the frontend alone, the API still needs to do security checks.

## TODO
There's still a few things to do on this app:
- Unit tests. 
- Style it properly. The default bootstrap styles are... Ugly.
- Containerize
- Maybe add some k8s config, deployment with Helm or similar so that environment variables can be properly managed.
- Refactor code into smaller components, better for testability.
- Proper docs on generic components, like the data-table and data-form components. 

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install project dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
