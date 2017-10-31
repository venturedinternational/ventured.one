### design guide for Web Landing Page

1. enviroment setup
    - [install](https://www.sketchapp.com/) sketch 3
    - [signup](https://zeplin.io/) and [install](https://app.zeplin.io) zeplin
    - install sketch plugins
        - [Official svgo-compressor](https://github.com/BohemianCoding/svgo-compressor)
        - [Zeplin exportor](comes with the zeplin installation)

2. import Roboto Font from Google Font in index.html or root of css file (DONE)
```css
<!--in html-->
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet">

<!--in css-->
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');

<!--css setting-->
font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', 'Helvetica' sans-serif;
```

3. start to use zeplin on Mac or webversion
- web [link](https://zpl.io/zXHnU)

4. Workflow for Landing page
so the workflow is like following
1. Check `ventured-assets-exported.sketch` file for overall design
2. check [this Zeplin Project in the chrome](https://zpl.io/zXHnU) for css settings
3. no svg exported needed as all of them are already in the relavant folder sitting right besides its `index.js`
4. if any svg asset is broken/or not good, consider to go back to sketch and export the certain asset indivisually or contact Andy
5. Keep doing 1~3 or + 4
 
6. Andy will come later to add some animations and make sure it's perfectly RWD