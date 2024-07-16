# ZARA WEB CHALLENGE

This repository involves developing an application to retrieve detailed information on various Marvel characters using the Marvel API found at [Marvel Developer](https://developer.marvel.com/docs).

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Prerequisites & Installation Instructions](#prerequisites--installation-instructions)
- [Available scripts](#available-scripts)
- [Folder structure](#folder-structure)
- [Architecture and Project Structure](#architecture-and-project-structure)
- [Technical Decisions and Trade-offs](#technical-decisions-and-trade-offs)
- [Deploy on Vercel](#deploy-on-vercel)

## Prerequisites & Installation Instructions

**Stack:** React >= 18 and Node >=18.17

Create a copy of `.env.local.example` and name it `.env.local`. Then, fill in the empty fields as required.

Both `CHARACTERS_API_KEY_PRIVATE` and `CHARACTERS_API_KEY_PUBLIC` can be found at https://developer.marvel.com/account. You'll need an account to get the keys.

Run `npm i` to install dependencies.

## Available scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run test`

Launches the test runner.\
See the section about [running tests with Next.js](https://nextjs.org/docs/app/building-your-application/testing/jest) for more information.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.

### `npm run build` and `npm run start`

Runs the app in production mode.\
Builds the app for production.\
It bundles React in production mode and optimizes the build for the best performance. The app is ready to be deployed!

### `npm run prettier`

Executes the Prettier code formatter on all files in the project directory (denoted by `.`). The `--write` option tells Prettier to not only format the files but also overwrite them with the formatted code, effectively applying the changes. This script is used to ensure that all the code in the project adheres to a consistent style.

### `npm run lint`

Analyzes the code to find problems, enforce coding standards, and prevent errors.

## Folder Structure

A brief description of the most important folder structure:

```
src/
├── components/       # Reusable components
├── context/          # Contexts for global state management
├── app/              # Application pages and layouts
├── public/           # Static files like images
├── services/         # Api service
├── types/            # Type definitions
├── utils/            # Utility functions
├── __mocks__/        # Contains mock data
```

In Next.js, routes for pages are automatically generated based on the structure of folders and files within the `app` directory. Each TypeScript file in the `app` folder corresponds directly to a route in the web application. Here's the project structure:

```
/app
  /page.tsx           --> Route: /
  /layout.tsx         --> global header
  /characters
    /[charactersId]
        /page.tsx     --> Route: /characters/:characterId
  /favorites
    /page.tsx         --> Route: /favorites
```

In our application setup:

- `/app/page.tsx` corresponds to the root route of the application (`/`).
- `/app/layout.tsx` is a global header.
- `/app/favorites/page.tsx` maps to the `/favorites` route.
- `/app/characters/[charactersId]/page.tsx` defines a dynamic route that could represent URLs such as `/characters/:characterId`

## Architecture and Project Structure

An overview of the project's architecture:

**Frontend**:
NextJS with Typescript.

- Utilizing Next.js enables Server-Side Rendering (SSR), enhancing our application's performance and SEO. Additionally, deployment is streamlined and efficient with [Vercel](https://vercel.com/docs), offering a hassle-free process directly integrated with the Next.js framework.

**State Management**

- Usage of Context API for managing global state.
- Use cookies to store user favorites, so the value can be used in SSR.

**Data fetching**

- All data fetching to Marvel's API is done server-side.
- That's why filter value is pushed to the URL, so the server can use the value.

**Styling**

- [Styled Components](https://styled-components.com/) for styling.
- CSS variables for reusable values.

**Testing**

- I added unit tests to utility functions, and integration tests using React Testing Library to the most important components. I did not try to achieve 100% coverage by any means, just giving enough confidence that the component works as intended.

## Technical Decisions and Trade-offs

- To handle the requirement of **Usage of Context API for managing global state**, I create Favorites context, also synchronized with the backend with cookies.

- **Filtering Marvel Characters**: Initially, it was requested that the character filtering should include those containing keyword anywhere in their names. However, the Marvel API only supports filtering characters whose names start with the given keyword. To align with the API's capabilities, I decided to modify the filtering criteria to match characters whose names begin with the specified keyword. To maintain consistency, the filtering for favorite characters on the frontend also filters by names starting with the specified keyword.

- **Figma Design Adjustments**: The Figma designs contained decimal values for certain measurements, which were rounded down for implementation. For example, a value of 19.5px was rounded down to 19px.

- **Image URL Warnings in Production**: In the deployed version of the application, there are warnings for the images used (thumbnails). This is because the URLs of the thumbnails use HTTP instead of HTTPS. In this case, I chose not to modify the data returned by the backend.

- **Progress Bar and Search Icon Implementation**: For the implementation of the progress bar, I preferred to use an external dependency. This choice was made to leverage the reliability and functionality of a well-maintained library, saving development time and ensuring a smooth user experience.

- **Favorites data fetching and filtering**: The API does not provide any method to fetch multiple characters by id. To implement the favorites tab, I'm triggering a request per each character instead as that's the only workaround possible. After fetching all favorites, the list is filtered with the value from the input in the client application. This is not the best approach, in order to build this feature properly we would need a new API endpoint.

## Deploy on Vercel

Click [here](https://marvel-app-next-js.vercel.app/) to check vercel deployment.
