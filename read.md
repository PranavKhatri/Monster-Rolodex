NPM VS YARN

Install dependencies from package.json: npm install == yarn

Install a package and add to package.json: npm install package --save == yarn add package

Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev

Remove a dependency from package.json: npm uninstall package --save == yarn remove package

Upgrade a package to its latest version: npm update --save == yarn upgrade

Install a package globally: npm install package -g == yarn global add package


installing creating create-react-app which has all the files and folders needed to create the app.

npx create-react-app project-name


npx vs npm:

npx: it is the tool that gets included with NPM. NPX is actually a toll that lives in npm.

npm: It is a node package manager. These packages are just these different node related libraries or files and folders that get created by different tool  developers obline that we can use to help us with our node projects or javascript based projects.

    What this means is that npm is what we use to coordinate and also leverage these different packages that we download.

    Create React App is an example of one of these.

    "NPM is the installation as well as a executable environment."

    cowsay: It is a library that just draws this cow that just pass whatever we want.

    npm i -g cowsay

    cowsay hello

    to check here the cowsay has been downloaded globally: npm list cowsay [if locally] / npm list -g cowsay

    globally download means: downloading on our hard drive or our computer.

    to delete:

    npm uninstall -g cowsay


now, see NPX

    npx cowsay hello

    what npx does is it directly installs all of the required files for this package and it executes it immediatley.

    npm list cowsay  or even npm list -g cowsay is empty.

    as all the list is empty, where it is downloaded

    _______
    < Bruh! >
    -------
            \   ^__^
            \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    (base) pranav@Pranavs-MacBook-Pro react-basics % npm list cowsay
    /Users/pranav/Documents/Web Dev/Reactjs/react-basics
    └── (empty)

    (base) pranav@Pranavs-MacBook-Pro react-basics % npm list -g cowsay
    /opt/homebrew/lib
    └── (empty)

    The npx downloads it, the packages , the latest pacgae and it executes it immediately and then it delectes it immediately from the disk


The main advantage of npx is that one do not have to clog up our environment or disk with all of these different packages that we have to make sure that if we are running the latest version of it, certain things like this, we might just want to use when we need need it and make sure that when we use it, we are using the latest version.cd 


So, the create react app has scaffolded Monster Rolodex project for us.


-------------------------------------------------------------

