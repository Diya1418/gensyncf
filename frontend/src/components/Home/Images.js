// import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Images from "./components/Home/Images";
import "./index.css";


  function Sliderz(){

    const Images = [
      {
        id: 1,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/06/Bhagesh-Bhutani_CSE_Amazon-SDE-44LPA-150x150.jpg",
        alt: "Image 1",
        title: "Bhagesh Bhutani",
        description: (
          <>
            CSE (2018-22)
            <br />
            Amazon SDE (44 LPA)
          </>
        )
      },
      {
        id: 2,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/12/amisha-chandna_bny-mellon-technology_2164_IT.jpg",
        alt: "Image 2 ",
        title: "Amisha Chandna",
        description: (
          <>
            IT (2019-23)
            <br />
            BNY Mellon Technologies (21.64 LPA)
          </>
        )
      },
      {
        id: 3,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/10/chayan-Sharma200-by-200-150x150.png",
        alt: "Image 3",
        title: "Chayan Sharma",
        description: (
          <>
            CSE (2018-22)
            <br />
            Google (66 LPA)
          </>
        )
      },
      {
        id: 4,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/12/Ansh-Gera_Amazon_2836lpa_ece.jpg",
        alt: "Image 4",
        title: "Ansh Gera",
        description: (
          <>
            ECE (2019-23)
            <br />
            Amazon (44 LPA)
          </>
        )
      },
      {
        id: 5,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/06/NehaBedi-CSE2018-2022Amazon-44LPA-150x150.jpg",
        alt: "Image 5",
        title: "Neha Bedi",
        description: (
          <>
            CSE (2018-22)
            <br />
            Google (66 LPA)
          </>
        )
      },
      {
        id: 6,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/06/AshishChowdhry_CSEA_AmazonSDEIntern_40lpa-1-150x150.jpeg",
        alt: "Image 6",
        title: "Ashish Chowdhry",
        description: (
          <>
            CSE (2018-22)
            <br />
            Amazon (44 LPA)
          </>
        )
      },
      {
        id: 7,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/06/Rishabh-Gupta-IT-Zomato-45LPA-1-1-150x150.jpeg",
        alt: "Image 7",
        title: "Rishab Gupta",
        description: (
          <>
            IT (2018-22)
            <br />
            Zomato (45 LPA)
          </>
        )
      },
      {
        id: 8,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/06/Vinay_Sharma-CSE_A-AMAZON-CTC_29.36-Lacs-150x150.jpg",
        alt: "Image 8",
        title: "Vinay Sharma",
        description: (
          <>
            CSE (2018-22)
            <br />
            Amazon (29.35 LPA)
          </>
        )
      },
      {
        id: 9,
        src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bpitindia.ac.in/wp-content/uploads/2022/06/DivyanshiParashar_CSE_Chaayos_12LPA-150x150.jpeg",
        alt: "Image 9",
        title: "Divyanshi Parashar",
        description: (
          <>
            CSE (2018-22)
            <br />
            Chaayos (12 LPA)
          </>
        )
      },
    ];
  
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,          // Enable autoplay
      autoplaySpeed: 2000,     // Set the interval in milliseconds (3 seconds in this case)
    };

    return (
      <>
       <div className="content">
        <h1 className="header">OUR TOP PLACED</h1>
        <p className="para">Where Dreams Take Flight and Futures Are Forged! At Top Placed, we redefine success by offering a comprehensive platform where aspiring talents connect with seasoned mentors. Our meticulously curated environment nurtures a spirit of innovation, offering personalized guidance, real-world insights, and unparalleled opportunities.</p>
        <div className="container">
          <Slider {...settings}>
            {Images.map((item) => (
              <div key={item.id} className="area">
                <img id="img-slider" src={item.src} alt={item.alt} className="img" />
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </>
    );
  }


export default Sliderz;