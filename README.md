# Task Manager Application

## Description

This project is a Task Manager application built with Next.js, React, and Redux Toolkit. It allows users to manage their tasks effectively by adding, deleting, and marking tasks as completed. The application provides features like task prioritization, due date management, and task description. It also includes a video details section that fetches and displays information about a specific video.

## Features

- Add new tasks with titles, descriptions, due dates, and priorities
- Delete tasks
- Mark tasks as completed
- View task details and descriptions
- Prioritize tasks based on urgency
- View video details with title and image

## Technologies Used

- Next.js
- React
- Redux Toolkit
- Axios
- Tailwind CSS
- Material-UI

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd task-manager`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000`

## Usage

1. Open the application in your web browser.
2. Use the navigation links in the Navbar to navigate between different sections of the application.
3. In the Home section, use the Task Form to add new tasks. Fill in the required fields and select the priority level.
4. Tasks will be displayed in the Active section. You can mark them as completed or delete them as needed.
5. Completed tasks can be viewed and managed in the Completed section.
6. Clicking on the Details link in the Navbar will take you to the Details page, where you can view information about a specific video.
7. Use the provided buttons to interact with the tasks and navigate through the application.

## Folder Structure

The project follows the standard Next.js folder structure:

- `components`: Contains reusable React components used throughout the application.
  - `atoms`: Contains basic UI components like buttons, alerts, and text fields.
  - `molecules`: Contains more complex components composed of smaller components.
  - `organisms`: Contains larger components that combine multiple molecules and/or atoms.
- `pages`: Contains Next.js page components that define the routes and views of the application.
- `store`: Contains Redux-related files, including reducers and actions.
- `styles`: Contains global CSS styles and Tailwind CSS configuration.

## Contributing

Contributions to this project are welcome! To report bugs or suggest improvements, please create an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
