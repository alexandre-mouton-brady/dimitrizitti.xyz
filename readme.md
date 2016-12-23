# Dimitrizitti.xyz Source Code

I was given the opportunity to craft a portfolio. This is actually for a friend of mine. This README will serve as information for the build path

![website screenshot](https://github.com/alexandre-mouton-brady/dimitrizitti.xyz/tree/master/assets/showcase.png)

## Technologies Used
*A quick summary of the Technologies I used to craft it*

* PHP7: Indeed, the website is separated in elements, that I include with PHP.
* JavaScript ECMA5: The goal is to support a maximum of browser for visibility. I avoided all the ECMA6 functionality - and I miss it -
* SASS: I used SASS as my preprocessor. Folder structure is similar to the [inuit.css](https://github.com/inuitcss/inuitcss) one.
* GULP: I didn't want to setup the entire webpack stuff when I could just make a couple copy/paste from the gulp website to have a fully operational environement.

## Design process
*How did I come up with the design?*

Well I'm no designer and I strongly believe that pretty much every design idea has already been expoloited. Nowaday it's a matter of whose can adapt an already existing idea the most efficient and trending way. I stumbled upon [this ressource](https://github.com/inuitcss/inuitcss), and sent it to my friend for him to pick a design he liked. He picked [this one](https://dribbble.com/shots/2929204-Pro-Resume-CV-Sam) from Bill Mawhinney, which is kind of a CV. Here was my challenge to adapt it for the web.

The lighter the better. I kept the right side fixed and added a fixed nav bar on the top to navigate to the different sections. It naturally came up and the last part was the 'main' part which is a scrollable area. It's ok to have such limited space (on desktop) because it's mainly text and image. There's no hurting for the eye as the line remains long enough for the eye to not be tired.

The color palette is the one from [open color](https://yeun.github.io/open-color/), I love it so much, it's my main palette. Stunning color, awesome contrast. Fit everywhere.

## Building process
*Differences between developpement and production*

Well there's not much done. It's such a simple workflow really, all I'm doing is transpile the SASS into CSS so I can inject it during devloppement. When it comes to production, I take the CSS generated and pass it through some POSTCSS plugins such as:

* [Autoprefixer](https://autoprefixer.github.io/)
* [cssnano](http://cssnano.co/)

All of that done with GULP