React Scripts: It is the kind of package helper that create React App gave us so that it can make our life easier when it comes to doing all the different things we need to develop a React App. These rect scripts are just different tools that help us leverage ["start", "build", "test", "eject"] new scripts that were generated for us.

    React scripts are installed in order for us to actually leverage the scripts themselves. Recat scripts does is it helps us better build or application and develop against these 4 commands ["start", "build", "test", "eject"]


    1. Start: Start will take all of the files that we have written for our React application and it will run them in a local development environment so that we can actually test it in a browser.

        It sets "react-scripts start" which is the command so yarn start runs the full command 

        It takes all the files that live under the src folder (the entry point fo actual code that we are writing for react app and it is building out the actual react application)


        The entry point for src is the index.js file just like any project inddex jsut says that index being the first file that we want to look at which is the js related.

        Inside the scr/index.js:

        THERE ARE 2 Main libraries imported: 'react' and 'react-dom'. Very critical liraries. In order for react to work , we wnat to see react as kind of the underlying engine. So , its the engine that actually does all of the work when it comes to how React functions as a website builder or essentially n application builder.

        Libraries:

        'react' is the engine that runs how these applivcation get built.
        'react dom' is specifying that the engine should be directed towards web related application,

        these 2 libraries combined is what actually allows us to build out all of our web application in react

        'react-native' for mobile applications


        ReactDOM.render(
            <React.StrictMode>
            <App />
            </React.StrictMode>
            document.getElementById('root')
        )

        The above code is rendering out some code and inside of it is the "APP", the entire react app.

        StrictMode ensures that all the react is written in newer version, not in deprecated versions 

        We are rendering the whole thing at id "root"

        id-root of the index.html file which is in Public folder,

        inside public/index.html
        <body>
        <div id = "root></div> 
        </body>

        SO what react says, I want to take the div and I want to replace that div and render / provide/offer into it for our "react application"

    Thats how React works with HTML.

    2. Build: When we ran script start , this is just taking our application code and pushing it directly through our local port  of 3000 so on our computer and our browser is just accessing it directly. It doesnt have to go through our network. In order to get the related files , in order to run our application , it doesnot need to, its all local on our computer.  So this is incredibly efficient and fast.

        But when we are actually hosting our application like somewhere so that anybody can access our website, they need to leverage their internet connection. And as we know , the internet connection varies and i can be very slow. So what needs to happen is our code nneds to be much more optimised so that it is as small and efficiently served as possible. And thats what this build step does.

        yarn build

        'react-scripts build'

        after this, the react js will generate an optimal build for us.

        what it is doing:
        1. It is taking all the code that we have.
        2. So  all of these separate files and ll of these different JS and CSS files.
        3. and what it will do is it will actually group it all into one file for each related JS, CSS index, HTML, and it will make it as optimal as possible. 
        4. And it will put it all inside of a new folder right inside called "build".

    3. Test: Tests are just ways for us to make sure that the code that we write for our react application does what we expect it to. It is manged by App.test.js inside src. It is testing against App.js file. App.test.js makes sure App.js does what it is expected to do.

    4. Eject: We have to get a deeper understanding of actually what happens in the build, when it comes to browser such as chrome, safari, mozilla. Each browser is imlemented a little differently , thats why they are different browsers. This means is that they consume the HTML, CSS and JavaScript files intheir own way under the hood.

    The code that we are writing which is react code is not necessarily code that every browser can understand.Browsers can understand only older version of JS

    So, whats happening in the build process is : 2 libraries / helpers being used

    1. Babbel : It takes all of the React Code that we have written and it actually condenses it down into Javascript that these browsers can  understand, its very basic JS, very , very old school JS
    All these browsers can understand a very basic versionof JS.

    2. Webpack : It is actually something that makes our code a little bit moreefficient. So, there is some JS that is focused on actually pulling the primary JS files.
        Inside of static folder , there is CSS, Js folder. Inside of this JS folder there are some chunks, chunk.js

    Chunk: A chunk is essentially a contained portion of JS code that is working together to actually represent a part of our application.

    Whats it doing, is that, webpack is saying sometimes lets say our application , we wrote a  massive web page.
    There are a lot of JS files that even when reduced , can only be reduced so far. 
    So, what wenpack does is it breaks into chunks so that when the user is trying to access the home page, he just gets  JS related to the home page.

    If he wants to navigate to like another page, I am going to turn that other page into a new chunk and then send it to them when they need it.

Webpack is essentially modularizing our code , module being a chunk. If Js is very big, webpack optimisse it , break it into the self contained portions of it so that when the user is trying to access one part of it , it only gets the relevant JS for that part. Babbel gets the JS convert to very basic JS which browser can understand.
So, what build is doing is its leveraging Babbel and Webpack in order for it to properly optimise for these browsers, as wll as for the speed so that we send down all the appropriate chunks when the user needs them


What Eject gives us the option or liberty to modify or to make bit modification for optimisation according to outr project needs and concerns. After eject, it will split out the files that are related to actually showing us what babel and webpack do so we can modify them to do what we want.


setupTests.js: its a file that really just imports the specific testing library.
manifest.json: it is file that is a way for us to actually be progressive wen app compliant. All this means progressive web app is that some people want to be able to download our web application onto their desktop so that they can access it offline.  Its essentially a way for somebody to use our application, not through the browser
robot.txt: this file is just telling essentially web scrapers which SEO, it crawls our website with their own kind of lile code crawlers

