import {assets} from "../assets/assets.js"
import { FOOTER_CONSTANTS } from "../assets/assets.js";

const Footer = () => {
    return (
        <footer className="mt-10 flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
            <img src={assets.logo} alt="logo" width={32} />
            <p className="flex-1 border-l border-gray-100 max-sm:hidden">
                &copy; {new Date().getFullYear()} @yashramnani | All rights reserved.
            </p>
            <div className="flex gap-3">
                {FOOTER_CONSTANTS.map((item,index) => (
                    <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                        <img src={item.logo} alt="logo" width={32}/>
                    </a>

                ))}
            </div>
        </footer>
    );
};

export default Footer;