import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../lib/Layout";
import { Title } from "../lib/Typography/Title";
import { Container, Stack } from "@mui/material";
import { Text } from "../lib/Typography/Text";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2}>
          <Title variant="h1" component="h1" bold>
            Spring Tenth Neighborhood
          </Title>
          <Text>Welcome to the Spring Tenth Neighborhood!</Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export function Head() {
  return (
    <>
      <title>Spring Tenth Neighborhood</title>
      <meta name="description" content="Spring Tenth Neighborhood" />
    </>
  );
}
