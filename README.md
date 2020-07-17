# EUSO Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The official website of the Edinburgh University String Orchestra.

## Author

- [Eric Janto](https://www.ericjanto.com)

## License

This project is open source and available under the [MIT License](LICENSE).

---

*This documentation is written for plain beginners.*

## Development Setup

### Tools

The project uses a few tools you need to have installed.
  1. Follow along [these instructions](https://www.gatsbyjs.org/tutorial/part-zero/). Stop where it says 'Create a Gatsby Site'.
  2. You need to have a GitHub account.
  3. Download [VS Code](https://code.visualstudio.com/download).

#### Troubleshooting: Install nvm and node

I had problems installing nvm and node on my mac, here is what I did to solve it:

nvm is a **N**ode **V**ersion **Manager** and let's you install and manage node versions.
node is a server environment.

  1. Follow along [this tutorial](/https://github.com/nvm-sh/nvm) to install nvm.
  2. Run `nvm --version` in your terminal to ensure that it is installed.
  3. Run `nvm install 14.4.0`. This installs node v.14.4.0 on your machine.
  4. This shouldn't be necessary, but to be sure: Run `nvm use 14` and `node -v` to check everything.

### Local Project Setup

Clone Repository

  1. Open VS Code.
  2. Click on the version control icon in the sidebar (the one below the search icon).
  3. Click on 'clone repository'.
  4. Go to the repository of this website on GitHub, click on 'clone' and copy the link.
  5. Go back to VS Code and paste the link, choose a folder where to save it on your machine and press enter.

Link to GitHub

  1. Open the Terminal in VS Code (type ctrl + shift + ` ).
  2. Run `git init` and `git remote add clone-url` (make sure to appropriately replace `clone-url`).
  3. Change this README.md file (add a space or whatever).
  4. Run `git add .` and `git commit -m "test commit"` and `git push`.

Install Node Packages

  1. Delete any `package-lock.json or `yarn.lock` file you can find.
  2. Open Terminal within VS Code.
  3. Run `yarn build`.

### Test Run

To check if everything worked:

  1. Open Terminal within VS Code.
  2. Run `gatsby develop`.
  3. Click on the localhost link.

You can type `alt + c` to terminate the process in your terminal.

## Project Structure (Content)

Below are the files you need to edit if you want to change the content of our website.

We distinguish between Markdown files and .js files.

Good news: Markdowns files are very easy to edit. Markdown is a markup language which is easy to use. The file you're currently reading is made using Markdown. You can't really produce any errors which would stop this website from working (apart from providing the right fields at the beginning, but we'll come to that).

Bad news: .js files are more ... delicate ... to edit. But also easy once you know what you're doing. You can produce errors which break the website so you have to be careful.

You know if a page is not a markdown page if there is anything fancy on it which is not a normal text paragraph, picture or table.

markdown pages: `content/pages`

.js pages: `src/pages`

If you look at these directories and the page names, you know which page relates to which page on the on-line website.

## Changing Content

Run `gatsby develop` in your vs code terminal and go to the localhost page. You can see there the changes you make to your website.

Main things you need to keep updated:

**Composer Typing Animation**

  - Go to `src/pages/index.js`.
  - Press `cmd + f` and search for 'Typewriter'.
  - Jump to the line (around l. 35) where it says:
  ```js
  <Typewriter
  ...
    texts={['Shostakovich', 'Dvořák', 'Beethoven', 'Britten', 'Bridge']}
  ...
  ```
  - Change the names within the quotes.
  - You can also add new names, just make sure to separate them with commas.

**Add a News Article**

  - Go to `content/posts`.
  - Click on 'Create a new file'.
  - Give it a name **following this convention**: `[date]-title.md`
  - The date makes sure that we won't have a naming problem in the future, i.e. that we accidently create the same names and have to search for names which aren't already occupied.
  - Have a look on how other news articles are named to get the idea.
  - Go to another news article and copy the first few lines, e.g.
  - make sure to also copy the three dashes `---`

```markdown
---
date: 2020-07-06
title: 'A Positive Note'
template: post
slug: 2020-07-06-positive-notes
categories:
  - News
tags:
  - 'covid'
  - 'positive notes'
  - 'euso'
  - 'edinburgh university string orchestra'
  - 'edinburgh'
  - 'university of edinburgh'
---
```

  - Paste everything right at the top of your new news article.
  - Change date, title and tags according to your article content.
  - Change the slug: the slug is going to be the new domain of our article, i.e. on which domain it will be accessible to the public. E.g. https://string.eusa.ed.ac.uk/**slug**
  - Make sure to use the **same date / title** convention as for the file naming, but don't put a `.md` there
  - Fill your article with content (follow [this guide](https://guides.github.com/features/mastering-markdown/) if you don't know how to use markdown).

**Update .js pages**

  - Go to the respective page in `src/pages`.
  - Only edit text within `<p>` or `<h1>` tags (or any other number behind the h).
  - Good practice: look within the file for the text you want to change and only change exactly that text without touching anything different.

**Update .md pages**

  - Go to the respective page in `content/pages`.
  - Change the content.

**How do I know which page is a markdown page and which page is a .js page?**

If you don't have any idea, just search for the text you want to change with the search icon on the left sidebar. It'll get you to the file you want to change. Just make sure not to edit files within the `public` folder.

## Publishing the Changed Content

Once you've updated the content you want to publish them under our https://string.eusa.ed.ac.uk/ domain.

  - Run `gatsby build` to create the HTML and static assets that we're provide to our hosting platform
  - Run `gatsby serve` to check if our build worked. Click on the localhost link and check if your changed stuff works.
  - Update the GitHub repository: Click on the version control icon, add a message and press `shift + enter` and confirm the alert.
  - Go to the bottom left and press the up arrow
  - Login to cPanel (instructions on handover sheet)
  - Go to Git Version Control
  - Click on 'Manage' next to the repository name
  - Click on 'Pull or Deploy'
  - Click on 'Update from Remote'
  - Click on 'Deploy from HEAD'

Congratulations, you're updates should now (or within a few seconds) be online!

## Troubleshooting / Known Issues

**1. I have given a correct path to my image but I can't see it on my localhost site.**

Solution: 

  - Run `gatsby clean` and close the localhose tab in your browser
  - Double check the path to your image

Explanation: This is an issue which is related to the Gatsby cache. Gatsby creates a cache so that it doesn't have to load images / videos etc. every single time in case they don't change. Sometimes the cache doesn't get updated automatically, that's why this issue occurs.

**2. `gatsby develop` shows a perfectly fine website on my localhost but when I run `gatsby serve` to double-check, it only shows a white screen.**

Solution:

There can be many reasons for this, an easy way to find out what's stopping the website from runnig smoothly is this process:

  - Open the developer tools (in popular browsers: `Cmd + Alt + i`) and click on the top right icon for errors
  - Fix the error(s)
  
Explanation: I'm quite sure that has something to do with the [difference of runtime and buildtime](https://www.gatsbyjs.org/docs/overview-of-the-gatsby-build-process/#differences-between-develop-and-build).
