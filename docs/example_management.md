
# Example Content Management
### Where to find these examples
The example content is located in the `public/data/markdown` folder.
The actual examples can be found under the `examples` page (you can navigate to it using the navbar).

NOTE! The example paths on the main page of the application are hardcoded in the `src/landing/examples/InspiringExamples.tsx` file.

### Markdown content structure:

The first header is the title of the example. A header is the first line in the file with just one # in front of it (h1).

The content that follows the header is going to be the first paragraph.

The title and paragraph are going to be displayed on the examples preview page.

Everything else below these two "lines" is going to be displayed on the actual page of the example.

  

### Example Content Structure:
```
# Example Title

This is the first paragraph, which gives a brief description of the example. This will appear on the examples preview page.

Additional details will appear here.

## Subtitle?
Lorem ipsum dololololo :)

```

## Adding an example:
To add an example manually, follow these steps:
1. Locate the `public/data/markdown` folder:

- Navigate to the `public/data/markdown` folder in your project directory.

2. Update the `data_list.json` file:

- Open the `data_list.json` file, which contains a list of all the content to be displayed on the platform.

- Add a new entry to the JSON array in the following format:
```
[
	"existing_example",
	"existing_example2",
	"your_example"
]
```

- Ensure that the last entry does not contain a comma at the end.
- Use [this](https://jsonlint.com/) website to verify the file is a valid json.

3. Create a Markdown file:
- In the `public/data/markdown` folder, create a new markdown file with the same name as `your_example` you used in `data_list.json`, followed by the `.md` suffix (e.g., `your-example.md`).
- Use the content structure as described above in the markdown file.

NOTE: Adding an entry to the `data_list.json` file without creating a markdown file with the same name will cause errors.

## Editing an example:
To edit an example, simply modify the relevant markdown file in the `public/data/markdown` folder. Ensure that any changes to the title or description are also updated in the `data_list.json` file if necessary.

## Removing an example:
To remove an example, delete the corresponding markdown file from the `public/data/markdown` folder and remove the associated entry from the `data_list.json` file.