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

### Examples Management
The example content is placed in the `public/data/examples` folder.
For a more detailed guide on how to handle examples refer to the `example_management` file in the `docs` folder.

### Tips Management
The tips content is placed in the `public/data/tips` folder.
For a more detailed guide on how to handle examples refer to the `tips_management` file in the `docs` folder.

### Tip of the Day Management
The tip of the day data is in the `public/data/tip_of_the_day.json` file.
For a more detailed guide on how to handle tip of the day refer to the `totd_management` file in the `docs` folder.