App.js file (main file ): It represents our entire REact Application. React is pretty much just using functions to return HTML. 
    There is some generic function called app that returns this specific HTML that represnts this function of app and we can see this app function as a component.

    What is a COmponent?
    A componnet is pretty much self contained piece of code that returns some visual UI represntation of HTML.


    React is just a code of fucntion or class that just returns us html.


Classes Vs Hooks


One of the new ways to write the components is HOOKS.  HOOKS are limited to React. As they are React Specific. We can not apply it in other language. where as CLASSES are the part of JS.. Learning classes is an important concept, not only in JS but a lot of other programming language.

--------------------------------------------
Idea of rendering: It is the idea to undertsnad is rendering and re rendering our website.
We are going to write react in class components or functional componnets with hooks.
We want to tell react when we want to render and re render different parts of our website.

It is most important to focus on when React renders and re renders parts of our website because that thats all react does as a framework.

when we yarn start: we wait for react to render spinning logo, text and then the link 

Rendering: It is pretty much putting some UI, which is some HTML, some Css or some JS on to the page that a user can then interact with and see. So something is done renderingthe moment that they can interact with it. Its on the page. Thats the idea of rendering.

App.js is having HTML tags to return, because it is written in JSX. So JSX is really just a syntax extension of Javascript. They have extended the functionality of Javascript which allows us to write HTML inside the JS.

The functionality or behavious of page is decided by the JS. HTML hust determines what we want to see..

JSX makes very simple or easier to express what we want to visually render to the Page. JSX is the most efficient way to tell the REact code.

IN app.js the function App() is the functional component that renders through its return statement this block of HTML or HTML like JS.

Above is written in  as functional component.

CHANGING Function APP() to class component

We can also express in class component. A class component is easier to understand the idea of when react will render and re render things. 

step 1: import {Component} from 'react' : It is a class that React gives us so that it allows all of new componnets that we write in a class component format to get access to some of the functionality that by default React has already built for us inside of the "component class".


Step2: we have the render method, inside it we will put the JSX or the html representation of what we wnat this component to render

class App extends extends Component{
    render(){
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>
        );
    }

}


COMPONNET STATE: 
 Now, we want to add Dynamic Property to our html 

 local_state or just state is just some information that only this component is aware of and can modify and can read from. So the wa that we can actually access and generate this state is through the constructor method.

 constructor(), when ever this app is constructed, when ever is built , instantiate terms , inside it we call super

 constructor(){
    super(); // we are calling the constructor of our component class that has been extended

    // the state will be always be JSON Object
    this.state = {
        name: 'Pranav'
    }
 }

 we can now use {this.state.name}, no need to hardcode in JSX.

 ANd whenever the above variable changes react will "RE RENDER" the HTML that we see, so that we can use updated value for {this.state.name}.

 This is how react is allowing us to render and re render information that represents in UI>

