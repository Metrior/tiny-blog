import React from 'react';

import {PostProvider} from "./components/PostProvider/PostProvider";
import BlogMainInput from "./components/BlogMainInput";
import PostsList from "./components/PostsList"
import {AppWrapper} from "./App.styled"

const App = () => {
  return (
    <PostProvider>
      <AppWrapper>
        <BlogMainInput/>
        <PostsList/>
      </AppWrapper>
    </PostProvider>
  );
}

export default App;
