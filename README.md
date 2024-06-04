# React Hooks Proof of Concept

## 0. Prerequisites
Before getting started, ensure you have the following software installed on your machine:

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **npm**: Node package manager, which is used for managing project dependencies. Typically, npm is installed along with Node.js.
- **Git CLI**: Command-line interface for Git, used for cloning repositories and managing version control.

## 1. Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Iovva/framework-design
   ```
2. **Navigate to the project directory**:
   ```bash
   cd framework-design
   ```
3. **Install project dependencies**:
   ```bash
   npm install
   ```

## 2. Running the Application

To run the application, use the following command in your terminal:
```bash
npm run start
```
This command starts the development server. Once the server is running, you can access the application in your web browser at:
```
http://localhost:8000/
```

## 3. Understanding Hooks

### 3.1 Overview
React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.

### 3.2 Key Hooks
- **useState**: Allows you to add state to your functional components.
  ```javascript
  const [state, setState] = useState(initialState);
  ```
- **useEffect**: Performs side effects in function components, such as data fetching
  ```javascript
  useEffect(() => {
    // Your side effect code here
  }, [dependencies]);
  ```
- **useContext**: Allows you to access and manipulate context data in your components.
  ```javascript
  const value = useContext(MyContext);
  ```

## 4. What This Application Offers

This application provides several basic examples demonstrating the use of the following React Hooks:

- **useEffect**; 
- **useState**; 
- **useContext**
