import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps";
import Bgslider from "../components/BgSlider";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import TryNow from "../components/TryNow";
const Home = () => {
    return (
        <div>
            {/*Hero Section*/}
            <Header />

            {/* Background removal steps section*/}
            <BgRemovalSteps />

            {/* Background removal slider section */}
            <Bgslider />

            {/* Buy credits plan section */}
            <Pricing />

            {/* User testimonials section */}
            <Testimonials /> 

            {/* Try now section */}
            <TryNow />
        </div>
    )
}

export default Home;
// This component is a placeholder for the home page.