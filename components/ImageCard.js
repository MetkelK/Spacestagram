import Image from "next/image";
import { useState, useCallback } from "react";
import {
  Button,
  ButtonGroup,
  Stack,
  Card,
  TextContainer,
  Caption,
  DisplayText,
  Icon,
  Toast,
} from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";

const ImageCard = ({ pod }) => {
  const [like, setLike] = useState(false);
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(
    () => setActive((active) => !active),
    [setActive]
  );

  const toastMarkup = active ? (
    <Toast content="Link Copied" onDismiss={toggleActive} duration={2000} />
  ) : null;

  const copyLink = () => {
    navigator.clipboard.writeText(pod.url);
    toggleActive();
  };

  if (pod.media_type === "image") {
    return (
      <Card>
        <Image src={pod.url} alt={pod.title} width={1300} height={1000} />
        <Card.Section title={pod.title}>
          <Card.Subsection>
            <TextContainer>
              <Caption>{pod.date}</Caption>
              <DisplayText size="small" element="p">
                {pod.explanation}
              </DisplayText>
              <Stack>
                <ButtonGroup>
                  <Icon
                    source={HeartMajor}
                    color={like ? `critical` : `subdued`}
                  />
                  <Button onClick={() => setLike(!like)}>
                    {like ? `Unlike` : `Like`}
                  </Button>
                  <Button onClick={copyLink}>Share</Button>
                  {toastMarkup}
                </ButtonGroup>
              </Stack>
            </TextContainer>
          </Card.Subsection>
        </Card.Section>
      </Card>
    );
  } else {
    return null;
  }
};

export default ImageCard;
