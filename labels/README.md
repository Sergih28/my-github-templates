# Labels

**[Labels list](./github_labels.json)**

**How to:**
1. [Export labels](#export) from the project you'd like. _If you wish to use my labels, you can grab them from [here](github_labels.json)._
1. [Import labels](#import) to the project you want to use them.


## Export

You will have to use [this script](export_github_labels.js) to export the labels.

To use the script, follow these steps:

1. Go to the project's labels section (the one you want to export the labels)
1. Open the browser console (_Option + ⌘ + j or Shift + Ctrl + j_)
1. Paste the code from [the script](export_github_labels.js) and run it
1. Grab the json code that appeared on the console and save it somewhere

_Keep in mind that if there are multiple pages for the labels, you will need to export them page by page._

## Import

You will have to use [this script](import_github_labels.js) to import the labels to the project.

To use the script, follow these steps:

1. Go to the project's labels section (the one you want to import the labels)
1. Open the browser console (_Option + ⌘ + j or Shift + Ctrl + j_)
1. Paste the code from [the script](import_github_labels.js)
1. Replace the empty array [] in the last lines of the file (line below the comment) with the json code you got saved before (or you can use [my labels code](github_labels.json)).
1. Run the code and wait for the magic to happen

If you run the code with **existing labels**:

- If you **update the color**, it will be updated properly
- If you **update the description**, it will be updated properly
- If you want to **update a label's name**, a new one will be created, and the previous one will not be deleted

## Colors

The colors used for the labels are the ones GitHub let's you choose by default

The name of the colors is picked from [this website](https://chir.ag/projects/name-that-color/). If you click on the image, you go there with the selected color.

### List

#### Group 1

[![GUARDSMAN RED](https://img.shields.io/static/v1?style=for-the-badge&label=guardsman_red&message=%23b60205&color=b60205&labelColor=b60205)](https://chir.ag/projects/name-that-color/#b60205)

[![TIA MARIA](https://img.shields.io/static/v1?style=for-the-badge&label=tia_maria&message=%23d93f0b&color=d93f0b&labelColor=d93f0b)](https://chir.ag/projects/name-that-color/#d93f0b)

[![SUPERNOVA](https://img.shields.io/static/v1?style=for-the-badge&label=supernova&message=%23fbca04&color=fbca04&labelColor=fbca04)](https://chir.ag/projects/name-that-color/#fbca04)

[![JAPANESE LAUREL](https://img.shields.io/static/v1?style=for-the-badge&label=japanese_laurel&message=%230e8a16&color=0e8a16&labelColor=0e8a16)](https://chir.ag/projects/name-that-color/#0e8a16)

[![PINE GREEN](https://img.shields.io/static/v1?style=for-the-badge&label=pine_green&message=%23006b75&color=006b75&labelColor=006b75)](https://chir.ag/projects/name-that-color/#006b75)

[![MARINER](https://img.shields.io/static/v1?style=for-the-badge&label=mariner&message=%231d76db&color=1d76db&labelColor=1d76db)](https://chir.ag/projects/name-that-color/#1d76db)

[![SCIENCE BLUE](https://img.shields.io/static/v1?style=for-the-badge&label=science_blue&message=%230052cc&color=0052cc&labelColor=0052cc)](https://chir.ag/projects/name-that-color/#0052cc)

[![PURPLE HEART](https://img.shields.io/static/v1?style=for-the-badge&label=purple_heart&message=%235319e7&color=5319e7&labelColor=5319e7)](https://chir.ag/projects/name-that-color/#5319e7)

#### Group 2

[![TONYS PINK](https://img.shields.io/static/v1?style=for-the-badge&label=tonys_pink&message=%23e99695&color=e99695&labelColor=e99695)](https://chir.ag/projects/name-that-color/#e99695)

[![GIVRY](https://img.shields.io/static/v1?style=for-the-badge&label=givry&message=%23f9d0c4&color=f9d0c4&labelColor=f9d0c4)](https://chir.ag/projects/name-that-color/#f9d0c4)

[![BEESWAX](https://img.shields.io/static/v1?style=for-the-badge&label=beeswax&message=%23fef2c0&color=fef2c0&labelColor=fef2c0)](https://chir.ag/projects/name-that-color/#fef2c0)

[![SURF CREST](https://img.shields.io/static/v1?style=for-the-badge&label=surf_crest&message=%23c2e0c6&color=c2e0c6&labelColor=c2e0c6)](https://chir.ag/projects/name-that-color/#c2e0c6)

[![JUNGLE MIST](https://img.shields.io/static/v1?style=for-the-badge&label=jungle_mist&message=%23bfdadc&color=bfdadc&labelColor=bfdadc)](https://chir.ag/projects/name-that-color/#bfdadc)

[![TROPICAL BLUE](https://img.shields.io/static/v1?style=for-the-badge&label=tropical_blue&message=%23c5def5&color=c5def5&labelColor=c5def5)](https://chir.ag/projects/name-that-color/#c5def5)

[![SPINDLE](https://img.shields.io/static/v1?style=for-the-badge&label=spindle&message=%23bfd4f2&color=bfd4f2&labelColor=bfd4f2)](https://chir.ag/projects/name-that-color/#bfd4f2)

[![PERFUME](https://img.shields.io/static/v1?style=for-the-badge&label=perfume&message=%23d4c5f9&color=d4c5f9&labelColor=d4c5f9)](https://chir.ag/projects/name-that-color/#d4c5f9)
