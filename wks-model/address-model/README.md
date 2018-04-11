## Steps from [WKS Documentation](https://console.bluemix.net/docs/services/watson-knowledge-studio/index.html#wks_overview_full) to Upload WKS Artifacts from another WKS workspace

### Order of Upload Operations
1. **Type System** - `JSON`
>To upload a type system, open the Assets & Tools > Entity Types page and click `Upload` to upload the `JSON` file that you downloaded.

2. **Dictionaries** - `ZIP` or `CSV`**(DO NOT RUN THE DICTIONARY PRE-ANNOTATOR, OR ANY OTHER PRE-ANNOTATOR)**

*Note:* The type system and dictionaries must originate from the same Knowledge Studio workspace, and the type system must exist in the new workspace before you upload the dictionaries.

>To upload dictionaries, open the Dictionaries tab and either add a `CSV` file that you downloaded or upload the `ZIP` file if multiple files.

>To make sure the dictionary is not a preview only dictionary go to Manage Dictionaries > Click `Create Dictionary`. Label the dictionaries, then click `Upload` to import the CSV.

>Once dictionary is uploaded make sure to map each dictionary to an Entity Type in the drop menu.

3. **Documents** - `ZIP`

>To upload documents, open the Document Sets tab in the new workspace, click Upload Document Sets and select the corpus ZIP file that you downloaded. Specify whether you want the uploaded documents to include or exclude the ground truth annotations before you click `Upload`. Only annotations that were promoted to ground truth before the documents were downloaded will be uploaded.