A. setState:

    Now we want to chnage the names when we press the button.

    SO, inside of react , it allows us to bind the event handlers onto any HTML element.

    Event Handler is just something that I want to happen whener an event happens.

    <button onClick>

    when ever the button is clicked, it triggers some functionality to happend when "onclick" event occurs.

    Onclick is the propert which vbecomes equal to a block of Javascript, and iside the block, what onclick is expendting is t he function. or call back function

    A call back function is just a function we pass to some kind of handler that we want it to call during some process. I want to call the function when everthe button is clicked.

    onClick = {() => {}}; we can not simply change the this.state.name = 'updated name' inside the function as the state object is still different when though the object has been updated. The state is still the same. DOM is not updated.

    React states that It will only update the component if and only if there is completely different object in memory.

    The momemnt its the different object in memory , react will be like, its time to update the object.

    We can use setState method, 

    Which has many ways to use it.

    1. Basic way: W egive it an object that we want to shallow merge with our current state object

        SHALLOW MERGE: It means that whenever values we pass to inside the 'setState({OBJECT})' OBJECT, I am going t o update and check through  the state Object to see if there are the same keys.

        Isf there are same keys , I going to update our state keys with new value

        this.setState({name: 'Puru'})

        after this, react will be like okay we want to call the setState, we want to update the state value

     onClick = {() => { this.setState({name: 'Puru'})}};


     setState is upadting state to different object and react once detects the state is now a different object in memory, react will re-render the component and update the Application' UI.


     Shallow Merge: when we pass the object inside the setState method, it will lokk for the keys in the "current state object" and it will update them to the new one that we have.

     It only update the keys that has been asked to it. Anything else in the current state remains untouched and same. Make sure the type of the value of key remains same as of the current state value.

     if {
        name: {firstName: 'Pranav', LastName: 'Khatri}'
     }

     we can not setState({
        name : 'Puru'
     })

     In above name was Object and now requested to string.


    We can also pass the functions instead of Objects in the setState, and with the functiosn, it is preferred way to do so.

    console.log(this.state) // we will get same older values as it will be taken care by JS Engine.

    Where as 
         we can not setState({
        name : 'Puru'
     }) // it will run later, hence while logging we will always get the older state values


    This is because react batches these different set state calls so that it determines what the most optimal strategy for re rendering the website is going to be.

    setState is a non synchronous call where as the console.log is synchronous call.

    What if we need actually the updated values?

    2. Use of Functions to write the setState Method: 
    We use a function then

    this.setState (()=>{}, ()=>{}}
    the frst function is the updater function
    The first function that we pass the set state here is going to be some function where we return an object that it will then use to shallow merge against state.

    we get the access to state and props.

    (state, props) ={
        return {
            name: 'Puru',
        }
    }


    state varaible that we have access to is equal to current state
    props: it is something that does with components. Its different values that we pass to our component.

    In the second function, we run the console.log(this.state);

    onClick = {
        () => {
            this.setState(()=>{
                return {
                    name: 'Puru',
                };
            },
            ()=>{console.log(this.state)}
            );
        }
    }

        onClick = {
        () => {
            this.setState(()=>{
                return {
                    name: 'Puru',
                };
            },
            ()=>{console.log(this.state)}
            );
            //{console.log(this.state)} not to be used
        }
    }

    Ideal way to write the set state code in class components


B. Mapping Arrays to Elements: 

    App Component contain all entire application. It is best practice to do so where we have one app componentand this app component this is what we use to render as the entirety of our application.


class App  extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [
        {
            name: 'Linda',
            id: '12erf'
        },
        {
            name: 'Frank',
            id: 'bhiopp'
        },
        {
            name: 'Jacky',
            id: 'pol09'
        }
      ]
    };
  }
  render(){
      return (<div className="App">
      {
        this.state.monsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>;
        })
      }
      
      </div>);
  }

} 

why do we need the h1 key value? This goes back to react and re rendering

This key value is actually something that React uses in order to make it optimised when it comes to updating and re rendering components on our page. If we changethe  name of any user, it will just re render the name for that particular id, but not for all the users. It properly differentiates between different components as these components are using the same template



Single Page Applications: React Application as a single page application makes it whole process way easier.
Frameowrks kind of React and Angular and Vue help to build SPA

We have Gatsby which is a Recat Framework for static pages.

IN NON-SPA:

If home page is required, the browser makes the request to server for website/home, and the seerver sends back the required HTML, CSS and JSneeded to build the homepage and our browser takes that and actually creates the UI and the page that user is trying to access.

If we want to navigate to website/contact, it completely new page, non of he code of home page is relevant here in this page. so, browser makes anoher request and to same server some is trying to access /contact page, the server sends back the css htl and JS files needed for that page, which our browser will ue and build the page.

We use to have brief white page during the request.

In SPA:
For very first time, there will still be request to server because at this point our browser doesnt have the code for website.The server sends back some html, css and JS. As our website is SPA, it is bult with React, so our JS code conatins the React code as well as React Library and al the stuff that we wrote in order to build the website, so our browser will take all the code, will build the homepage

