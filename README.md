 # Adopt a pet Project with React Router 6.9.0
 This is a Codecademy project. The course were written in React Router v5, and I had had to adapt it to the newest version.

 I wanted to work with the lastest version of NodeJS, React and React-Router-dom because that how real life works, isn't it?

So here I leave the changes I have had to do since I refuse to work with older versions.

### Step 1

(If you are like me and want to test the App at any time because you "trust the proccess" but not completely)

When I first try to run de App without modifying anything

npm start

I realised that the terminal threw an error "error:0308010C:digital envelope routines::unsupported".
You just have to change in your package.json this line

"start": "react-scripts start"

to

"start": "react-scripts --openssl-legacy-provider start".



### Step 5
Updated Route syntax: <Route path=":type/" element={<HomePage />} />
Wrap <Route /> in <Routes> or it will not render


