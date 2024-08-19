import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import InfiniteText from "./components/SubHeadLine/InfiniteText";
import SubHeadline from "./components/SubHeadLine/SubHeadline";
import WhyUs from "./components/WhyUs/WhyUs";
function App() {
  return (
    < div className="App">
        <Header></Header>
        <main>
        <Hero></Hero>
        <div className="subheadline-wrapper">
        <InfiniteText direction="left"></InfiniteText>
        <InfiniteText direction="right"></InfiniteText>

        <SubHeadline></SubHeadline>
        <InfiniteText direction="left"></InfiniteText>
        <InfiniteText direction="right"></InfiniteText>
        </div>
        <Services></Services>
        <WhyUs></WhyUs>
        <ContactUs></ContactUs>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
}

export default App;
