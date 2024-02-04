
import Hero from "@/Components/Hero/Hero";
import Sections from "@/Components/Sections/Sections";
import Slider from "@/Components/Slider/Slider";

export default function Home() {

  
  return (
    <div>
      <Hero />
      <Sections
        title="Eat."
        subTitle="Breakfast, Lunch and Artisanal Pastries"
        description="Indulge in our tasty creations, where every bite tells a flavorful story. From savory classics to delightful surprises, our menu is a journey of culinary delights. Eat, enjoy, repeat – because good food is a simple joy."
        imgurl="/section1.webp"
        btnText="See More"
        left={false}
      />
      <Sections
        title="Drink."
        subTitle="The Freshest Cup in Town"
        description="Savor our rich coffee, each cup a tale of carefully chosen beans. From classics to surprises, our menu offers aromatic delights. Whether morning or break, our crafted coffee is a simple joy. Embrace the warmth, relish the flavor – a delightful ritual in every cup."
        imgurl="/drink.webp"
        btnText="See More"
        left={true}
      />
      <Sections
        title="Enjoy."
        subTitle="Savor the Joy in Every Bite."
        description="Relish the joy in every moment with us. From rich coffee to delightful bites, our offerings are crafted for your enjoyment. Sit back, savor, and make the most of your time with our simple pleasures."
        imgurl="/enjoy2.jpeg"
        btnText="Visit Us"
        left={false}
      />
      <Slider />
    </div>
  );
}
