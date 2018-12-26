Newsfeed Website
========================

This repository contains the code for a newsfeed, news, blog, etc. website. The
licensing for this code will be a standard MIT license. Anyone who comes across
this code and likes the functionality implemented in this codebase is free to
clone the code and use it for personal or commercial purposes.

## The User Interface (UI):

For the time being, the UI will be heavily inspired by Thinkster's [realworld.io](https://github.com/gothinkster/realworld) project and the UI of the super-blog [Medium](https://medium.com/). This will be until my skills develop to the level to shift in a more original direction.

## For more information go to the Wiki:

If you are looking for more information related to this project not brought up
in this README, look to the wiki for answers. Currently the wiki is pretty
barren, but it will be updated overtime with more information.

## Settings for this project

This project only has two sets of settings at this current time. The local
settings are two Docker containers. One runs Django and another runs an image
of PostgreSQL that is maintained by the Docker company itself.

The production settings are set for uploading the website to a Heroku cloud
server and serving images from an AWS S3 server. Feel free to change either the
production or local settings at will.
