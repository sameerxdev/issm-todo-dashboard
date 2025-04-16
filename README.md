# Todo Dashboard

I built this Todo Dashboard built with React, TypeScript, and Tailwind CSS. It includes user login using Context API, todo management with localStorage, analytics with a pie chart, and filter controls.

## 1. **Login Page**

- I create a simple login screen with two inputs username and password.
- Login Credentials username: `admin`, password: `admin123`
- On successful login, sets username and login state in context and localStorage and it is navigated to home screen.
- Unauthorized users are redirected to login if they try to access the home.

---

### 2. **Todo List**

- Users can:
  - Add new todos.
  - Mark todos as completed.
  - Delete todos.
- A todo object has three field (id: number, text: string, completed: boolean)
- All todos are stored in localStorage.

---

### 3. **Analytics Panel**

I have displayed these stats:

- Total todos
- Completed and incomplete (as numbers)
- Completed and incomplete (in pie chart)

---

### 4. **Filter Controls**

I have provided a filter bar with the following options:

- All
- Completed
- Incomplete

---

### Tech Requirements

I used

- React (with functional components)
- TypeScript (used basic types and interfaces)
- Tailwind for styling
- Recharts for pie chart
- react-router-dom for routing

---

## Submission Checklist

- `README.md` with setup steps
- Folder structure: `src/[components, pages, context]`,
- Login page
- Todo dashboard
- LocalStorage integration
- Analytics panel
- Filter logic
- Type safety with TypeScript

---

## Bonus (Optional)

- I used Context API for user state sharing and local storage for todos and user data.
- Implemented a logout button.
- Added form validation (e.g., empty todo prevention).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
