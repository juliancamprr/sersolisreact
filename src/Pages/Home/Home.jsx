import "./Home.css";
import sersolislogo from "../../Images/sersolislogo.png";

function Home() {
  return (
    <div className="container-main">
        <div class="container">
          <div class="illustration">
            <img src={sersolislogo} alt="" />
          </div>
          <div class="head-text text-white">
            <h2>
              Personalize seu <span>servidor profissional</span> de acordo com
              suas necessidades, com nossos serviços adaptáveis
            </h2>
          </div>
        </div>
      
    </div>
  );
}

export default Home;
