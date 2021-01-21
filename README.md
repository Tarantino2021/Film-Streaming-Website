# Film-Streaming-Website

Movie Streaming mock website inspired by multiple website UI/UX designs. I have combined those to build this website. It has 7 pages with their own contents. I used FlexBox and Grids extensively in the website. It is fully responsive. I have used functional components and hooks as well as Context API to be able to avid prop-drilling and let my components have access to the global data. 

I have spent the most time building this site. I have combined all my knowladge, and as I was building it I read and learned more buildings specific parts of it. I really enjoy the maintanance quility of the React, meaning it is very ceasy toseperate into smaller parts and that also alows me to specifically see what needs to be fixed. It is also easier to debug. I have tried to include the the modern usage of Javascript ES6+ and as well as UI/UX trends. I have used Framer Motion animation to add smotther animation transitions as well as scroll animation. The main thing i keep in mind when writing code in React is limit each component to 100-150 lines. that way it is a great reminder for me to break the code down to smaller chunks in case I see it goes over 150 lines.

At first I have unilized API requests to bring in MovieDB data, but then for the sample purposes I have created local data, from which I just map over and show on the page.

There are Home page as well as 6 other pages: About, Contact, Gifts, Press, WaysToWatch, Memberships. It also has shared Footer and Header. Also there is a Modal with seperate components for LogIn and Sign Up.

* Home  has 5 sections with each being a component.I utilize Framer motion scroll animation to transition between the headline text as we scroll down the Banner section. The other sections include parralax effect with the scroll animation.

* The About has 6 sections as components. I have utilized FlexBox in this page on many components. I have also created a slider with Interval as well as with circles that take us to the right index when clicked. Also it stopps playing as soon as the mouse is over the slider, as well as starts to play again when we move the mouse away from it.

* The Contact section is prett self-explentory. I have utilized Yup for validation and React-Hook-Form. When the form is submitted it notifies the user. You can check the submitted form on the console log. Also utilize FlexBox. 

* The Gifts section has 5 sections as components. But i have done an interesting thing in this section. I have made the background of the page fixed weith the image, and the body of it is relative. This way the sections seem as if they are just apearing to the viewport as we scroll, but the background stays the same. In the last section of this page I utilize CSS Grid, where i map over the movie data I have and show each movie poster with its info, plus I have included a Modal screen when you click on each poster, which in return opens a Youtube trailer of clicked film. 

* Press has 5 sections as components. Pretty simple layout design. mostly used FlexBox to manipulate the positioning. In the last section maped over the data and used FlexBox again with flex wrap for responsivness. 

* WaysToWatch/ Memberships this pages have different layouts but they are pretty static and both use FlexBox to create tables in their own pages. 

* Modal has various components within itself. I have utilized the react Hooks and conditional rendering to see what the user clicked on. initial state is "LogIn", but i pass in conditional string into state based on the click events it shows the component:SignUp,LogIn,PassWord,Sent..

The entire application is wrapped around Context API and is passing all the needed data down to whatever compionent is needed. Most of the state and funcionality is in the Context.


Overall, I have learned a great deal when i worked on this project. I'm sure there are many parts in the code that can be improved, im sure as I learn more and get my skills better i will be able to add improvments to it.

I utilized in this project:

 	* ReactJS
  
 	* Javascript
  
 	* SASS
  
 	* Material-Ui
  
 	* Framer Motion
  
 	* React-Hook-Form
  
 	* React-Youtube
  
 	* React-Router-Dom


