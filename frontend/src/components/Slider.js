import Carousel from 'react-bootstrap/Carousel';

function ProductSlider(props) {
  const { products } = props;
  return (
    <Carousel>
      {products.map((product) => (
        <Carousel.Item key={product.slug}>
          <img
            className="d-block w-100"
            src={product.image}
            alt={product.name}
          />
          <Carousel.Caption>
            <h3>
              {product.name}
              {console.log(product)}
            </h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductSlider;
