import "./App.css";
import "./index.css";
import {
  Navbar,
  Hero,
  CustomerReviews,
  PopularProducts,
  SpecialOffers,
  Services,
  Subscription,
  Footer,
  SuperQuality,
} from "./sectionComponents";

function App() {
  return (
    <main className="relative">
      <Navbar></Navbar>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffers></SpecialOffers>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscription></Subscription>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </main>
  );
}

export default App;
