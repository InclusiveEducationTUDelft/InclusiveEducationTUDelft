# Inclusive Stem Education @ TU Delft

## Technical Assistance
### Stack of the Project
The stack of the project is React with Typescript. Because the team wanted to minimize the costs of maintaining the website, the portal is a full frontend application which fetches data from markdown and json.

### Running the Project
1. Clone the Project
Open a terminal and run `git clone https://github.com/InclusiveEducationTUDelft/InclusiveEducationTUDelft.git`
Change the working directory to the project `cd InclusiveEducationTUDelft`

2. Ensure you have Node installed
Run `node -v` in the terminal. It should tell you the version you're using (e.g. `v1.0`).
If node is not installed, run the installation from [here](https://nodejs.org/en/download/prebuilt-installer).

3. Install the dependencies
Install the dependencies by running `npm install` in the terminal. Make sure the directory you are in is `InclusiveEducationTUDelft`.

4. Run the development server
Run the development server with `npm run dev`. 
The output of the command should tell you what port you're running on (e.g. `Local:   http://localhost:5173/`).
You can view the website from the URL `localhost:port` (5173 in the previous case, sometimes 5174).

### Expected Prior Knowledge
All of the examples and tips are written in markdown. You can practice writing markdown in an online editor like [StackEdit](https://stackedit.io/) or take a look at the list of markdown tags [here](https://www.markdownguide.org/basic-syntax/).
A lot of the data works with JSON objects. Understanding JSON is required for updating the examples or tips displayed on the landing page or editing the tip of the day. You can view a quick video explaining JSON [here](https://www.youtube.com/watch?v=7mj-p1Os6QA).

### Examples Management
The example content is placed in the `public/data/examples` folder.
For a more detailed guide on how to handle examples refer to the `example_management` file in the `docs` folder.

### Tips Management
The tips content is placed in the `public/data/tips` folder.
For a more detailed guide on how to handle examples refer to the `tips_management` file in the `docs` folder.

### Tip of the Day Management
The tip of the day data is in the `public/data/tip_of_the_day.json` file.
For a more detailed guide on how to handle tip of the day refer to the `totd_management` file in the `docs` folder.

### Glossary Management
The glossary data is in the `public/data/glossary.json` file.
For a more detailed guide on how to handle glossary data refer to the `glossary_management` file in the `docs` folder.