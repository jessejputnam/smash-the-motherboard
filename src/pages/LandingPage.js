import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Header />
      <main className='main'>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png'
            alt='placeholder'
          ></img>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
