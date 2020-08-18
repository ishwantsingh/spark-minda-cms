import fs from "fs";
import path from "path";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  h1 {
    font-size: 2.5rem;
    height: 10%;
    width: 100%;
    justify-self: flex-start;
    text-align: center;
  }
  img {
    width: 40vw;
    height: 25vw;
  }
  .text {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-content {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    align-self: center;
  }
`;

const singleBlog = ({ blog }) => {
  if (!blog) return <div>sorry, no blog found.</div>;

  return (
    <Container>
      <h1>{blog.title}</h1>
      <div className="blog-content">
        <div>
          <img src={blog.image} alt="blog" className="image" />
          <p className="date">{blog.date}</p>
        </div>
        <div className="text">{blog.description}</div>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  // https://www.geeksforgeeks.org/node-js-path-join-method/ for join method
  // https://www.geeksforgeeks.org/node-js-process-cwd-method/ for process.cwd method
  // https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options for readdir method
  const paths = fs
    .readdirSync(path.join(process.cwd(), "content/blogs"))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        params: { slug: trimmedName },
      };
    });

  return {
    paths,
    fallback: false, // constrols wheter not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const blog = await import(`../../content/blogs/${slug}.md`).catch(() => null);

  return {
    props: {
      blog: blog.default.attributes,
    },
  };
};

export default singleBlog;
