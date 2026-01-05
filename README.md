# React Projects Portfolio

[![React](https://img.shields.io/badge/React-18.2.0%20%7C%2019.2.0-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.x%20%7C%207.x-646CFF?logo=vite)](https://vitejs.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.2.2-764ABC?logo=redux)](https://redux-toolkit.js.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

A comprehensive collection of React applications built with Vite, showcasing progressive learning from basic components to advanced state management with Redux Toolkit. Each project demonstrates specific React concepts, patterns, and real-world application development skills.

## 🌟 Overview

This portfolio contains **7 React projects** that progressively build upon each other, demonstrating a complete learning path from React fundamentals to advanced state management. Each project is fully functional, well-documented, and ready for deployment.

**Perfect for:**
- Learning React development step-by-step
- Understanding React patterns and best practices
- Building a portfolio of React applications
- Reference implementations for common React features
- Demonstrating React skills to potential employers

## 📋 Table of Contents

1. [My First App](#1-my-first-app)
2. [Content Rating](#2-content-rating)
3. [Event Planner](#3-event-planner)
4. [Todo List](#4-todo-list)
5. [Custom Hook](#5-custom-hook)
6. [Feedback Form](#6-feedback-form)
7. [E-Commerce with Redux Toolkit](#7-e-commerce-with-redux-toolkit)
8. [General Setup Instructions](#general-setup-instructions)
9. [Technologies & Skills Summary](#technologies--skills-summary)

---

## Projects Overview

This repository contains **7 React projects**, arranged in order of complexity and learning progression:

| # | Project | Key Concepts | Difficulty |
|---|---------|-------------|------------|
| 1 | My First App | Basic React, State Updates, setInterval | ⭐ Beginner |
| 2 | Content Rating | Class Components, State Management | ⭐ Beginner |
| 3 | Event Planner | Component Composition, CSS Styling | ⭐⭐ Intermediate |
| 4 | Todo List | Complex State, Array Manipulation | ⭐⭐ Intermediate |
| 5 | Custom Hook | Custom Hooks, API Fetching, useEffect | ⭐⭐⭐ Advanced |
| 6 | Feedback Form | Form Handling, Controlled Components | ⭐⭐ Intermediate |
| 7 | E-Commerce | Redux Toolkit, Global State Management | ⭐⭐⭐ Advanced |

---

## 1. My First App

**Location:** `myfirstapp/myfirstapp/`

**Project Type:** Beginner - Introduction to React

A simple React application that displays a personalized greeting message with real-time date and time updates. This project serves as an introduction to React fundamentals, demonstrating component structure, state management, and automatic re-rendering.

### 🎯 Key Features

#### Core Functionality
- **Real-time Clock Display**: Shows current date and time
- **Automatic Updates**: Refreshes every second using `setInterval`
- **Personalized Greeting**: Displays a customizable greeting message
- **Date Formatting**: Uses `toLocaleDateString()` and `toLocaleTimeString()` for formatted display

#### Technical Features
- Functional component structure
- Dynamic content rendering
- Automatic component re-rendering
- Clean, minimal UI

### 🛠️ Skills Demonstrated

1. **React Fundamentals**
   - Understanding React component structure
   - JSX syntax and rendering
   - Component props and state basics

2. **JavaScript Concepts**
   - Date object manipulation
   - `setInterval` for periodic updates
   - Template literals and string interpolation

3. **React DOM**
   - Using `ReactDOM.createRoot()` (React 19)
   - Component mounting and rendering
   - React StrictMode usage

4. **Development Tools**
   - Vite configuration
   - ESLint setup
   - Modern build tooling

### 📁 Project Structure

```
myfirstapp/
├── src/
│   ├── main.jsx          # Entry point with setInterval logic
│   ├── App.jsx          # Main component with date/time display
│   ├── App.css          # Component styling
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── eslint.config.js     # ESLint configuration
```

### 💻 Code Highlights

**App.jsx** - Main component:
```jsx
function App(props) {
  const currDate = new Date();
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {currDate.toLocaleDateString()} and The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

**main.jsx** - Auto-refresh logic:
```jsx
setInterval(ref, 1000); // Updates every second
```

### 🚀 Step-by-Step Setup Instructions

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

#### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd myfirstapp/myfirstapp
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install:
   - React 19.2.0
   - React-DOM 19.2.0
   - Vite 7.2.4
   - ESLint and related plugins

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5173` (or next available port)

4. **View the Application**
   - Open your browser to the URL shown in terminal
   - You should see the greeting with updating date/time

#### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### 🎓 Learning Outcomes

After completing this project, you will understand:
- How React components render UI
- How to use JavaScript Date objects
- How to create automatic updates in React
- Basic React project structure
- Vite development workflow

### 🔧 Technologies Used

- **React**: 19.2.0 (Latest version)
- **React-DOM**: 19.2.0
- **Vite**: 7.2.4 (Build tool)
- **ESLint**: 9.39.1 (Code linting)
- **@vitejs/plugin-react**: 5.1.1

---

## 2. Content Rating

**Location:** `Content Rating/content_rating/`

**Project Type:** Beginner - Class Components & State Management

An interactive content rating system that allows users to express their opinion through like/dislike buttons. This project demonstrates React class components, state management, and event handling using the traditional class-based approach.

### 🎯 Key Features

#### Core Functionality
- **Like Button**: Increments like counter on click
- **Dislike Button**: Increments dislike counter on click
- **Real-time Counters**: Displays current like/dislike counts
- **Total Ratings Tracker**: Shows cumulative total of all ratings
- **State Persistence**: Maintains state throughout user interaction

#### User Interface
- Clean, centered layout
- Color-coded buttons (blue theme)
- Hover effects on buttons
- Responsive button styling
- Visual feedback on interactions

### 🛠️ Skills Demonstrated

1. **React Class Components**
   - Class component syntax
   - Constructor and super() usage
   - Component lifecycle understanding
   - `this.state` and `this.setState()` usage

2. **State Management**
   - Initializing state in constructor
   - Updating state with `setState()`
   - Using previous state in updates
   - State calculation and aggregation

3. **Event Handling**
   - onClick event handlers
   - Arrow functions in class methods
   - Binding context in class components
   - Event handler organization

4. **CSS Styling**
   - Component-specific CSS files
   - Flexbox layout
   - Button styling and hover effects
   - Responsive design principles

### 📁 Project Structure

```
Content Rating/content_rating/
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root component
│   ├── App.css                     # App styling
│   ├── index.css                   # Global styles
│   └── Components/
│       ├── ContentRating.jsx       # Main rating component (Class)
│       └── ContentRating.css      # Component styles
├── index.html
├── package.json
└── vite.config.js
```

### 💻 Code Highlights

**ContentRating.jsx** - Class component structure:
```jsx
class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.likes + prevState.dislikes + 1
        }))
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.likes + prevState.dislikes + 1
        }))
      }
    }
  }
  
  render() {
    return (
      <div className='content-rating'>
        <button onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
        <p>Total Ratings: {this.state.totalRatings}</p>
      </div>
    );
  }
}
```

**Key Concepts:**
- State stored in `this.state` object
- Methods defined as arrow functions in state (alternative approach)
- `setState()` with functional update pattern
- Previous state access via `prevState` parameter

### 🚀 Step-by-Step Setup Instructions

#### Prerequisites
- Node.js (v14 or higher)
- npm package manager

#### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd "Content Rating/content_rating"
   ```
   Note: Use quotes for paths with spaces on Windows

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Installs:
   - React 18.2.0
   - React-DOM 18.2.0
   - Vite 5.2.0
   - ESLint and plugins

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Test the Application**
   - Click "Like" button - counter should increment
   - Click "Dislike" button - counter should increment
   - Observe total ratings updating
   - Test multiple clicks to verify state persistence

#### Available Scripts

- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run lint` - Code linting
- `npm run preview` - Preview production build

### 🎓 Learning Outcomes

After completing this project, you will understand:
- React class component syntax and structure
- How to initialize and manage component state
- Using `setState()` for state updates
- Functional updates with previous state
- Event handling in class components
- Component composition and organization

### 🔧 Technologies Used

- **React**: 18.2.0
- **React-DOM**: 18.2.0
- **Vite**: 5.2.0
- **ESLint**: 8.57.0
- **@vitejs/plugin-react**: 4.2.1

### 💡 Key Differences: Class vs Functional Components

This project uses **class components**, which differ from functional components:
- State stored in `this.state` vs `useState()` hook
- Methods defined as class methods vs functions
- `setState()` vs direct state updates
- Lifecycle methods vs `useEffect()` hook

---

## 3. Event Planner

**Location:** `Event Planner/event_planner/`

**Project Type:** Intermediate - Component Composition & Styling

A comprehensive, multi-section event planning landing page showcasing different event types, features, testimonials, and a contact form. This project demonstrates component composition, advanced CSS styling, and creating a complete user interface.

### 🎯 Key Features

#### Page Sections

1. **Header Section**
   - Welcome message with branding
   - Customizable welcome heading
   - Eye-catching header design

2. **Description Section**
   - Marketing message about event planning
   - Call-to-action "Get Started" button
   - Engaging copywriting

3. **Event Categories Section**
   - **Social Events**: Birthday parties, anniversaries, weddings, baby showers, graduations, family reunions, social gatherings
   - **Entertainment Events**: Concerts, music festivals, film screenings, comedy shows, art exhibitions, cultural events
   - **Community Events**: Fundraising events, charity galas, volunteer drives, neighborhood block parties, community festivals, cultural celebrations, public forums
   - Three-column responsive layout
   - Category-specific styling

4. **Features Section**
   - List of platform capabilities:
     - Easy event creation and management
     - Customizable event templates
     - Guest list management
     - Real-time collaboration
     - Reminders and notifications

5. **Testimonials Section**
   - User testimonials with quotes
   - Author attribution
   - Social proof elements

6. **Contact Section**
   - Contact form with:
     - Name input field
     - Email input field
     - Message textarea
     - Submit button
   - Form validation ready

7. **Footer Component**
   - Copyright information
   - Branding consistency

#### Design Features
- **Gradient Background**: Custom CSS gradient pattern
- **Responsive Layout**: Flexbox-based responsive design
- **Color Scheme**: Pink/rose color palette (#fee6f0, #f85199)
- **Card-based UI**: Event categories in styled cards
- **Hover Effects**: Interactive button states
- **Typography**: Hierarchical heading structure

### 🛠️ Skills Demonstrated

1. **Component Composition**
   - Breaking UI into logical components
   - Reusable Footer component
   - Component organization and structure
   - Props and component communication

2. **Advanced CSS Styling**
   - CSS gradient backgrounds
   - Flexbox layouts
   - Responsive design patterns
   - CSS custom properties usage
   - Hover states and transitions
   - Box shadows and borders

3. **React Patterns**
   - Functional components
   - Component separation
   - JSX structure and organization
   - Semantic HTML in React

4. **UI/UX Design**
   - Information architecture
   - Visual hierarchy
   - User flow design
   - Form design principles

### 📁 Project Structure

```
Event Planner/event_planner/
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root component
│   ├── App.css                     # Global reset styles
│   ├── index.css                   # Base styles
│   └── Components/
│       ├── EventPlanner.jsx        # Main component
│       ├── EventPlanner.css       # Component styles
│       └── Footer.jsx              # Footer component
├── index.html
├── package.json
└── vite.config.js
```

### 💻 Code Highlights

**EventPlanner.jsx** - Component structure:
```jsx
const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h2>Welcome to Event Planner</h2>
            </header>
            
            <section className="description">
                <p>Plan and organize your events effortlessly...</p>
                <button className="get-started-button">Get Started</button>
            </section>
            
            <section className="events_categories">
                <ul>
                    <h2>The Social Event:</h2>
                    <li>Birthday Parties</li>
                    {/* More items */}
                </ul>
                {/* More category lists */}
            </section>
            
            {/* Features, Testimonials, Contact sections */}
            <Footer />
        </div>
    );
};
```

**EventPlanner.css** - Advanced styling:
```css
.event-planner-container {
    background: linear-gradient(135deg, #fee6f0 25%, transparent 25%),
                linear-gradient(225deg, #fee6f0 25%, transparent 25%),
                /* Complex gradient pattern */
    background-size: 100px 100px;
}

.events_categories {
    display: flex;
    gap: 30px;
    justify-content: center;
}
```

### 🚀 Step-by-Step Setup Instructions

#### Prerequisites
- Node.js (v14 or higher)
- npm package manager

#### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd "Event Planner/event_planner"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Installs:
   - React 18.2.0
   - React-DOM 18.2.0
   - Vite 7.3.0
   - ESLint configuration

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Explore the Application**
   - Scroll through all sections
   - Test the "Get Started" button
   - Review event categories
   - Check responsive design on different screen sizes
   - Test contact form (UI only)

#### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### 🎓 Learning Outcomes

After completing this project, you will understand:
- How to structure a multi-section React application
- Component composition and reusability
- Advanced CSS techniques (gradients, flexbox)
- Responsive design implementation
- Semantic HTML structure in React
- Form structure and organization
- UI/UX design principles

### 🔧 Technologies Used

- **React**: 18.2.0
- **React-DOM**: 18.2.0
- **Vite**: 7.3.0
- **ESLint**: 8.57.0
- **CSS3**: Advanced styling features

### 💡 Design Patterns Used

- **Component Separation**: Footer as separate component
- **CSS Modules Pattern**: Component-specific CSS files
- **Semantic HTML**: Proper use of `<header>`, `<section>`, `<footer>`
- **BEM-like Naming**: Descriptive class names
- **Mobile-First**: Responsive design approach

---

## 4. Todo List

**Location:** `Todo List/todo_list/`

**Project Type:** Intermediate - Complex State Management & Array Manipulation

An advanced, hierarchical todo list application that allows users to organize tasks into categories (headings) with multiple sub-items. This project demonstrates complex state management, nested data structures, array manipulation, and dynamic UI updates.

### 🎯 Key Features

#### Core Functionality

1. **Heading Management**
   - Create new todo headings/categories
   - Delete entire headings with all associated items
   - Visual heading display with delete button

2. **List Item Management**
   - Add multiple list items under each heading
   - Delete individual list items ("Done" button)
   - Independent input fields for each heading
   - Real-time updates

3. **Data Structure**
   - Nested array structure: `[{heading: string, lists: string[]}]`
   - State management for multiple inputs
   - Dynamic state updates

4. **User Interface**
   - Card-based layout for each heading
   - Input field at top for new headings
   - Per-heading input fields for list items
   - Color-coded buttons (blue for add, red for delete, green for done)
   - Responsive flexbox grid layout
   - Footer component

#### Advanced Features
- **Controlled Inputs**: All inputs are controlled components
- **State Isolation**: Each heading maintains its own list state
- **Array Manipulation**: Add, remove, filter operations
- **Dynamic Rendering**: Maps over nested arrays
- **Key Management**: Proper React keys for list items

### 🛠️ Skills Demonstrated

1. **Complex State Management**
   - Managing nested state structures
   - Multiple state variables (`todos`, `headingInput`, `listInputs`)
   - State updates with array operations
   - Immutable state updates

2. **Array Manipulation**
   - `Array.map()` for rendering lists
   - `Array.push()` for adding items
   - `Array.splice()` for removing items
   - `Array.filter()` patterns
   - Spread operator for immutability

3. **React Hooks**
   - `useState()` for multiple state variables
   - State initialization
   - Functional state updates

4. **Event Handling**
   - Multiple event handlers
   - Parameter passing to handlers
   - Event object destructuring
   - Controlled component pattern

5. **Component Organization**
   - Single component with complex logic
   - Conditional rendering
   - Dynamic component generation

### 📁 Project Structure

```
Todo List/todo_list/
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root component
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   └── Components/
│       ├── TodoList.jsx            # Main todo component
│       ├── TodoList.css           # Component styles
│       └── Footer.jsx              # Footer component
├── index.html
├── package.json
└── vite.config.js
```

### 💻 Code Highlights

**TodoList.jsx** - State structure:
```jsx
const TodoList = () => {
    // Main todos array with nested structure
    const [todos, setTodos] = useState([]);
    
    // Input for new heading
    const [headingInput, setHeadingInput] = useState('');
    
    // Object to track inputs for each heading index
    const [listInputs, setListInputs] = useState({});
    
    // Add new heading
    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
    };
    
    // Add list item to specific heading
    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: '' });
        }
    };
    
    // Delete heading
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    
    // Delete list item
    const handleDeleteListInput = (todoIndex, listIndex) => {
        const newTodos = [...todos];
        newTodos[todoIndex].lists.splice(listIndex, 1);
        setTodos(newTodos);
    };
    
    return (
        // JSX with dynamic rendering
    );
};
```

**Key Concepts:**
- Nested state: `[{heading: string, lists: string[]}]`
- Object-based input tracking: `{[index]: value}`
- Immutable updates using spread operator
- Array methods: `push()`, `splice()`, `map()`

### 🚀 Step-by-Step Setup Instructions

#### Prerequisites
- Node.js (v14 or higher)
- npm package manager

#### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd "Todo List/todo_list"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Installs:
   - React 18.2.0
   - React-DOM 18.2.0
   - Vite 5.2.0
   - ESLint configuration

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Test the Application**
   - **Create a Heading**: Type in "Work Tasks" and click "Add Heading"
   - **Add List Items**: Under the heading, type "Complete project" and click "Add List"
   - **Add More Items**: Add "Review code" and "Submit PR"
   - **Mark as Done**: Click "Done" button on any item
   - **Create Another Heading**: Add "Personal Tasks" heading
   - **Delete Heading**: Click "Delete Heading" to remove entire category
   - **Test Edge Cases**: Try empty inputs, multiple headings, etc.

#### Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Code linting

### 🎓 Learning Outcomes

After completing this project, you will understand:
- Managing complex nested state structures
- Array manipulation in React (add, remove, update)
- Controlled component pattern
- Dynamic form inputs
- Key prop usage in lists
- Immutable state updates
- Event handler parameter passing
- Conditional rendering patterns
- Component state organization

### 🔧 Technologies Used

- **React**: 18.2.0
- **React-DOM**: 18.2.0
- **Vite**: 5.2.0
- **ESLint**: 8.57.0
- **CSS3**: Flexbox, Grid, Responsive design

### 💡 Advanced Patterns Demonstrated

1. **Nested State Pattern**
   ```jsx
   [{heading: "Work", lists: ["Task 1", "Task 2"]}]
   ```

2. **Object-based Input Tracking**
   ```jsx
   {0: "input value", 1: "another value"}
   ```

3. **Immutable Updates**
   ```jsx
   const newTodos = [...todos]; // Copy array
   newTodos[index].lists.push(item); // Modify copy
   setTodos(newTodos); // Update state
   ```

4. **Dynamic Key Generation**
   ```jsx
   {todos.map((todo, index) => (
       <div key={index}>...</div>
   ))}
   ```

---

## 5. Custom Hook

**Location:** `Custom Hook/custom_hook/`

**Project Type:** Advanced - Custom Hooks & API Integration

A comprehensive demonstration of creating and using custom React hooks, specifically a reusable `useFetch` hook for data fetching. This project shows how to abstract data fetching logic, handle API calls, manage loading states, and work with both external APIs and local JSON data.

### 🎯 Key Features

#### Custom Hook Implementation

1. **useFetch Hook** (`UseFetch.jsx`)
   - Reusable data fetching logic
   - URL-based data fetching
   - Automatic data state management
   - Error handling
   - Dependency-based re-fetching
   - Null safety checks

2. **API Data Fetching** (`FetchYogaData.jsx`)
   - Fetches yoga data from external API
   - Uses `useFetch` custom hook
   - Displays dynamic content from API
   - Handles API response structure
   - Real-time data updates

3. **Local JSON Data** (`FetchData.jsx`)
   - Reads from local `fruit.json` file
   - Demonstrates static data usage
   - Alternative to API fetching
   - Data structure: name, image, benefits, importance, best_time_to_intake

#### Data Display Features
- **Dynamic Rendering**: Maps over fetched data arrays
- **Image Display**: Shows images from URLs
- **Structured Data**: Displays multiple data fields
- **List Formatting**: Organized list layout
- **Error Handling**: Graceful error management

### 🛠️ Skills Demonstrated

1. **Custom React Hooks**
   - Creating reusable custom hooks
   - Hook naming convention (`use` prefix)
   - Returning values from hooks
   - Hook composition

2. **React Hooks Deep Dive**
   - `useState()` for data storage
   - `useEffect()` for side effects
   - Dependency arrays in `useEffect()`
   - Cleanup and effect management

3. **API Integration**
   - Fetch API usage
   - Promise handling (.then(), .catch())
   - JSON parsing
   - Error handling in async operations
   - URL validation

4. **Data Management**
   - Loading states (implicit)
   - Error states
   - Null/undefined handling
   - Data transformation
   - Conditional rendering based on data

5. **Code Reusability**
   - DRY (Don't Repeat Yourself) principle
   - Abstracting common patterns
   - Hook composition
   - Separation of concerns

### 📁 Project Structure

```
Custom Hook/custom_hook/
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root (switches between components)
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   └── Components/
│       ├── UseFetch.jsx           # Custom hook definition
│       ├── FetchData.jsx          # Local JSON component
│       ├── FetchYogaData.jsx       # API fetching component
│       ├── FetchData.css          # Component styles
│       └── fruit.json             # Local data file
├── index.html
├── package.json
└── vite.config.js
```

### 💻 Code Highlights

**UseFetch.jsx** - Custom hook:
```jsx
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        if (!url) return; // Prevent fetch if url is empty
        
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => {
                console.error("Fetch error: ", error);
                setData(null); // Reset data on error
            });
    }, [url]); // Re-fetch if URL changes
    
    return [data];
};

export default useFetch
```

**FetchYogaData.jsx** - Using the hook:
```jsx
import useFetch from './UseFetch';

const FetchYogaData = () => {
    const [data] = useFetch('https://api.npoint.io/4459a9a10e43812e1152');
    
    return (
        <>
            <h1>Fetch Yoga Data Component</h1>
            <ul>
                {data && data.map((e, index) => (
                    <li key={index}>
                        <h3>{e.name}</h3>
                        <p><strong>Benefits: </strong>{e.benefits}</p>
                        <p><strong>Duration: </strong>{e.time_duration}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};
```

**FetchData.jsx** - Local JSON:
```jsx
import fruitData from './fruit.json'

const FetchData = () => {
    const data = fruitData; // Direct import
    
    return (
        <ul>
            {data && data.map((e, index) => (
                <li key={index}>
                    <h3>{e.name}</h3>
                    <img src={e.image} alt={e.name} width="200" />
                    <p><strong>Importance: </strong>{e.importance}</p>
                    <p><strong>Benefits: </strong>{e.benefits}</p>
                </li>
            ))}
        </ul>
    );
};
```

### 🚀 Step-by-Step Setup Instructions

#### Prerequisites
- Node.js (v14 or higher)
- npm package manager
- Internet connection (for API calls)

#### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd "Custom Hook/custom_hook"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Installs:
   - React 18.2.0
   - React-DOM 18.2.0
   - Vite 7.3.0
   - ESLint configuration

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Test the Application**
   - **Check App.jsx**: Currently shows `FetchYogaData` component
   - **View API Data**: See yoga data fetched from external API
   - **Switch Components**: Uncomment `FetchData` in App.jsx to see local JSON
   - **Test Error Handling**: Try invalid URL in `useFetch`
   - **Check Console**: Look for any fetch errors

#### Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Code linting

### 🎓 Learning Outcomes

After completing this project, you will understand:
- How to create custom React hooks
- Hook naming conventions and best practices
- Using `useEffect()` for side effects
- Fetch API and promise handling
- Error handling in async operations
- Conditional rendering with data
- Reusing logic across components
- Working with external APIs
- Importing and using JSON data
- Dependency arrays in `useEffect()`

### 🔧 Technologies Used

- **React**: 18.2.0
- **React-DOM**: 18.2.0
- **Vite**: 7.3.0
- **ESLint**: 8.57.0
- **Fetch API**: Native browser API
- **JSON**: Data format

### 💡 Advanced Concepts Demonstrated

1. **Custom Hook Pattern**
   ```jsx
   // Reusable logic extraction
   const useFetch = (url) => {
       // Hook logic
       return [data];
   };
   ```

2. **Effect Dependencies**
   ```jsx
   useEffect(() => {
       // Effect logic
   }, [url]); // Re-run when URL changes
   ```

3. **Null Safety**
   ```jsx
   {data && data.map(...)} // Prevents errors if data is null
   ```

4. **Error Handling Pattern**
   ```jsx
   .catch((error) => {
       console.error("Fetch error: ", error);
       setData(null);
   });
   ```

5. **Conditional Fetching**
   ```jsx
   if (!url) return; // Early return pattern
   ```

### 🔍 API Endpoints Used

- **Yoga Data API**: `https://api.npoint.io/4459a9a10e43812e1152`
- **Alternative API** (commented): `https://api.npoint.io/9045c260b1565daa9e15`

### 📊 Data Structures

**Fruit JSON Structure:**
```json
{
  "name": "Banana",
  "image": "https://...",
  "benefits": "Energy boost, aids digestion",
  "importance": "High in potassium",
  "best_time_to_intake": "Morning or as a snack"
}
```

**Yoga Data Structure:**
```json
{
  "name": "Yoga Pose Name",
  "benefits": "Health benefits",
  "time_duration": "30 minutes"
}
```

---

## 6. Feedback Form

**Location:** `Feedback Form/feedback_form/`

**Project Type:** Intermediate - Form Handling & User Interaction

A comprehensive feedback collection form with an interactive star rating system. This project demonstrates form state management, controlled components, user input validation, confirmation dialogs, and advanced UI interactions including hover effects.

### 🎯 Key Features

#### Form Fields

1. **Name Input**
   - Text input field
   - Required validation
   - Placeholder text
   - Controlled component

2. **Email Input**
   - Email type input
   - Required validation
   - Email format validation (browser-native)
   - Placeholder text

3. **Feedback Textarea**
   - Multi-line text input
   - Required validation
   - Resizable textarea
   - Placeholder text

4. **Star Rating System**
   - Interactive 5-star rating
   - Click to select rating
   - Hover effects (visual feedback)
   - Scale animation on hover/select
   - Color change (gold when selected/hovered)
   - Smooth transitions

#### User Experience Features

- **Form Validation**: All fields required before submission
- **Confirmation Dialog**: Shows form data before final submission
- **Visual Feedback**: Hover effects, color changes, animations
- **Responsive Design**: Works on mobile and desktop
- **Form Reset**: Clears form after successful submission
- **Success Message**: Alert after submission

### 🛠️ Skills Demonstrated

1. **Form Handling**
   - Controlled components pattern
   - Form state management
   - Input event handling
   - Form submission handling
   - Form validation

2. **React State Management**
   - `useState()` for form data
   - Object state structure
   - Multiple state variables
   - State updates with spread operator

3. **Event Handling**
   - `onChange` for inputs
   - `onSubmit` for form
   - `onClick` for star rating
   - `onMouseEnter` and `onMouseLeave` for hover
   - Event object destructuring

4. **Advanced UI Interactions**
   - Hover state management
   - Conditional styling
   - CSS transitions
   - Transform animations
   - Dynamic color changes

5. **Browser APIs**
   - `window.confirm()` for confirmation
   - `window.alert()` for success message
   - Form validation API

6. **CSS Styling**
   - Inline styles with React
   - Conditional styling
   - Flexbox layouts
   - Responsive design
   - Media queries

### 📁 Project Structure

```
Feedback Form/feedback_form/
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root component
│   ├── App.css                     # Global reset styles
│   ├── index.css                   # Base styles
│   └── Components/
│       ├── FeedbackForm.jsx        # Main form component
│       └── FeedbackForm.css       # Form styles
├── index.html
├── package.json
└── vite.config.js
```

### 💻 Code Highlights

**FeedbackForm.jsx** - Form state and handlers:
```jsx
const FeedbackForm = () => {
    // Form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: 0
    });
    
    // Hover state for stars
    const [hoverRating, setHoverRating] = useState(0);
    
    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Confirmation dialog
        const confirmationMessage = `
Name: ${formData.name}
Email: ${formData.email}
Feedback: ${formData.feedback}
Rating: ${formData.rating} stars
        `;
        
        const isConfirmed = window.confirm(
            `Please confirm your details:\n${confirmationMessage}`
        );
        
        if (isConfirmed) {
            console.log('Submitting feedback:', formData);
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: 0
            });
            
            alert('Thank you for your valuable feedback!');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
            {/* Star rating with hover effects */}
        </form>
    );
};
```

**Star Rating Implementation:**
```jsx
{[1, 2, 3, 4, 5].map((star) => (
    <span
        key={star}
        onClick={() => {
            setFormData({
                ...formData,
                rating: star
            });
            setHoverRating(0);
        }}
        onMouseEnter={() => setHoverRating(star)}
        onMouseLeave={() => setHoverRating(0)}
        style={{
            fontSize: '28px',
            cursor: 'pointer',
            transition: 'color 0.2s ease, transform 0.2s ease',
            transform: star <= (hoverRating || formData.rating)
                ? 'scale(1.1)'
                : 'scale(1)',
            color: star <= (hoverRating || formData.rating)
                ? '#FFD700'
                : '#ccc'
        }}
    >
        ★
    </span>
))}
```

### 🚀 Step-by-Step Setup Instructions

#### Prerequisites
- Node.js (v14 or higher)
- npm package manager

#### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd "Feedback Form/feedback_form"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Installs:
   - React 18.2.0
   - React-DOM 18.2.0
   - Vite 7.3.0
   - ESLint configuration

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Test the Application**
   - **Fill Form**: Enter name, email, and feedback
   - **Test Star Rating**: 
     - Hover over stars (should turn gold and scale up)
     - Click a star (should stay selected)
     - Try different ratings
   - **Submit Form**: Click submit button
   - **Confirmation**: Review confirmation dialog
   - **Success**: See success alert after confirmation
   - **Form Reset**: Verify form clears after submission
   - **Validation**: Try submitting empty form (should prevent)

#### Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Code linting

### 🎓 Learning Outcomes

After completing this project, you will understand:
- Controlled component pattern for forms
- Form state management with objects
- Event handling (onChange, onSubmit, onClick)
- Input validation (required, email type)
- Confirmation dialogs before actions
- Hover state management
- Conditional styling in React
- CSS transitions and animations
- Form submission handling
- Preventing default form behavior
- Form reset after submission
- User feedback mechanisms (alerts, confirmations)

### 🔧 Technologies Used

- **React**: 18.2.0
- **React-DOM**: 18.2.0
- **Vite**: 7.3.0
- **ESLint**: 8.57.0
- **CSS3**: Transitions, transforms, flexbox

### 💡 Advanced Patterns Demonstrated

1. **Controlled Components**
   ```jsx
   <input
       value={formData.name}
       onChange={handleChange}
       name="name"
   />
   ```

2. **Computed Styling**
   ```jsx
   color: star <= (hoverRating || formData.rating) ? '#FFD700' : '#ccc'
   ```

3. **Event Object Destructuring**
   ```jsx
   const { name, value } = event.target;
   ```

4. **Dynamic Property Updates**
   ```jsx
   setFormData({
       ...formData,
       [name]: value  // Dynamic key
   });
   ```

5. **Conditional Rendering Logic**
   ```jsx
   star <= (hoverRating || formData.rating)
   // Shows selected OR hovered stars
   ```

### 🎨 UI/UX Features

- **Visual Feedback**: Stars change color and scale on interaction
- **Smooth Animations**: CSS transitions for professional feel
- **Clear Validation**: Required fields prevent submission
- **Confirmation Step**: Prevents accidental submissions
- **Success Indication**: Clear feedback after submission
- **Responsive Layout**: Works on all screen sizes
- **Accessible Design**: Proper form labels and structure

---

## 7. E-Commerce with Redux Toolkit

**Location:** `E-Commerce Data Rendering using Redux Toolkit/ecommerce_rtk/`

**Project Type:** Advanced - Global State Management & Redux Toolkit

A complete, production-ready e-commerce application demonstrating advanced state management with Redux Toolkit. Features include product listing, shopping cart functionality, quantity management, and a dynamic reward points system. This project showcases enterprise-level state management patterns.

### 🎯 Key Features

#### Product Management

1. **Product List Component**
   - Displays available products with prices
   - "Add to Cart" button for each product
   - Button state management (disabled when already in cart)
   - Visual feedback ("Added" vs "Add to Cart")
   - Product data structure: id, name, price

2. **Add to Cart Functionality**
   - Adds product to global cart state
   - Prevents duplicate additions
   - Updates button state immediately
   - Quantity initialization (starts at 1)

#### Shopping Cart Features

1. **Cart Display**
   - Lists all items in cart
   - Shows product name and price
   - Displays quantity for each item
   - Real-time total calculation

2. **Quantity Management**
   - Increase quantity (+ button)
   - Decrease quantity (- button)
   - Minimum quantity of 1 enforced
   - Real-time price updates

3. **Cart Operations**
   - Remove individual items
   - Clear entire cart
   - Persistent cart state (Redux)
   - Automatic total recalculation

#### Super Coins Reward System

- **Tiered Rewards**:
  - $100-$199: 10 super coins
  - $200-$299: 20 super coins
  - $300+: 30 super coins
  - Below $100: 0 super coins
- **Dynamic Calculation**: Updates automatically with cart changes
- **Real-time Display**: Shows current reward points

### 🛠️ Skills Demonstrated

1. **Redux Toolkit**
   - `createSlice()` for state management
   - Reducer definitions
   - Action creators
   - Immutable updates with Immer (built-in)

2. **React-Redux Integration**
   - `Provider` component setup
   - `useSelector()` hook for reading state
   - `useDispatch()` hook for dispatching actions
   - Store configuration

3. **Global State Management**
   - Centralized state store
   - Shared state across components
   - State persistence during session
   - Predictable state updates

4. **Advanced State Patterns**
   - Finding items in arrays
   - Updating nested state
   - Filtering arrays
   - Conditional state updates

5. **Component Communication**
   - Multiple components accessing same state
   - State synchronization
   - Cross-component updates

6. **React Hooks with Redux**
   - Combining `useState()` and Redux
   - `useEffect()` with Redux state
   - Conditional effects based on state

### 📁 Project Structure

```
E-Commerce Data Rendering using Redux Toolkit/ecommerce_rtk/
├── src/
│   ├── main.jsx                    # Entry with Provider
│   ├── App.jsx                     # Root component
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   ├── store.js                    # Redux store configuration
│   └── Components/
│       ├── CartSlice.jsx           # Redux slice (state + reducers)
│       ├── ProductList.jsx         # Product display component
│       ├── ProductList.css        # Product styles
│       ├── ShoppingCart.jsx        # Cart component
│       ├── ShoppingCart.css      # Cart styles
│       └── SuperCoin.jsx           # Rewards component
├── index.html
├── package.json
└── vite.config.js
```

### 💻 Code Highlights

**store.js** - Redux store setup:
```jsx
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
```

**CartSlice.jsx** - Redux slice with reducers:
```jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add item to cart (or increment if exists)
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(
                item => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        
        // Increase quantity
        increaseItemQuantity(state, action) {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );
            if (item) {
                item.quantity += 1;
            }
        },
        
        // Decrease quantity
        decreaseItemQuantity(state, action) {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        
        // Remove item
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                item => item.id !== action.payload
            );
        },
        
        // Clear entire cart
        clearCart(state) {
            state.cartItems = [];
        },
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
```

**ProductList.jsx** - Using Redux:
```jsx
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    
    const products = [
        { id: 1, name: 'Product A', price: 60 },
        { id: 2, name: 'Product B', price: 75 },
        { id: 3, name: 'Product C', price: 30 },
    ];
    
    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };
    
    return (
        <div>
            {products.map(product => (
                <li key={product.id}>
                    <span>{product.name} - ${product.price}</span>
                    <button
                        onClick={() => handleAddToCart(product)}
                        disabled={cartItems.some(item => item.id === product.id)}
                    >
                        {cartItems.some(item => item.id === product.id)
                            ? 'Added'
                            : 'Add to Cart'}
                    </button>
                </li>
            ))}
        </div>
    );
};
```

**ShoppingCart.jsx** - Cart operations:
```jsx
import { useDispatch, useSelector } from 'react-redux';
import {
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} from './CartSlice';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    
    // Calculate total
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    
    return (
        <div>
            {cartItems.map(item => (
                <li key={item.id}>
                    <span>{item.name} - ${item.price}</span>
                    <div>
                        <button onClick={() => 
                            dispatch(decreaseItemQuantity(item.id))
                        }>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => 
                            dispatch(increaseItemQuantity(item.id))
                        }>+</button>
                    </div>
                    <button onClick={() => 
                        dispatch(removeItemFromCart(item.id))
                    }>Remove</button>
                </li>
            ))}
            <button onClick={() => dispatch(clearCart())}>
                Clear Cart
            </button>
            <div>Total: ${totalAmount}</div>
        </div>
    );
};
```

**SuperCoin.jsx** - Reward calculation:
```jsx
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    
    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);
    
    return (
        <div>
            <h2>Super Coins</h2>
            <p>You will earn {superCoins} super coins</p>
        </div>
    );
};
```

### 🚀 Step-by-Step Setup Instructions

#### Prerequisites
- Node.js (v14 or higher)
- npm package manager

#### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd "E-Commerce Data Rendering using Redux Toolkit/ecommerce_rtk"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Installs:
   - React 18.2.0
   - React-DOM 18.2.0
   - Redux Toolkit 2.2.2
   - React-Redux 9.1.0
   - Vite 5.2.0
   - ESLint configuration

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Test the Application**
   - **Add Products**: Click "Add to Cart" on products
   - **Verify Button State**: Button should change to "Added" and disable
   - **Check Cart**: Items should appear in shopping cart
   - **Increase Quantity**: Click "+" button
   - **Decrease Quantity**: Click "-" button (minimum 1)
   - **Remove Items**: Click "Remove" on individual items
   - **Test Total**: Verify total amount calculation
   - **Test Rewards**: 
     - Add items to reach $100+ (should show 10 coins)
     - Add more to reach $200+ (should show 20 coins)
     - Add more to reach $300+ (should show 30 coins)
   - **Clear Cart**: Click "Clear Cart" button
   - **Verify Reset**: All state should reset

#### Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Code linting

### 🎓 Learning Outcomes

After completing this project, you will understand:
- Redux Toolkit architecture and patterns
- Creating and configuring Redux store
- Using `createSlice()` for state management
- Action creators and reducers
- `useSelector()` and `useDispatch()` hooks
- Provider component setup
- Global state management patterns
- Immutable state updates (Immer)
- Combining local and global state
- State synchronization across components
- Complex state calculations
- Conditional state updates
- Array operations in Redux reducers

### 🔧 Technologies Used

- **React**: 18.2.0
- **React-DOM**: 18.2.0
- **Redux Toolkit**: 2.2.2
- **React-Redux**: 9.1.0
- **Vite**: 5.2.0
- **ESLint**: 8.57.0

### 💡 Advanced Redux Patterns Demonstrated

1. **Slice Pattern**
   ```jsx
   createSlice({
       name: 'cart',
       initialState,
       reducers: { ... }
   })
   ```

2. **Immer Integration** (automatic)
   ```jsx
   // Can write "mutating" code, Immer handles immutability
   state.cartItems.push(newItem);
   ```

3. **Action Payload**
   ```jsx
   addItemToCart({ id: 1, name: 'Product', price: 60 })
   ```

4. **Selector Pattern**
   ```jsx
   const cartItems = useSelector(state => state.cart.cartItems);
   ```

5. **Dispatch Pattern**
   ```jsx
   dispatch(addItemToCart(product));
   ```

### 🏗️ Architecture Overview

```
App Component
├── ProductList (reads/writes cart state)
├── ShoppingCart (reads/writes cart state)
└── SuperCoin (reads cart state, calculates rewards)

Redux Store
└── cart slice
    └── cartItems: [{id, name, price, quantity}]
```

### 📊 State Flow

1. **User clicks "Add to Cart"**
   → `dispatch(addItemToCart(product))`
   → Reducer updates state
   → All components re-render with new state

2. **User changes quantity**
   → `dispatch(increaseItemQuantity(id))`
   → Reducer updates item quantity
   → Cart and SuperCoin recalculate

3. **State is shared**
   → ProductList knows what's in cart
   → ShoppingCart displays cart items
   → SuperCoin calculates based on total

---

## General Setup Instructions

### 📋 Prerequisites

Before starting, ensure you have the following installed:

1. **Node.js**
   - Version: 14.x or higher (recommended: 16.x or 18.x)
   - Download from: [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Package Manager**
   - npm (comes with Node.js)
   - Or yarn (optional): `npm install -g yarn`

3. **Code Editor** (Recommended)
   - Visual Studio Code
   - WebStorm
   - Any editor with React/JSX support

4. **Git** (Optional)
   - For version control
   - Download from: [git-scm.com](https://git-scm.com/)

### 🚀 Quick Start Guide

#### Step 1: Choose a Project
Navigate to any project directory from the list above.

#### Step 2: Install Dependencies
Each project is independent and requires its own installation:

```bash
# Navigate to project folder
cd "Project Name/project_folder"

# Install all dependencies
npm install
```

**What happens during installation:**
- Reads `package.json` file
- Downloads all required packages to `node_modules/`
- Creates `package-lock.json` for version locking
- Typically takes 1-3 minutes depending on internet speed

#### Step 3: Start Development Server

```bash
npm run dev
```

**What you'll see:**
- Vite development server starting
- Local URL (usually `http://localhost:5173`)
- Network URL for mobile testing
- Hot Module Replacement (HMR) enabled

#### Step 4: Open in Browser
- Click the local URL or copy-paste into browser
- The app will automatically reload on file changes

### 📝 Available npm Scripts

All projects use similar scripts (check individual `package.json` for specifics):

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `npm run dev` | Start development server with hot reload |
| **build** | `npm run build` | Create optimized production build |
| **preview** | `npm run preview` | Preview production build locally |
| **lint** | `npm run lint` | Check code for errors and style issues |

### 🏗️ Building for Production

#### Step 1: Create Production Build

```bash
npm run build
```

**What happens:**
- Code is minified and optimized
- Assets are processed and optimized
- Output created in `dist/` folder
- Ready for deployment

#### Step 2: Preview Production Build

```bash
npm run preview
```

**Purpose:**
- Test production build locally
- Verify everything works before deployment
- Check performance and optimizations

### 🔧 Troubleshooting

#### Common Issues and Solutions

1. **Port Already in Use**
   ```bash
   # Error: Port 5173 is already in use
   # Solution: Kill the process or use different port
   npm run dev -- --port 3000
   ```

2. **Module Not Found**
   ```bash
   # Error: Cannot find module
   # Solution: Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Permission Denied (Mac/Linux)**
   ```bash
   # Error: EACCES permission denied
   # Solution: Use sudo or fix npm permissions
   sudo npm install
   # OR better: Fix npm permissions
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   ```

4. **Outdated Node Version**
   ```bash
   # Error: Unsupported Node version
   # Solution: Update Node.js
   # Use nvm (Node Version Manager) if installed
   nvm install 18
   nvm use 18
   ```

5. **Cache Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Clear Vite cache
   rm -rf node_modules/.vite
   ```

### 📦 Project Dependencies

Each project may have different dependencies. Common ones include:

- **React**: UI library (18.2.0 or 19.2.0)
- **React-DOM**: React rendering (matches React version)
- **Vite**: Build tool and dev server (5.x or 7.x)
- **ESLint**: Code linting
- **Redux Toolkit**: State management (E-Commerce project only)
- **React-Redux**: Redux bindings (E-Commerce project only)

### 🌐 Deployment Options

Once built, projects can be deployed to:

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Drag and drop `dist/` folder
   - Or connect GitHub repository

3. **GitHub Pages**
   - Build project
   - Push `dist/` folder to `gh-pages` branch

4. **Traditional Hosting**
   - Upload `dist/` folder contents to web server
   - Configure server for SPA routing

---

## Project Structure

```
My React/
├── myfirstapp/
│   └── myfirstapp/
├── Content Rating/
│   └── content_rating/
├── Event Planner/
│   └── event_planner/
├── Todo List/
│   └── todo_list/
├── Custom Hook/
│   └── custom_hook/
├── Feedback Form/
│   └── feedback_form/
└── E-Commerce Data Rendering using Redux Toolkit/
    └── ecommerce_rtk/
```

---

## Technologies & Skills Summary

### 🛠️ Core Technologies

| Technology | Versions Used | Purpose | Projects Using |
|------------|---------------|---------|----------------|
| **React** | 18.2.0, 19.2.0 | UI library and component framework | All projects |
| **React-DOM** | 18.2.0, 19.2.0 | DOM rendering for React | All projects |
| **Vite** | 5.2.0, 7.2.4, 7.3.0 | Build tool, dev server, HMR | All projects |
| **Redux Toolkit** | 2.2.2 | State management library | E-Commerce |
| **React-Redux** | 9.1.0 | React bindings for Redux | E-Commerce |
| **ESLint** | 8.57.0, 9.39.1 | Code linting and quality | All projects |

### 📚 Skills & Concepts Covered

#### React Fundamentals
- ✅ Component creation (functional and class)
- ✅ JSX syntax and rendering
- ✅ Props and prop passing
- ✅ State management (`useState`, class state)
- ✅ Event handling
- ✅ Conditional rendering
- ✅ List rendering with `map()`
- ✅ Component composition
- ✅ Component lifecycle

#### Advanced React Concepts
- ✅ Custom React hooks
- ✅ `useEffect()` hook and side effects
- ✅ Hook dependencies and cleanup
- ✅ Controlled components
- ✅ Form handling
- ✅ Input validation
- ✅ Error handling

#### State Management
- ✅ Local component state
- ✅ Lifting state up
- ✅ Global state with Redux Toolkit
- ✅ State persistence
- ✅ Immutable state updates
- ✅ State normalization

#### Redux Toolkit (Advanced)
- ✅ Store configuration
- ✅ Creating slices (`createSlice`)
- ✅ Reducers and actions
- ✅ Action creators
- ✅ `useSelector()` hook
- ✅ `useDispatch()` hook
- ✅ Provider setup
- ✅ Immer integration

#### JavaScript/ES6+ Features
- ✅ Arrow functions
- ✅ Destructuring (objects, arrays)
- ✅ Spread operator
- ✅ Template literals
- ✅ Array methods (`map`, `filter`, `reduce`, `find`, `splice`)
- ✅ Object methods
- ✅ Promises and async/await
- ✅ Fetch API
- ✅ Date manipulation

#### CSS & Styling
- ✅ CSS Modules pattern
- ✅ Flexbox layouts
- ✅ CSS Grid (implicit)
- ✅ Responsive design
- ✅ CSS transitions and animations
- ✅ Hover effects
- ✅ Media queries
- ✅ CSS gradients
- ✅ Inline styles in React

#### Development Tools
- ✅ Vite configuration
- ✅ ESLint setup
- ✅ Hot Module Replacement (HMR)
- ✅ Development vs Production builds
- ✅ Code organization
- ✅ File structure best practices

#### UI/UX Design
- ✅ User interface design
- ✅ User experience patterns
- ✅ Form design
- ✅ Visual feedback
- ✅ Loading states
- ✅ Error states
- ✅ Responsive layouts
- ✅ Accessibility basics

### 📊 Skills Progression

```
Beginner Level:
├── My First App (Basic React, State Updates)
└── Content Rating (Class Components, State Management)

Intermediate Level:
├── Event Planner (Component Composition, CSS)
├── Todo List (Complex State, Array Manipulation)
└── Feedback Form (Form Handling, User Interaction)

Advanced Level:
├── Custom Hook (Hooks, API Integration)
└── E-Commerce (Redux Toolkit, Global State)
```

### 🎯 Project-Specific Skills Matrix

| Skill | My First App | Content Rating | Event Planner | Todo List | Custom Hook | Feedback Form | E-Commerce |
|-------|--------------|----------------|---------------|-----------|-------------|---------------|------------|
| **Basic React** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Class Components** | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Hooks** | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| **State Management** | Basic | Class State | ❌ | Complex | Hook State | Form State | Redux |
| **Form Handling** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **API Integration** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Custom Hooks** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Redux Toolkit** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Array Operations** | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ |
| **CSS Styling** | Basic | Basic | Advanced | Intermediate | Basic | Advanced | Intermediate |
| **Component Composition** | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |

### 🏆 Learning Path Recommendations

1. **Start Here**: My First App → Content Rating
2. **Build Foundations**: Event Planner → Todo List
3. **Master Forms**: Feedback Form
4. **Advanced Concepts**: Custom Hook → E-Commerce

### 📖 Additional Resources

To deepen your understanding:

- **React Documentation**: [react.dev](https://react.dev)
- **Redux Toolkit Docs**: [redux-toolkit.js.org](https://redux-toolkit.js.org)
- **Vite Documentation**: [vitejs.dev](https://vitejs.dev)
- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org)

---

## 🚀 GitHub Pages Deployment Guide

This guide provides detailed step-by-step instructions to deploy each of the 7 projects separately to GitHub Pages. Each project will have its own GitHub repository and live URL.

### 📋 Prerequisites for Deployment

Before starting, ensure you have:

1. **GitHub Account**: Create one at [github.com](https://github.com) if you don't have one
2. **Git Installed**: Verify with `git --version`
3. **GitHub Repository**: Create a new repository for each project (or use existing ones)
4. **Node.js & npm**: Already installed from previous setup

### 🎯 Deployment Strategy

**Option 1: Separate Repositories** (Recommended)
- Each project in its own GitHub repository
- Independent deployments
- Separate URLs

**Option 2: Monorepo with Subfolders**
- All projects in one repository
- Each project deployed separately
- More complex setup

We'll use **Option 1** (separate repositories) for clarity.

---

## 📦 Project 1: My First App Deployment

### Step 1: Navigate to Project Directory
```bash
cd myfirstapp/myfirstapp
```

### Step 2: Install gh-pages Package
```bash
npm install gh-pages --save-dev
```

### Step 3: Update vite.config.js

Open `vite.config.js` and add the `base` property:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/myfirstapp/",  // Replace "myfirstapp" with your repository name
})
```

**Important**: Replace `"myfirstapp"` with your actual GitHub repository name (case-sensitive).

### Step 4: Update package.json

Add the deploy scripts to the `scripts` section:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Initialize Git (if not already done)
```bash
git init
```

### Step 6: Create .gitignore (if not exists)
Create `.gitignore` file with:
```
node_modules
dist
.DS_Store
*.log
.env
```

### Step 7: Add and Commit Files
```bash
git add .
git commit -m "Initial commit - My First App"
```

### Step 8: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `myfirstapp` (or your preferred name)
3. Description: "My First React App - Real-time clock display"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 9: Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/myfirstapp.git
# Replace YOUR_USERNAME with your GitHub username
```

### Step 10: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### Step 11: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 12: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **gh-pages** branch
5. Click **Save**

### Step 13: Access Your Live Site
Your site will be available at:
```
https://YOUR_USERNAME.github.io/myfirstapp/
```

**Wait 1-2 minutes** for GitHub Pages to build and deploy.

---

## 📦 Project 2: Content Rating Deployment

### Step 1: Navigate to Project Directory
```bash
cd "Content Rating/content_rating"
```

### Step 2: Install gh-pages Package
```bash
npm install gh-pages --save-dev
```

### Step 3: Update vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/content-rating/",  // Replace with your repository name
})
```

### Step 4: Update package.json

Add deploy scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview --host",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Initialize Git
```bash
git init
git add .
git commit -m "Initial commit - Content Rating App"
```

### Step 6: Create GitHub Repository
- Repository name: `content-rating`
- Description: "Content Rating App - Like/Dislike Component"

### Step 7: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/content-rating.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy
```bash
npm run deploy
```

### Step 9: Enable GitHub Pages
- Settings → Pages → Source: **gh-pages** branch

### Step 10: Access Live Site
```
https://YOUR_USERNAME.github.io/content-rating/
```

---

## 📦 Project 3: Event Planner Deployment

### Step 1: Navigate to Project Directory
```bash
cd "Event Planner/event_planner"
```

### Step 2: Install gh-pages Package
```bash
npm install gh-pages --save-dev
```

### Step 3: Update vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/event-planner/",  // Replace with your repository name
})
```

### Step 4: Update package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite build; vite preview --host",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Git Setup
```bash
git init
git add .
git commit -m "Initial commit - Event Planner"
```

### Step 6: Create GitHub Repository
- Repository name: `event-planner`
- Description: "Event Planner Landing Page - Multi-section React App"

### Step 7: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/event-planner.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy
```bash
npm run deploy
```

### Step 9: Enable GitHub Pages
- Settings → Pages → Source: **gh-pages** branch

### Step 10: Access Live Site
```
https://YOUR_USERNAME.github.io/event-planner/
```

---

## 📦 Project 4: Todo List Deployment

### Step 1: Navigate to Project Directory
```bash
cd "Todo List/todo_list"
```

### Step 2: Install gh-pages Package
```bash
npm install gh-pages --save-dev
```

### Step 3: Update vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/todo-list/",  // Replace with your repository name
})
```

### Step 4: Update package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite build && vite preview --host",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Git Setup
```bash
git init
git add .
git commit -m "Initial commit - Todo List App"
```

### Step 6: Create GitHub Repository
- Repository name: `todo-list`
- Description: "Advanced Todo List - Hierarchical Task Management"

### Step 7: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/todo-list.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy
```bash
npm run deploy
```

### Step 9: Enable GitHub Pages
- Settings → Pages → Source: **gh-pages** branch

### Step 10: Access Live Site
```
https://YOUR_USERNAME.github.io/todo-list/
```

---

## 📦 Project 5: Custom Hook Deployment

### Step 1: Navigate to Project Directory
```bash
cd "Custom Hook/custom_hook"
```

### Step 2: Install gh-pages Package
```bash
npm install gh-pages --save-dev
```

### Step 3: Update vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/custom-hook/",  // Replace with your repository name
})
```

### Step 4: Update package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite build && vite preview --host",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Git Setup
```bash
git init
git add .
git commit -m "Initial commit - Custom Hook Demo"
```

### Step 6: Create GitHub Repository
- Repository name: `custom-hook`
- Description: "Custom React Hook - useFetch Implementation"

### Step 7: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/custom-hook.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy
```bash
npm run deploy
```

### Step 9: Enable GitHub Pages
- Settings → Pages → Source: **gh-pages** branch

### Step 10: Access Live Site
```
https://YOUR_USERNAME.github.io/custom-hook/
```

**Note**: API calls in this project require CORS-enabled APIs or may need backend proxy.

---

## 📦 Project 6: Feedback Form Deployment

### Step 1: Navigate to Project Directory
```bash
cd "Feedback Form/feedback_form"
```

### Step 2: Install gh-pages Package
```bash
npm install gh-pages --save-dev
```

### Step 3: Update vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/feedback-form/",  // Replace with your repository name
})
```

### Step 4: Update package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite build && vite preview --host",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Git Setup
```bash
git init
git add .
git commit -m "Initial commit - Feedback Form"
```

### Step 6: Create GitHub Repository
- Repository name: `feedback-form`
- Description: "Feedback Form - Star Rating Component"

### Step 7: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/feedback-form.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy
```bash
npm run deploy
```

### Step 9: Enable GitHub Pages
- Settings → Pages → Source: **gh-pages** branch

### Step 10: Access Live Site
```
https://YOUR_USERNAME.github.io/feedback-form/
```

---

## 📦 Project 7: E-Commerce Deployment

### Step 1: Navigate to Project Directory
```bash
cd "E-Commerce Data Rendering using Redux Toolkit/ecommerce_rtk"
```

### Step 2: Install gh-pages Package
```bash
npm install gh-pages --save-dev
```

### Step 3: Update vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-rtk/",  // Replace with your repository name
})
```

### Step 4: Update package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite build && vite preview --host",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Git Setup
```bash
git init
git add .
git commit -m "Initial commit - E-Commerce Redux Toolkit"
```

### Step 6: Create GitHub Repository
- Repository name: `ecommerce-rtk`
- Description: "E-Commerce App - Redux Toolkit State Management"

### Step 7: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-rtk.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy
```bash
npm run deploy
```

### Step 9: Enable GitHub Pages
- Settings → Pages → Source: **gh-pages** branch

### Step 10: Access Live Site
```
https://YOUR_USERNAME.github.io/ecommerce-rtk/
```

---

## 🔄 Updating Deployed Projects

When you make changes to a project and want to redeploy:

### Quick Update Steps

1. **Make your changes** to the code
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. **Redeploy**:
   ```bash
   npm run deploy
   ```

The `predeploy` script will automatically rebuild before deploying.

---

## ⚠️ Common Deployment Issues & Solutions

### Issue 1: "gh-pages: command not found"
**Solution**: Make sure you installed gh-pages in the correct directory
```bash
npm install gh-pages --save-dev
```

### Issue 2: "404 Error" or Blank Page
**Solutions**:
- Check that `base` in `vite.config.js` matches your repository name exactly
- Ensure GitHub Pages is set to `gh-pages` branch
- Wait 2-3 minutes for GitHub to build
- Clear browser cache and try again

### Issue 3: Assets Not Loading (CSS/JS)
**Solution**: Verify the `base` path includes leading and trailing slashes:
```js
base: "/repository-name/"  // ✅ Correct
base: "/repository-name"    // ❌ Missing trailing slash
base: "repository-name/"    // ❌ Missing leading slash
```

### Issue 4: "Repository not found"
**Solution**: 
- Verify repository name matches exactly
- Check GitHub username is correct
- Ensure repository exists on GitHub

### Issue 5: Build Errors
**Solution**: Test build locally first:
```bash
npm run build
npm run preview
```
Fix any errors before deploying.

### Issue 6: Routing Issues (404 on refresh)
**Solution**: For React Router apps, you may need:
- Use HashRouter instead of BrowserRouter, OR
- Add `_redirects` file in `public/` folder with:
  ```
  /*    /index.html   200
  ```

---

## 📊 Deployment Checklist

For each project, verify:

- [ ] `gh-pages` installed as dev dependency
- [ ] `base` path set in `vite.config.js`
- [ ] `predeploy` and `deploy` scripts added to `package.json`
- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] Remote origin added
- [ ] Code pushed to GitHub
- [ ] `npm run deploy` executed successfully
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Site accessible at `https://username.github.io/repo-name/`

---

## 🌐 Your Live URLs Summary

After deploying all 7 projects, you'll have:

1. **My First App**: `https://YOUR_USERNAME.github.io/myfirstapp/`
2. **Content Rating**: `https://YOUR_USERNAME.github.io/content-rating/`
3. **Event Planner**: `https://YOUR_USERNAME.github.io/event-planner/`
4. **Todo List**: `https://YOUR_USERNAME.github.io/todo-list/`
5. **Custom Hook**: `https://YOUR_USERNAME.github.io/custom-hook/`
6. **Feedback Form**: `https://YOUR_USERNAME.github.io/feedback-form/`
7. **E-Commerce**: `https://YOUR_USERNAME.github.io/ecommerce-rtk/`

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 📄 License

Most projects in this repository are licensed under the **Apache License 2.0**. See individual `LICENSE` files in each project directory for complete license details.

**Copyright 2020 IBM Developer Skills Network**

Licensed under the Apache License, Version 2.0. See LICENSE files for full terms.

---

## 🙏 Acknowledgments

- Projects are based on learning materials from IBM Developer Skills Network
- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)
- State management powered by [Redux Toolkit](https://redux-toolkit.js.org)

---

## 👤 About This Repository

This repository represents a comprehensive React learning journey, progressing from basic concepts to advanced state management patterns. Each project builds upon previous knowledge while introducing new concepts and techniques.

**Purpose**: This collection demonstrates:
- Progressive skill building in React development
- Real-world application patterns and best practices
- Modern React development workflows
- State management from local to global (Redux Toolkit)
- Component architecture and composition
- Form handling and user interaction patterns
- Custom hooks and API integration

---

## 📝 Important Notes

### Project Independence
- ✅ Each project is **completely independent**
- ✅ Can be run separately without affecting others
- ✅ Has its own `node_modules` and dependencies
- ✅ Can be copied/moved individually

### Version Differences
- Projects use **React 18.2.0** and **React 19.2.0**
- Different **Vite versions** (5.x and 7.x)
- All versions are compatible and functional
- No conflicts between projects

### Build Artifacts
- Some projects include `dist/` folders (production builds)
- These can be safely deleted and regenerated with `npm run build`
- Not required for development

### Best Practices
- ✅ Modern React patterns (hooks preferred)
- ✅ Component-based architecture
- ✅ Separation of concerns
- ✅ Reusable code patterns
- ✅ Clean code principles
- ✅ Responsive design considerations

### Getting Help
- Check individual project READMEs (if available)
- Review code comments in source files
- Consult React documentation
- Check browser console for errors
- Verify Node.js and npm versions

---

## 🤝 Contributing

This is a learning portfolio repository. If you find any issues or have suggestions for improvements:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/improvement`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add some improvement'`)
5. **Push to the branch** (`git push origin feature/improvement`)
6. **Open a Pull Request**

### Code Style
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure code is properly formatted

---

## 📚 Learning Resources

### Recommended Learning Path
1. Start with **My First App** to understand React basics
2. Progress through **Content Rating** to learn class components
3. Build **Event Planner** to master component composition
4. Create **Todo List** for complex state management
5. Implement **Feedback Form** for form handling
6. Explore **Custom Hook** for reusable logic
7. Master **E-Commerce** for Redux Toolkit

### Additional Learning Materials
- [React Official Documentation](https://react.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

## ⭐ Show Your Support

If you find this portfolio helpful for learning React, please consider:
- ⭐ Starring this repository
- 🍴 Forking the repository
- 📝 Sharing with others learning React
- 🐛 Reporting bugs or issues

