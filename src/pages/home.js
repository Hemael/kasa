import "../sass/main.css";
import Banniere from '../components/banniere';
import LogementsList from '../components/logementsList';

const Home = () => {
  return (
    <div className="home"> 
      <Banniere />
      <LogementsList />
    </div>
  );
};

export default Home;