If we want to change the page , suppose to navigate to /contact, we still have all that JS and React Code. And now React doesnt need to go and ask he server for more code. Instead, using this react cod, it tself is going to build CSS html pages required for the react

We need no longer to go to server for the code whenever we want to navigate. Anything that we see on website that is in SPA is built in React Components are getting stripped off, they are getting put on, they are getting created and destroyed simultaneously . All of the process is happening on the browser.


Monster users:
We need to access the users using some user APIs which gives us the list of user that we will use to build the list


LifeCycle Method: componentDidMount

Figuring how to bring the array of users in to our Recat Application

How do we get the list?
This is actually where React is going to give us these things knon as Life cycle methods.

A components' key thing in React is just figuring out when it renders and when it re renders.

We levarge the lifecycle methods on the component class that React has given us, which are:

componentDidMount , componentDidUpdate, componentDidUnmount

componentDidMount: It is method that we have access to and inside we want to write our code and whatever we write inside it will get run whenever the component mounts

Mounting: it is the first time a component gets placed onto the DOM so the first time react renders a component on to the page , that is mounting It only happens once through out a components life

The only time when a component might remount is if its been unmounted

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
}

Whenever we have a component specifically that needs to leveragesome kind od API call in order to get data that it needs in order to display the appropriate UI , we want to put that inside of our componentdidmount lifecycle method.

class App  extends Component{

  constructor(){
    super();

    this.state = {
      monsters: []
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=> this.setState(()=>{
          return {monsters: users}
        },
        ()=>{
          console.log(this.state);
        }
        ));
  }
  render(){
      return (<div className="App">
      {
        this.state.monsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>;
        })
      }
      
      </div>);
  }

} 


Rendering and Rerendering in React:


whats the order in constructor, componentDidMount and render methods, when recat decides to initialise and mount acomponent?


It runs the constructor first because the constructor  runs before any thing in class. That is regardless of whether this React or Javascript , classess will always run the constructor function first.

In constructor, it only initialises the state. This is way of saying , hey react, this is the state object for the component and this is t he initial values thatits going to have.

The Render runs next., and it determines what to show. It is the template of the html It dictates what the UI for ths component is going to be

Then  the next life cycle that runs is componnetdidMount.  Its actually going to mount the initial UI onto the DOM. It means that whatever the initail state of our component is what it will mount on. Then when it mounts, it will run the lifecycle method, component did mount because our component did just mount.

It will be:
constructor <  render < componentDidMount < render,

as soon as the state updates , as we call the set state, react knows the component is different and it re renders
So, it re renders. 

The moment setState is called, the render method gets called again , because once the state is update we want to re render the componets UI.

In first time, it renders with initail component of UI. In second, re renders with new values.


Input Search - Box Component: Add search Functionality

React has created components similar to every Html tags
Html has <div class = "class 1"> where as JSX has <div className="class1">
<input className='search-box' type = 'search' placeholder='search monsters' onChange ={(event)=> {}}/>


       <input
          className='search-box'
          type = 'search'
          placeholder='search monsters'
          onChange = {(event)=> 
          {console.log(event.target.value);
            // [{name: 'Prnav'}, {name: 'Yash'}]

            const searchString = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster)=>{
              return monster.name.toLowerCase().includes(searchString);
            });
            this.setState(()=>{
              return {monsters: filteredMonsters};
            })
          }}
      />

      Updated code*


Optimistaions: 
onchange Function; which is a anonymous function, an anonoymous function is a function that is not storedanywhere in a variable, this means is that when JS runs this code and it come across this line , what it sees  is that there is a function being created.  It will create a function and afterwards it gets thrown away..

Every time render us run this function is getting re initialised very time and it throws it away. And this is problematic, as we never update this function. Every time we get modified event inside it, we are making our app less performance

