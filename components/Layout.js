import { Heading, Subheading, TextContainer } from "@shopify/polaris";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <TextContainer>
          <Heading element="h1">Spacestagram</Heading>
          <Subheading>
            Brought to you by NASA&apos;s Astronomy Picture of the Day API
          </Subheading>
        </TextContainer>
      </nav>
      <>{children}</>
    </>
  );
};

export default Layout;
