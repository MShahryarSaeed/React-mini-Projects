import HeroImage from '../assests/hero-image.png';
import Amazon from '../assests/amazon.png';
import FLipCart from '../assests/flipkart.png';
const HeroSection=()=>{
    return(
      <main className="hero container">
        <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src={Amazon} alt="amazon-logo" />
            <img src={FLipCart} alt="flipkart-logo" />
          </div>
        </div>

        </div>
        <div className="hero-image">
            <img src={HeroImage} alt="HeroImage" />

        </div>

      </main>
    );
}

export default HeroSection;