
# Tip Content Management
### Where to find these tips
The tip content is located in the `public/data/tips` folder.
The actual tips can be found under the `tips` page.

NOTE! The tip paths on the main page of the application are hardcoded in the `src/landing/tips/InclusiveTips.tsx` file.

### Markdown content structure:

The first header is the title of the tip. A header is the first line in the file with just one # in front of it (h1).

The content that follows the header is going to be the first paragraph.

The title and paragraph are going to be displayed on the tip preview page.

Here's an example:
```
# Example Title

This is the first paragraph, which gives a brief description of the example. This will appear on the examples preview page.

Additional details will appear here.

## Subtitle?
Lorem ipsum dololololo :)
```

There are 3 types of tips:

#### 1. Simple Tips
These tips only appear on the tips page with no "Read More" button.
These tips must only contain the Title and Subtitle.

#### 2. Redirect Tips
These tips will have the "Read More" button redirect to a link you provide.
The format of these tips must be 

```
# TIP 2

This is the second tip- curious to see whether it will redirect to my GitHub page?

[GitHub Page](https://github.com/Gargant0373)
```

The link URL you see is where the button will redirect to.

#### 3. Complex Tips
These are tips that have their own page. In order to create one you must only add content after the subtitle.

## Adding a tip:
To add an example manually, follow these steps:
1. Locate the `public/data/tips` folder:

- Navigate to the `public/data/tips` folder in your project directory.

2. Update the `data_list.json` file:

- Open the `data_list.json` file, which contains a list of all the content to be displayed on the platform.

- Add a new entry to the JSON array in the following format:
```
[
	"tip1",
	"tip2",
	"your_tip"
]
```

- Ensure that the last entry does not contain a comma at the end.
- Use [this](https://jsonlint.com/) website to verify the file is a valid json.

3. Create a Markdown file:
- In the `public/data/tips` folder, create a new markdown file with the same name as `your_tip` you used in `data_list.json`, followed by the `.md` suffix (e.g., `your-tip.md`).
- Use the content structure as described above in the markdown file.

NOTE: Adding an entry to the `data_list.json` file without creating a markdown file with the same name will cause errors.

## Editing a Tip:
To edit a tip, simply modify the relevant markdown file in the `public/data/tips` folder. Ensure that any changes to the title or description are also updated in the `data_list.json` file if necessary.

## Removing a Tip:
To remove a tip, delete the corresponding markdown file from the `public/data/tips` folder and remove the associated entry from the `data_list.json` file.
