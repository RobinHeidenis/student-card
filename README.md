<div align="center">
    <a href="https://fractum-student-card.vercel.app">
        <img src="public/android-chrome-192x192.png" alt="Logo" width="80" height="80">
    </a>
    <h1>Student Card</h1>
    <p><i>Customizable THUAS like student card remake on the web</i></p>
    <h4>Get Student Card</h4>

[![PWA](https://img.shields.io/badge/Visit_and_install-%235A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://fractum-student-card.vercel.app)
</div>

<!-- TOC -->
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
          <ul>
            <li><a href="#language">Language</a></li>
            <li><a href="#styling">Styling</a></li>
            <li><a href="#hosted-on">Hosted on</a></li>
            <li><a href="#installable-as">Installable As</a></li>
          </ul>
        </li>
        <li>
          <a href="#screenshots">Screenshots</a>
          <ul>
            <li><a href="#student-card">Student Card</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#theme">Theme</a></li>
            <li><a href="#school-logo">School logo</a></li>
          </ul>
        </li>
      </ol>
</details>
<!-- TOC -->

## About the project

Student Card is a remake of the THUAS (The Hague University of Applied Sciences) app. The app shows a student card, and
a settings modal that allows you to change all the information displayed, the theme color, and the school logo. It also
has a sharing feature, which allows you to share your student card with others.

I created it for <i>Educational Purposes Only</i>™, and to learn more about SolidJs and TailwindCSS. This was also an
opportunity to recreate an existing layout as well as possible, which I've accomplished quite well (if I do say so
myself).

## Features

✔️ Student card <br>
✔️ Customizable information <br>
✔️ Settings modal using Dialog <br>
✔️ Custom theming <br>
✔️ Shareable settings <br>

## Technologies

The project uses the following technologies:

#### Language:

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

#### Framework:

[![SolidJs](https://img.shields.io/badge/SolidJs-%232C4F7C.svg?style=for-the-badge&logo=solid&logoColor=white)](https://solidjs.com)

#### Styling:

[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com) <br/>

#### Hosted on:

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

#### Installable as:

[![PWA](https://img.shields.io/badge/pwa-%235A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://fractum-student-card.vercel.app)

## Screenshots

### Original App

<details open>
    <summary>Collapse picture</summary>

![original-app.png](assets/original-app.png)
</details>

This is the original MyTHUAS app, which was the main reference for this project.
I tried to find icons that looked as similar as possible to the original ones, but my icon library did not have all of them.

### Student Card

<details open>
    <summary>Collapse picture</summary>

![main-page.png](assets/main-page.png)
</details>

The main page shows the student card and your enrollment facts. These can be customized in the settings modal,
accessible through the "more" button in the bottom navigation bar.

### Settings

<details open>
    <summary>Collapse picture</summary>

![settings-modal.png](assets/settings-modal.png)
</details>

The settings modal allows you to change all the information displayed on the student card and enrollment facts. You can also change the
theme and the school logo. All the information is saved in local storage, so it will persist between sessions.

The share button opens the native share dialog, which allows you to share your student card with others. The shareable
link will contain all the information you've entered on the settings modal.

### Theme

<details open>
    <summary>Collapse picture</summary>

![color-picker.png](assets/color-picker.png)
</details>

The theme can be changed in the settings modal. You can pick a custom color, which will be used by the app as the background color.

<details open>
    <summary>Collapse picture</summary>

![color-changed.png](assets/color-changed.png)
</details>

### School logo

<details open>
    <summary>Collapse picture</summary>

![logo-input.png](assets/logo-input.png)
</details>

The school logo can be changed in the settings modal. You can fill in a URL to an image, which will be used by the app as the school logo.

<details open>
    <summary>Collapse picture</summary>

![logo-changed.png](assets/logo-changed.png)
</details>
