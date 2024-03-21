import React from "react";
import Article from "../../article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import './blog.css'
export default function Blog() {
  return (
    <div id="blog" className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-group1">
          <Article
            img={blog01}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
          />
        </div>
        <div className="gpt3__blog-group2">
          <Article
            img={blog02}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
          />
          <Article
            img={blog03}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
          />
          <Article
            img={blog04}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
          />
          <Article
            img={blog05}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            date={"Sep 26, 2021"}
          />
        </div>
      </div>
    </div>
  );
}
