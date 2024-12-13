let testimonial_data = [
    {
        name : "Ramesh Babu",
        image : "https://assets.gqindia.com/photos/653a68cf4233545fe8acb9b4/1:1/w_1080,h_1080,c_limit/Movies-turned-down-by-Leo-star-Vijay.jpg",
        text : "I am a Web developer"
    },
    {
        name : "Sudharashan",
        image : "https://crictoday.com/wp-content/uploads/2024/02/Dhoni.webp",
        text : "I am a Web Designer"
    },
    {
        name : "Hari Haren",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrmeAMflA8Miq_3hjhr6FcXgau_K7AeMWrA&s",
        text : "I am a Graphics Designer"
    },
    {
        name : "Boopalan",
        image : "https://wallpapers.com/images/hd/sivakarthikeyan-pink-painting-effect-ety122lo28qyitp7.jpg",
        text : "I am a Tester"
    },
    {
        name : "Praveen",
        image : "https://upload.wikimedia.org/wikipedia/commons/7/7d/Vikram_as_Dhruva.jpg",
        text : "I am a Product Manager"
    },
    {
        name : "Vignesh",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFqsoeBcIFHvuRMFQjI_aal01SSqc_qTXew&s",
        text : "I am a UI/Ux Designer"
    },
    {
        name : "Jaya Vignesh",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9VxZxWVZnK0IT1UlysB21342NelCNMXmUw&s",
        text : "I am a Photographer I am a Photographer I am a Photographer I am a Photographer I am a Photographer I am a Photographer I am a Photographer I am a Photographer I am a Photographer I am a Photographer I am a Photographer v"
    },
];

let data = 0;
let name = document.querySelector(".container_name");
let image = document.querySelector(".container_img");
let text = document.querySelector(".container_text");

function testimonial() {
    let current = testimonial_data[data];
    name.innerHTML = current.name;
    image.src = current.image;
    text.innerHTML = current.text;  // Corrected this line

    data++;

    if (data === testimonial_data.length) {
        data = 0;
    }
}

setInterval(testimonial, 1000);
testimonial();
