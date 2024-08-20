import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import InfiniteText from "./components/SubHeadLine/InfiniteText";
import SubHeadline from "./components/SubHeadLine/SubHeadline";
import WhyUs from "./components/WhyUs/WhyUs";
import { useState } from "react";
function App() {
  const [menuClicked,setMenuClicked] = useState(false);
  const [english,setEnglish] = useState(true);
  const handleMenuClicked= ()=>{
      setMenuClicked(!menuClicked);
  }
  const handleSetEnglish = ()=>{
    setEnglish(!english);
  }

  return (
    < div className="App">
        <Header menuClicked={menuClicked} handleMenuClicked={handleMenuClicked} english={english} handleSetEnglish={handleSetEnglish}></Header>
        {!menuClicked && <><main>
        <Hero english={english}></Hero>
        <div className="subheadline-wrapper">
        <InfiniteText english={english} direction="left"></InfiniteText>
        <InfiniteText english={english} direction="right"></InfiniteText>

        <SubHeadline english={english}></SubHeadline>
        <InfiniteText english={english} direction="left"></InfiniteText>
        <InfiniteText english={english} direction="right"></InfiniteText>
        </div>
        <Services english={english}></Services>
        <WhyUs english={english}></WhyUs>
        <ContactUs english={english}></ContactUs>
        </main>
        <footer>
          <Footer english={english}></Footer>
        </footer> </>}
    </div>
  );
}

export default App;