render(){
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
      return (<div className="App">
       <input
          className='search-box'
          type = 'search'
          placeholder='search monsters'
          onChange = {(event)=>  // we are talking about this function
          {console.log(event.target.value);
            // [{name: 'Prnav'}, {name: 'Yash'}]

            const searchField = event.target.value.toLowerCase();

            this.setState(()=>{
              return {searchField};
            })
          }}
      />
      {
        filteredMonsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>;
        })
      }
      
      </div>);
  }


to 

  onSearchChange = (event)=> 
  {console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  }
  render(){
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
      return (<div className="App">
       <input
          className='search-box'
          type = 'search'
          placeholder='search monsters'
          onChange = {this.onSearchChange}
      />
      {
        filteredMonsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>;
        })
      }
      
      </div>);
  }

} 


Understanding COmponents:

what is a component?

component is something  that governs a piece of a UI. All of the UI we see is all encapsuated in the app component. which can be class or functional component.

It means that our entire application lives inside of one component.

We have tied to gether the functionality of UI and the actual UI itself. And that is what react does.

React ties the visual representation off the UI and the functional representation of the UI together.

WHat is the concept of component?
It is meant to tie together functinality and visual representation of our user. But it also aims to tie together reuseable portions of the code together into one segment. making sure to write functionalities in a generalise form so that components are reuseable We areable to create Lego blocks.


class App  extends Component{

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:'' // added to get serahcField target
    };

    console.log('constructor');
  }
  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=> this.setState(()=>{
          return {monsters: users}
        },
        ()=>{
          console.log(this.state);
        }
        ));
  }

  onSearchChange = (event)=> 
  {console.log(event.target.value);
    // [{name: 'Prnav'}, {name: 'Yash'}]

    const searchField = event.target.value.toLowerCase();

    this.setState(()=>{
      return {searchField};
    })
  }
  render(){
    console.log('render');

    const {monsters, searchField} = this.state; // for readibility
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
      return (<div className="App">
       <input
          className='search-box'
          type = 'search'
          placeholder='search monsters'
          onChange = {onSearchChange}
      />
      {
        filteredMonsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>;
        })
      }
      
      </div>);
  }

} 

Now, take example of above component. We are getting database, search bar and list of users together. what if we want to use list of users or search bar separately. We have to write the code again.

So, we create a components folder which conatin all the components.



CardList Components:


Compoennt name should be capital first, camel case method, which gives react undertsnading that it is a component not any tag.

Also, we export default meaning: if we have imported anything in that file which may not be present in the required folder, that those imports can be easily be done, without mentionaing all the imports repeactedly.

<CardList /> in class compoent of App.js provides whats there in CardList class component


Very Important: We must have one parent level of componenet or one toplevel component

render(){
    return (
        <div> <h1></h1><p></p></div>
    )
}

It is acceptable. It has one parent and other all are children


render(){
    return (
        <div> <h1></h1><p></p></div> <div></div>
    )
}

It has 2 parents.



COMPONENT PROPS:

We want to pass the users in card-list so they renders as card-list and hence we need props.

What are props?
Props are pretty much shorthand for properties , which is identical to these different properties that we use inside of components.

       <input
          className='search-box'
          type = 'search'
          placeholder='search monsters'
          onChange = {onSearchChange}
      />


      className , type , placeholder, onChange all are props of input.

      An Input is a react component that simulates a generates aa input tag when we atually render ot the page/

    What props we use for CardLIst then?


    we can pass anything that we expect it to there.

    <CardList anything = {['a', 'z']} users = {'I am the monster'} />

    And we can print it 
    in CardList compoenht by console.log(this.props);


Re-rendering and Rendering of Components:

Similarly as the setState initialises re rendering takes place, similarly when ever the props change re rendering will take place. hence we see twice the console message from cardList componnet. Just like setState whenver props are different, our componnets will also re render.

initially the props are [], and then when api is called or compoenntdidMount props get the data 
props=[....]

COMPONENTS RE RENDER ONLYIN 2 CONDITIONS:
1. WHEN SETSTATE GETS CALLED
2. WHEN PROPS ARE UPDATED
React Renders on Mount and it re-renders whenever props change and setState gets called.

