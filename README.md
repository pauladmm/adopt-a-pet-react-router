 # Adopt a pet Project with React Router 6.9.0
 This is a Codecademy project. The course were written in React Router v5, and I had had to adapt it to the newest version.

 I wanted to work with the lastest version of NodeJS, React and React-Router-dom because that how real life works, isn't it?

So here I leave the changes I have had to do since I refuse to work with older versions.

### Step 1

(If you are like me and want to test the App at any time because you "trust the proccess" but not completely)

When I first try to run de App without modifying anything

<code>npm start</code>

I realised that the terminal threw an error `"error:0308010C:digital envelope routines::unsupported"`.
You just have to change in your package.json this line

```
"start": "react-scripts start"
```

to

```
"start": "react-scripts --openssl-legacy-provider start".
```


### Step 5
Updated Route syntax: 
    `<Route path=":type/" element={<HomePage />} />`
Wrap <code><Route /></code> in <code><Routes></code> or it will not render

### Step 10
Optionally, I change className and activeClassName for the next ternary operator:

`className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}`

([Explained in docs](https://reactrouter.com/en/6.9.0/components/nav-link))

### Step 14-15
React Router v6 introduces a 'Routes' component that is kind of like 'Switch'. So in this version you do not need to use 'Switch' element at all.
More info in [docs](https://reactrouter.com/en/6.9.0/upgrading/v5#upgrade-all-switch-elements-to-routes).

Skip these steps.

### Step 16-17
In v6, this app should be rewritten to use the 'navigate' API. Most of the time this means changing <code>useHistory</code> to <code>useNavigate</code> and changing the 'history.push' callsite to 'navigation(/path)'
 More in [docs](https://reactrouter.com/en/6.9.0/upgrading/v5#use-usenavigate-instead-of-usehistory)

 At this time, my code in ./components/search/index.js looks like the following:

 ```
 import React, { useRef } from 'react';
 import { useNavigate } from 'react-router-dom';

 const Search = () => {

  let navigate = useNavigate();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

      navigate(`/search?${searchQuery}`);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
```

### Step 25
<code><Redirect /></code> is outdated in v6, so instead use <code><Navigate /></code> component as follows:

`<Navigate to="/pet-details-not-found" replace />`