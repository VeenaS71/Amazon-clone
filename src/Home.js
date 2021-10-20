import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/Available_Now/Per_Daycallout/TallHero_1500X600_1._CB405352815_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12345"
            title="MI Laptops With Latest Intel 10th Gen Processor"
            price={60000}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/MSO/QC/Aug_2020/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB406236485_.jpg"
            rating={4}
          />
          <Product
            id="34567"
            title="Philips MMS2220B 2.1 Speaker (5.1 Channel) 120W Bluetooth Convertible Multimedia Soundbar/Speaker"
            price={5679}
            image="https://images-eu.ssl-images-amazon.com/images/I/412vl-2L3HL._AC_US160_FMwebp_QL70_.jpg"
            rating={5}
          />
          <Product
            id="9870"
            title="MI Black(Band)"
            price={2345}
            image="https://images-eu.ssl-images-amazon.com/images/I/31pVse2NwVL._AC_US218_FMwebp_QL70_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="43213"
            title="Urban Tribe 24 Ltrs Laptop Backpack"
            price={5499}
            image="https://images-eu.ssl-images-amazon.com/images/I/41MbLw5P9fL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="9876"
            title="Fender Squier MM Stratocaster Electric Guitar - Black with Maple Neck"
            price={9945}
            image="https://m.media-amazon.com/images/I/61S+NvLaCfL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="67890"
            title="Sony Bravia 80 cm (32 inches) HD Ready LED TV KLV-32R202G (Dark Brown)"
            price={45789}
            image="https://images-na.ssl-images-amazon.com/images/I/71IgrNZUhPL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="2478"
            title="AmazonBasics Waffle Weave Shower Curtain - Grey"
            price={299}
            image="https://m.media-amazon.com/images/I/91sDatMcJ8L._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="43256"
            title="Haeir 192 L 4 Star Inverter Direct Cool Single Door Refrigerator(Pebble Blue)"
            price={14390}
            image="https://m.media-amazon.com/images/I/71mlSspS7OL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="9008"
            title="Roll over image to zoom in
            Amazon Brand - Solimo Brickline Microfibre Printed Quilt Blanket, Double, 120 GSM, Blue"
            price={799}
            image="https://m.media-amazon.com/images/I/911ZHmko1iL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="5670"
            title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)
            Visit the Samsung Store"
            price={8765}
            image="https://m.media-amazon.com/images/I/71nplbAMwzL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
