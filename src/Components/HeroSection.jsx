import heroImage from "../assets/Images/hero-image.png";
import indicators from "../assets/icons/Indicators.svg"
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";


function HeroSection() {
    return (
        <div className="hero-section">
            <img src={heroImage} alt="Hero Image" />;
            <div className="refer">
                <h1 className="header-title">Refer and Earn</h1>
                <p className="para">
                    Earn ¥1 on every merchant referred and withdraw anytime. With
                    Surpluswap, it’s a win-win.
                </p>
                <div className="indicator">
                    <img className="indicator" src={indicators} alt="indicator" />
                </div>
                <div className="arrows">
                    <img src={left} alt="left icon" />
                    <img src={right} alt="right icon" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
