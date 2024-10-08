
# Tips of the Day Management

## Step One: Locate the JSON file

The tips are stored in the `public/data/tip_of_the_day.json` file.

## Step Two: Understand the JSON structure

The JSON file should look something like this:
```
[

"Use Gender Neutral Pronouns 1",

"Use Gender Neutral Pronouns 2",

"Use Gender Neutral Pronouns 3",

//...

"Use Gender Neutral Pronouns 31"

]

```

This is a JSON array where each line represents an entry. There are 31 entries in the file- one for each day of the month.

## Step Three: Edit entries
Ensure that there will always be 31 entries in the file. For editing a tip for a specific day locate the line where it is present (so line 11 for day 11) and edit it. Make sure the last entry (day 31) does not have a comma at the end of it.