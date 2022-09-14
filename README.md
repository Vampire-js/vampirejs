#  Vampirejs , reactivity as your finger tips 👆✨

A simple javascript library to make your life better, while still being in Vanillajs :)

## How to use?
Start with a brand new Vanillajs project. Let's use Vite⚡ in this case !
```
npm init vite
cd my-vampirejs-project
npm i
```
Aight, after these steps get in the Vampirejs package from npm

```
npm i @vampirejs/vampirejs
```
The preffered folder structure is as follows

```
project
|
└───app
    │__ index.js
│   
│___Main.js
|
.
.
```

Once done with this basic setup, get into your index.js and paste this code into it
```
import { select } from '@vampirejs/vampirejs/hooks/select'
import { initializeState } from '@vampirejs/vampirejs/state-management'


export const App = {
    state:{
        count:0
    },
    ui(){
        return(
            select("app").innerHTML = `
            <div>Count: ${appState.count}
            <button id="btn">ADD</button>
            </div>
            `
        )
    },
    logic:()=>{
        select("btn").addEventListener('click',  () => {
            appState.count++
         })
    },
    
}

const appState = initializeState(App.state, App.ui, App.logic);

```
Now, import this and use the ```createApp``` function to get the app running as follows:
```
import { createApp  } from '@vampirejs/vampirejs/core'
import {App} from './app'

createApp(App.state , App.ui , App.logic)

```

And that's it! 

## initializeState
- By default, a Vampirejs component isn't having reactive state out of the box. Hence , the ```initializeState``` helper function provided by Vampirejs is used inorder to get some dynamic state into the game

##  What about state management ?!
- Vampirejs doesn't require any state management library, as the inbuilt ```initializeState``` function can be exported from one component to other inorder to share state. Which means props passed from one component to other are already enabled with 2-way binding :fire:

## Upcoming Features
    @vampirejs/router
    Better Templating i.e. elimination of .innerHTML 
