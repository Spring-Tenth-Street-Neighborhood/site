import { Link, PageProps } from "gatsby";
import { Layout } from "../lib/Layout";
import { Title } from "../lib/Typography/Title";
import { Container, Stack } from "@mui/material";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2}>
          <Title variant="h1" component="h1" bold>
            Page not found
          </Title>
          <Link to="/">Go home</Link>
        </Stack>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export function Head() {
  return (
    <>
      <title>Not Found Page</title>
      <meta name="description" content="Not Found" />
    </>
  );
}
