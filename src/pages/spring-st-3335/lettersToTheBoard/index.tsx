import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../../lib/Layout";
import { Container, List, ListItem, ListItemText, Stack } from "@mui/material";
import { Title } from "../../../lib/Typography/Title";
import { ExternalLink, InternalLink } from "../../../lib/Links";
import { Text } from "../../../lib/Typography/Text";

export default function BlogPage(props: any) {
  const { data } = props;

  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2}>
          <Title component="h1">Letters to the board</Title>
          <Text>
            Provide your feedback to the board regarding the proposed purchase
            of 3335 Spring St for a temporary housing facility.
          </Text>
          <Text>
            <ul>
              <li>
                You can email your letter to the board{" "}
                <ExternalLink to="mailto:BoardFeedback@smcgov.org?subject=Feedback%20on%203335%20Spring%20St%20Proposal">
                  BoardFeedback@smcgov.or
                </ExternalLink>
              </li>
              <li>
                Email us at{" "}
                <ExternalLink to="mailto:northfairoaksneighbors@gmail.com">
                  northfairoaksneighbors@gmail.com
                </ExternalLink>{" "}
              </li>
              <li>
                or send us your feedback in this{" "}
                <ExternalLink to="https://form.typeform.com/to/PqjalTyv">
                  survey
                </ExternalLink>
              </li>
            </ul>
          </Text>
          <List>
            {data.allMdx.nodes.map((node: any) => (
              <ListItem
                key={node.id}
                alignItems="flex-start"
                sx={{ gap: 0.5, flexDirection: { xs: "column", sm: "row" } }}
              >
                <ListItemText
                  primary={node.frontmatter.author}
                  secondary={node.frontmatter.date}
                  sx={{ flex: 1 }}
                />
                <ListItemText
                  primary={
                    <InternalLink
                      to={`/spring-st-3335/lettersToTheBoard/${node.frontmatter.slug}`}
                    >
                      {node.frontmatter.title}
                    </InternalLink>
                  }
                  secondary={
                    <Text color="textPrimary" variant="body2">
                      {node.excerpt}
                    </Text>
                  }
                  sx={{ flex: 4 }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Container>
    </Layout>
  );
}

export function Head(props: any) {
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
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
          author
        }
        id
        excerpt
      }
    }
  }
`;
