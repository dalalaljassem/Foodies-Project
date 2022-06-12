import image from "../../src/cake1.png";
import image2 from "../../src/cake2.png";
import image3 from "../../src/pasta.jpeg";
import "../home.css";
function Home() {
  return (
    <>
      <h2 className="foodTitle">WELCOME TO FOODIES</h2>
      <div class="container">
        <div class="row">
          <div class="colLeft col">
            <img src={image}></img>
          </div>
          <div class="colRight col">
            <img src={image2}></img>
          </div>
          <div class="colRight col">
            <img src={image3}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
