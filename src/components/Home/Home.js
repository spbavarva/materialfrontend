import { Heading } from "@chakra-ui/react";
import React from "react";
import "../Layout/header/Header.css";

function Home() {
  return (
    <div className="Home">
      <Heading>Welcome to college world</Heading>
      <div className="container">
        {/* <img
          src="https://media.istockphoto.com/photos/new-year-2022-creative-design-concept-with-books-shelf-picture-id1332856100?b=1&k=20&m=1332856100&s=170667a&w=0&h=UqR3uNXnPnLX7Ms5_y1xYpz7JdGZHR-_hh9nFBtRH2M="
          alt="books"
        /> */}
        <img
          // src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMHdpdGglMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="books"
        />
        <img
          // src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          // src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          src="https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVnZSUyMHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="book"
        />
      </div>
    </div>
  );
}

export default Home;
