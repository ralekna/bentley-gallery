**Instructions**

Fork the following StackBlitz template and use it as your starting point:  
[https://stackblitz.com/edit/vitejs-vite-ahtwfqa8](https://stackblitz.com/edit/vitejs-vite-ahtwfqa8)

Your task is to build an image gallery web page using the[Picsum Photos API](https://picsum.photos/). Refer to their
documentation for details on how to fetch and display images.

**Main requirements:**

- Do not add any additional packages. You should be able achieve everything with already installed tools.
- Each image should display the author’s name next to it.
- All photos should be fetched and displayed in a single, scrollable container.
- *(Nice to have)*Display photos as tiles, preserving their aspect ratio.

Use your own judgment to make the gallery responsive, performant, and user-friendly.  
When you’re finished, make sure your StackBlitz project is publicly accessible and send us the link (destination to be
determined).

## Setup

### Running the Project Locally

To run the project locally, follow these steps:

1. Copy the template .env file to .env

```bash
cp .env.template .env
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/` to see the application in action.

### Running Tests

To run the tests, use the following command:

1. Install playwright browsers

```bash
npx playwright install
```

2. Run the tests

```bash
npm test
```