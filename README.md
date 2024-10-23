# Image Manipulation Tool

This project is a web application that allows users to search for images, add captions, draw shapes, and download modified images. Built with React, this tool utilizes the Pixabay API for image search and features a canvas for manipulation.

## Demo

You can view the live demo of the application [Assignment](https://image-manipulation-tool.netlify.app/).

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14 or later)
- **npm** (comes with Node.js)

### Installation

1. **Clone the Repository**: 
   - Download the project files to your local machine.

2. **Install Dependencies**:
   - Navigate to the project directory in your terminal and run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   - Start the development server with the command:
   ```bash
   npm start
   ```
   - Open your web browser and go to [Assignment](https://image-manipulation-tool.netlify.app/) to view the application.

## Using the Application

Follow these steps to use the Image Manipulation Tool:

1. **Open the Application**:
   - Once the application is running, you will see the home page with a search bar.

2. **Search for Images**:
   - In the search bar, type a keyword related to the images you want to find (e.g., "Birds").
   - Click the **Search** button to fetch images based on your query.

3. **View Search Results**:
   - After a successful search, a grid of images related to your query will be displayed.
   - If no images are found or an error occurs, a message will inform you of the issue.

4. **Select an Image**:
   - Browse through the displayed images. 
   - Click on any image that you want to edit. This will open the image in an editing canvas.

5. **Manipulate the Image**:
   - **Add Captions**: Type your desired text into the caption box and adjust its position on the image.
   - **Add Shapes**: Use the shape tools to draw on the image. You can customize colors and styles as needed.
   - **Adjust the Canvas**: Move the image around on the canvas to position it as desired.

6. **Download the Modified Image**:
   - After making all your changes, look for the **Download** button (typically found below the canvas).
   - Click the **Download** button to save the modified image to your device. 
   - Your browser will prompt you to choose a location to save the file.

7. **Repeat or Search Again**:
   - If you want to edit a different image, you can click the back button to return to the search results and select another image to edit.

## Built With

- **React**: A JavaScript library for building user interfaces.
- **Pixabay API**: For fetching images based on user search queries.
- **HTML5 Canvas**: For image manipulation and drawing functionalities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).