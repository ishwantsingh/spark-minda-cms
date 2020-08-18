import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  font-size: 3rem;
  .h1 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 15%;
  }
  .blogs-container {
    display: flex !important;
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    align-self: center;
    text-align: left;
  }
  .blog {
    display: flex;
    width: 25%;
    height: 38%;
    border: 1px solid #cdc9c9;
    border-radius: 6px;
    a {
      text-decoration: none;
      color: black;
      font-size: 2rem;
    }
    .text {
      width: 95%;
      height: 30%;
      display: flex;
      align-items: center;
      padding-left: 5%;
    }
  }
  .image {
    display: flex;
    width: 100%;
    height: 70%;
  }
`;

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f article for multiple markdown files
  const markdownFiles = require
    .context("../../content/blogs", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blogs/${path}`);
      return {
        ...markdown.attributes,
        slug: path.substring(0, path.length - 3),
      };
    })
  );
};

const Blog = ({ postsList }) => (
  <Container>
    <div className="h1">Blog</div>
    <div className="blogs-container">
      {postsList.map((post) => (
        <div key={post.slug} className="blog">
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a>
              <img src={post.image} className="image" />
              <div className="text">{post.title}</div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </Container>
);

export async function getStaticProps() {
  const postsList = await importBlogPosts();
  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  };
}

export default Blog;
