import logo from './logo.png';
import video_banner from './home-page-banner.mp4';
import people from './people.png';
import people_org from './people-org.png';


export const assets = {
    logo,
    video_banner,
    people,
    people_org
    
}

export default assets;

export const steps = [
    {
        step: "Step 1",
        title: "Select an image",
        description: `First, choose the image you want to remove background from by clicking on "Start from a photo".
        Your image should be in JPG or PNG format. 
        We support all image sizes and dimensions.`,
    },
    {
        step: "Step 2",
        title: "AI Processing",
        description: `After uploading, our AI will automatically detect the subject in your image and remove the background.
        This process is quick and efficient, ensuring high-quality results.`,
    },
    {
        step: "Step 3", // fixed from "id"
        title: "Download Result",
        description: `Once the background is removed, you can select a new background color and download the photo!
        The image will have a transparent background, ready for use in your projects.`,
    }
];

export const categories = ["People", "Products", "Animals", "Cars", "Food"];

export const plans = [ 
    {
        id: "Basic",
        name: "Basic Package",
        price: "₹499",
        credits: "100 credits",
        description: "Best for personal use",
        popular: false 
    },
    {
        id: "Premium",
        name: "Premium Package",
        price: "₹899",
        credits: "250 credits",
        description: "Best for business use",
        popular: true   },
    {
        id: "Ultimate",
        name: "Ultimate Package",
        price: "₹1499",
        credits: "1000 credits",
        description: "Best for enterprise use",
        popular: false
    }
]

export const testimonials = [
    {
        id: 1,
        quote: "I am impressed with the speed and accuracy of this background removal tool. It's a game-changer for my design projects.",
        author: "John Cena",
        handle: "@johncena"
    },
    {
        id: 2,
        quote: "remove.bg has transformed the way I work. The AI-powered background removal is incredibly efficient and saves me so much time.",
        author: "Tanishq Toliya",
        handle: "@tanishq_qt"
    },
    {
        id: 3,
        quote: "As a designer, I find this tool invaluable. It allows me to focus on my creativity without worrying about tedious background tasks.",
        author: "Priyanshu Singh",
        handle: "@priyanshusingh28"
    }

];