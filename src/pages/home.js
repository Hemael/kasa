import "../sass/main.css";
import logements from '../datas/logements';
import banniere from '../datas/banniere.png';

const Home = () => {
    return (
        <div className="home"> 
            <div className="boxBanniere">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={banniere} alt="img montagne" className="banniereImg"/> 
            </div>
            <div className="boxLogements">
                {logements.map((logement, id) => (
                <div key={id} className="logement">
                    <img src={logement.cover} alt={logement.title} className="picture"/>
                    <h2 className="title">{ logement.title }</h2>
                </div>))}
            </div>



        </div>
    )
};

export default Home;