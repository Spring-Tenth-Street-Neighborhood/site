import { graphql } from "gatsby";
import { Layout } from "../../../lib/Layout";
import { Container, Divider, Stack } from "@mui/material";
import { Title } from "../../../lib/Typography/Title";
import { Text } from "../../../lib/Typography/Text";

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

export function Head() {
  return (
    <>
      <title>3335 Spring St | Letters to the board</title>
      <meta
        name="description"
        content="Letters to the board at 3335 Spring St"
      />
    </>
  );
}
export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
    }
  }
`;

export default BlogPost;
