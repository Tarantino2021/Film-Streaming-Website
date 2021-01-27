# Film-Streaming-Website

Movie Streaming mock website inspired by multiple website UI/UX designs. I have combined those to build this website. It has 7 pages with their own contents. I used FlexBox and Grids extensively in the website. It is fully responsive. I have used functional components and hooks as well as Context API. 


* Home has 5 sections with each being a component. I utilize Framer motion scroll animation to transition between the headline text as we scroll down the Banner section. The other sections include parallax effect with the scroll animation.

* The About has 6 sections as components. I have utilized FlexBox in this page on many components. I have also created a slider with Interval as well as with circles that take us to the right index when clicked. Also it stops playing as soon as the mouse is over the slider, as well as starts to play again when we move the mouse away from it.

* The Contact section is pretty self-expletory. I have utilized Yup for validation and React-Hook-Form. When the form is submitted it notifies the user. You can check the submitted form on the console log. Also utilize FlexBox.

* The Gifts section has 5 sections as components. In the last section of this page I utilize CSS Grid, where i map over the movie data I have and show each movie poster with its info, plus I have included a Modal screen when you click on each poster, which in return opens a YouTube trailer of clicked film.

* Press has 5 sections as components. Mostly used FlexBox to manipulate the positioning. In the last section maped over the data and used FlexBox again with flex wrap for responsiveness.

* WaysToWatch/ Memberships these pages have different layouts but they are pretty static and both use FlexBox to create tables in their own pages.

* Modal has various components within itself. I have utilized the react Hooks and conditional rendering to see what the user clicked on. Initial state is "LogIn", but i pass in conditional string into state based on the click events it shows the component: SignUp,LogIn,PassWord,Sent..


I utilized in this project:

* ReactJS

* Javascript

* SASS

* Material-Ui

* Framer Motion

* React-Hook-Form

* React-Youtube

* React-Router-Dom



