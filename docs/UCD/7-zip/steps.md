
# Steps

## Extract archive

Extract 7zip archive

| Name              | Type        | Description                                                                               | Required |
|-------------------|-------------|-------------------------------------------------------------------------------------------|----------|
| Directory Offset  | textBox     | The directory offset relative to the current working directory where the step should run. | false    |
| Include Files     | textAreaBox | A new line separated list of file filters for files to include.                           | true     |
| Exclude Files     | textAreaBox | A new line separated list of file filters for files to exclude.                           | false    |
| Extract Directory | textBox     | The directory where the archives should be extracted.                                     | true     |