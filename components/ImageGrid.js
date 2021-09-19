import ImageCard from "./ImageCard";
import { Frame } from "@shopify/polaris";

const ImageGrid = ({ images }) => {
  return (
    <Frame>
      <div className="img-grid">
        {images &&
          images.map((pod, i) => <ImageCard key={i} pod={pod} />).reverse()}
      </div>
    </Frame>
  );
};

export default ImageGrid;