This is how react determines that we want to render because only when those things happen, react does actually update the dom and try and see what are these coponents and what  are the new things that we need to return from them.

What is compoennt tree?
We have the Parents COmponents and child COmponents. As react always renders top-down.

At the top level we have <APP /> App level component: it is going to attempt to render the app component first , meaning it goes to constructor and then it goes to call the  render call of our app.js. And inside it sees <CardList /> cardlist component. And then it tries to run this cardList component different life cycles methods. 

So, in cardlIst components, it calls the constructir which even though havent written it, but it runs under the hood and then it run the render and actually render out what is inside. And we have another component inside it
as <ThirdComponent />. And then it is going to run the third component and going to do the same things. 

So, we parse through subsequent children components.

ANd this is the Idea od Component tree.

<APP />
    <CardList />
        <ThirdComponent />


React Renders on Mount and it re-renders whenever props change and setState gets called.


CSS IN REACT:
App.css: It is pretty main css.

We can also have the component level css, but that may effect only on that speific compoennt but as it is available to other components, it effects other componnets too.



Functional Vs Class Components


Functional Componnets utilize hooks in order to replicate a very similiar behaviour as we have seen in class components

The key thing is that they differ in how react utilizes in order to render the behaviourin the application is the exact same, and the way we write these components is largely the exact same.

Whu React has functional and CLass components both?
React is the library that has been around for a long time. React is constantly changing . So it caters to both functional and class components


CLASS COMPONENT BREAKDOWN CYCLE : see cycle

FUNCTIONAL COMPONENTS: A functional componnet typically takes the form of arrow function. Arrow functions at this point are the norm of writing functions.

const App inplace of class App

const App = () => {
  return (

  )
}

Here , we dont needs the constructor, the lifecycle methods, and we dont need the render. These are all things that are unique to class components. These are methods attached to a class fucntion in this particular case, and the functional componnetsare pure functions.
Pure Functions: meaning that all the react is going to do is run this function top to bttom. Whatever gets returned finally from this function is going to be the UI that this unction returns.

So, in turn, what we return from our class compoennet is inside the "render". But in functional cmponent , whatever we return inside of the function is going to be same UI. There is no constructor and no class. A functional componenet behaves, as we would expect, a reular JS function to do. And all the JS function does, it takes some arguments and it returns something. 

In this particular case, a react functional component takes argummenst that are the props of this components and then it returns JSX. Thats all it is. A function when it gets invoked, runs from  the top to bottom and then that function is one with. Unless like our classes which get instantised, and then there are all these different numerous lifecycle methods or constructor method or render method that are related to class components that are constantly being kept alive and being run and invoked depending on what phse a class component is in. Functional component do not do that. The simplicity of a functional component is like a JS function. It just runs from top to bottom


Here, with our functional app component during the mounting phase, react is essentially saying, ohh you gevae this function, I am jjust going to run it and just return what the HTML which was inside of our  return of the function. Because functional components do not go through the lifecycles methods. Its almost diffenent model

There are no lifecycles when it comes to functional components. Dont get misguided regarding hooks trying to replicate one of the phase of lifecycle method.

Think Functional COmponents as concept of Functions and side effects.

What are the side effects?
We need to understand pure and impure functions

The reason why we need to know about functions, pure functions, impure functions and side effects is becasue in order for us to replicate all of the behaviour that we had in our class  compoenents with state, with set state and with lifecycle methods , we need to understand the ideas of side effects.


PURE AND IMPURE FUNCTIONS:

PURE Function, there are mainly 2 things to consider.

The first one is very simple

const pureFunction = (a, b) =>{
  return a+b;
}

what a pure function should do is return the exact same thing no  matter how many timesit gets calledwhen its given the same arguments.

So, here are pure functions is just a function that receieves A and B which are both integers and it will add them together. Thats what it returns.

