import Meta from "../components/Meta";
import Image from "next/image";
import aboutStyles from "../styles/About.module.css";
const About = () => {
  return (
    <div className={aboutStyles.container}>
      <Meta title="About" />
      <h1>About</h1>
      <p>Use Next.js to the product carousel on adidas.fi as image below.</p>
      <Image src="/example.png" alt="example" width={1500} height={500} />
    </div>
  );
};

export default About;
