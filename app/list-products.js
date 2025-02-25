// Importing Images
import product1 from "../app/assets/images/img1.jpg";
import product2 from "../app/assets/images/img2.jpg";
import product3 from "../app/assets/images/img3.jpg";
import product4 from "../app/assets/images/img4.jpg";
import product5 from "../app/assets/images/img5.jpg";
import product6 from "../app/assets/images/img6.jpg";
import product7 from "../app/assets/images/img7.jpg";
import product8 from "../app/assets/images/img8.jpg";
import product9 from "../app/assets/images/img9.jpg";
import product10 from "../app/assets/images/pexels-enginakyurt-4458519.jpg";
import product11 from "../app/assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import product12 from "../app/assets/images/pexels-yaazhini-17307532.jpg";

// Product Data Array
const products = [
    { image: product1, title: "boAt Airdopes Joy", description: "Experience high-quality sound with the boAt Airdopes Joy. Designed for comfort and performance.", price: "$200" },
    { image: product2, title: "Aspire 3D 15 SpatialLabs Edition Laptop", description: "Unlock immersive 3D experiences with the Aspire 3D 15 Laptop, powered by SpatialLabs technology.", price: "$3249" },
    { image: product3, title: "Apple All-in-One Desktop", description: "Get the ultimate Apple experience with this all-in-one desktop, combining powerful performance and sleek design.", price: "$1500" },
    { image: product4, title: "Apple Watch Series 10", description: "Stay ahead with the Apple Watch Series 10, featuring advanced fitness tracking and seamless connectivity.", price: "$549" },
    { image: product5, title: "iPad Air (2023)", description: "Powerful, portable, and stylish. The new iPad Air delivers performance in a sleek design.", price: "$1090" },
    { image: product6, title: "Razer Viper V3 Pro Faker Edition", description: "Designed for precision and speed, the Razer Viper V3 Pro Faker Edition is built for competitive gamers.", price: "$980" },
    { image: product7, title: "iPhone 15", description: "The future of smartphones is here with the iPhone 15. Powerful, stylish, and packed with features.", price: "$999" },
    { image: product8, title: "MacBook Pro 2023", description: "Take your creativity to the next level with the MacBook Pro 2023, designed for professionals and creators.", price: "$2099" },
    { image: product9, title: "Samsung Galaxy A16 5G", description: "Stay connected with lightning-fast speeds using the Samsung Galaxy A16 5G, designed for performance.", price: "$269.99" },
    { image: product10, title: "Customer Favorite", description: "Our most popular product, loved by customers for its unbeatable features and performance.", price: "$1500" },
    { image: product11, title: "Everyday Essentials", description: "Perfect for daily use, this product combines practicality with modern design.", price: "$1500" },
    { image: product12, title: "Modern & Stylish", description: "A perfect blend of style and functionality, designed to complement any lifestyle.", price: "$1500" }
];


// Function to Generate Product Cards
function generateProductCards() {
    const productList = document.getElementById("product-list");
    if (!productList) {
        console.error("❌ Error: 'product-list' element not found!");
        return;
    }

    products.forEach(product => {
        console.log("✅ Loading Image:", product.image); // Debugging step

        // Create Product Card
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "col-sm-6", "mb-4"); // Bootstrap grid classes
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}" 
                     onerror="this.onerror=null; this.src='/assets/images/placeholder.jpg';">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price"><strong>${product.price}</strong></p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Run function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateProductCards);


// Run function when DOM is fully loaded
// document.addEventListener("DOMContentLoaded", generateProductCards);
