import { graphql, PageProps } from "gatsby";
import { Layout } from "../../../lib/Layout";
import { Container, Divider, Stack } from "@mui/material";
import { Title } from "../../../lib/Typography/Title";
import { Text } from "../../../lib/Typography/Text";
import { Seo } from "../../../lib/Seo/Seo";

// interface QueryReturn {
//   mdx: {
//     frontmatter: {
//       title: string;
//       date: string;
//       author: string;
//     };
//     body: string;
//   };
// }

// @ts-expect-error
const BlogPost = ({ data, children }) => {
  const { title, date, author } = data.mdx.frontmatter;
  const { body } = data.mdx;
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2}>
          <Title component="h1">{title}</Title>
          <Text>
            By <strong>{author}</strong>
          </Text>
          <Text>{date}</Text>
          <Divider />
        </Stack>
        <div>{children}</div>
      </Container>
    </Layout>
  );
};

// @ts-expect-error
export const Head = ({ data, children }) => {
  const { title } = data.mdx.frontmatter;
  const { excerpt } = data.mdx;
  return (
    <Seo
      title={title || "Letter to the board"}
      description={excerpt || "Letters to the board at 3335 Spring St"}
    >
      {children}
    </Seo>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
      excerpt(pruneLength: 160)
    }
  }
`;

export default BlogPost;