The impure function:

let c = 3;

const impureFunction = (a, b) =>{
  return a+b;
}

c = 5;
or c= 9;

The above function will not give the same values even the argumenst remains the same , because it depends on the variable c which can be changed.

Variable C may chnage without impureFunction knowing. A function is considered pure when everything that dictates what it returns is completely isolated from  from what gets passsed into  it. This is very important because this function return should solely be dependent on the props(arguments) being passed.in. That is the only way that our function is considered pure.

ANother important thing that the function should not do inorder to be the pure function is produce Side effects
What is side effect?
A side effect is when a function creates some kind of effect outside of its scope.\



let c = 3;

const impureFunctionB = (a,b) =>{
  c = a+b;
  return a*b;
}

even though impureFunctionB will produce same result with same arguments, but it is changing the value of c which is outside of its scope. Vraiable C does not live with in the scope.

Pure Function if it is to modify or rely on something outside of ots scope  and beyond the paramenters being passed on it. That is a impure function.

What we are going to write in react is impure functions. We are going to create hooks to write impure functions. We have pure functions and impure functions. But when we thing about some of these hooks, understand that what we are doing is we are generating side effects.

And by understanding that idea of modifying or relying on some value that exists outside of the scope of  our function will help us understand the way that functional emponents render , re-render in react


Hooks: useState

How are we going to setState?
This is actually where we need to use a hook.

The more simple hook that is available to us is the useState hook.


useState essentially gives us the ability to encapsulate local state in a functional component.
we are going to use array de structuring from useState because useState gives us back an array of 2 values.
The first vlue is going to be the value that we wnat to store and the second value is going to be  a set or Function.

In useState, every thing is in Object.
this.state = {
  users:[],
  searchField:'',
}.

In use state we are not going to store entire objects.

But in the functional component, its individual values. We are not trying to store entire objects. So here what we want to do when we say, this useState value, we are going to encapsulate a singular value from that state. So, if we have multiple values in a state, well then we need multiple useState calls, each hook only hooks into one value.

So, here we want to do search field.

So, search field, we want to pass into the useState the initial value that it should be, and it was empty string

import  { useState } from 'react';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setVal]


  const  onSearchChange = (event)=> {
    const searchFieldString = event.target.value.toLowerCase();

    setSearchField(searchFieldString);
  }
}


the above useState hooks to serahcField value which is empty string initially. 
where value is serachField and
setVal is setSearchField.

These 2 values now we are able to actually replicate the setState for just searchField.


Function Component Re-rendering and rendering:
React runs the entire function every time while rendering. It needs to re-render a component that is a functional component. 

Previously inside of our class components, whenever there were mounting and update cycles, render method would get run and update-cycle ran whenever props changed or when ever state updated. The only thing ran though was whatever code was inside of the render method. With functional components, we dont have a render method. 
This entire functional component we can kind of see as same thing as the render method. Whenever react has determined that a functional component neess to render or re render , it will just run the entire function top to bottom. The way that it determines whether or not a functional component needs to update is the same as a class componnet whenever the props change, which is the arguments inside of a function that we have not worked it yet.

Whenever props change, the whole function gets run again. So, react is determining oh  i need to re render the entire functional component.

Similarly, whenever state changes, it will also rerun this entire functional component. This is the only way React knows there;s probably new UI.

It just rerun the entire function so that whatever gets returned from this function is going to have the lateste variales latest props , letaest state values so that UI will look. based on the returned JSX of the function

What about the useState and the hook?

const[searchField, setSearchField] =useState(''); //[state_value, set)_value]
The thing about the useState is that we are getting back "searchField" state value and under the hood what react does is React will actually chekc whether or not this staet value s different. Only when through that harder quality it notces thatthere are different values. Only then will react actually rerun this value.

So, currently everytime our event changes, the state value is updating because we are either typing so currently , everytime our event changes , the state value is updating because we are either typing new characters into the string or removing characters from the string 