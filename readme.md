<div align="center">
<h1> HacktoberFest2022</h1>
<p>https://front-yard.herokuapp.com/</p>
<a href="https://github.com/Harshal141/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?lines=AIT-OSS-Club;Hacktoberfest-Accepted;Aitians;Open-Source&center=true&width=500&height=50"></a>
</div>

<br />

# Steps to add your contribution

This project will help you make your first contribution in Hacktoberfest 2022. 
If you are looking to make your first contribution, follow the steps below.
#### [Install git](https://help.github.com/articles/set-up-git/) on your pc or use github desktop

<br />

## Fork repository

<img align="right" width="384" alt="image" src="https://user-images.githubusercontent.com/91362856/194057069-7b24be8f-2259-493b-92ee-1415dab510c9.png">

Fork this repository by clicking on the fork button on the top of this page.

Forking creates a copy of this repository in your account.

## Clone the repository

<img align="right" width="286" alt="image" src="https://user-images.githubusercontent.com/91362856/194058776-0b122d7e-dbd7-4167-9cfb-dcec33e1a368.png">

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon or use github desktop

Open a terminal and run the following git command:

```
git clone "url you just copied"
```
> Example
```
git clone https://github.com/Harshal141/HacktoberFest2022-1.git
```

## Make necessary changes and commit those changes

Submit your frontend code in `/public/code/<Your_filename>`

Visit `/public/js/data.js` and enter your name and project folder name

```js
const data = {
    "Your Name" : "<Your_filename>",
    "Harshal141 " : "hp"
}
```

> note : Dont generate pull request without putting [profile](#enter-your-profile) in `/contributors/index.html`

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add index.html
```

Now commit those changes using the `git commit` command:

```
git commit -m "Add <your-name> to Contributors list"
```

## Submit your changes for review

- If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img width="947" alt="image" src="https://user-images.githubusercontent.com/91362856/194062720-ae400ec8-0e5d-4ffc-8f1b-01c071d86d42.png">

- Now submit the pull request.

<img width="688" alt="image" src="https://user-images.githubusercontent.com/91362856/194063036-055b60a0-5115-497b-83b4-0559567abb09.png">

- Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

<br />

## Enter your profile 
> Use following code to create new profile while adding your main contribution
```html
<div class="col-md-6 col-lg-3 ">
    <div class="img-block mb-5">
        <img src="#" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
        <div class="content mt-2">
            <h4></h4>
            <p class="text-muted"></p>
        </div>
    </div>
</div>
```

## Note
- Change githubUsername with your Github Username in 
```html 
<img src = "https://github.com/<githubUsername>.png">
```
- Fill h4 and p tag with relevant data
```html 
<h4>Your name</h4>
<p class="text-muted">Designation</p>
```
