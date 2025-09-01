# React Demo App

## Project Setup

1. Clone the repository:  
`git clone <your-repo-url>`

2. Navigate to the project folder:  
`cd react-demo-app`

3. Install dependencies:  
`npm install`

4. Start the development server:  
`npm run dev`

5. Run tests:  
`npm test`

## App Overview
- **Login Page:** Enter a phone number starting with `+254`. Only `+254712345678` is valid for this mock login. Successful login redirects to the Main page.  
- **Main Page:** Displays a list of users fetched from a public API with a search bar to filter results. Clicking a user navigates to the Detail page.  
- **Detail Page:** Shows detailed information about the selected user with a back button to return to the Main page.  

## Notes
- Built using React functional components and Hooks.  
- Uses `localStorage` to maintain login state.  
- `node_modules` is ignored; dependencies are installed via `npm install`.  
- Unit tests are included for phone validation using Jest.