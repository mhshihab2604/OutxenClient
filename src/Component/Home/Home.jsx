import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Outxen||Home</title>
        </Helmet>
        <Banner></Banner>
        <FeaturedProduct></FeaturedProduct>

      </div>
    </div>
  );
};

export default Home;

