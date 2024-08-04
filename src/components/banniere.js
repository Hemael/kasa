
import banniere from '../datas/banniere.png';

const Banniere = ({ showText = true, image = banniere }) => {
  return (
    <div className="boxBanniere">
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
      <img src={image} alt="img montagne" className="banniereImg"/> 
    </div>
  );
};

export default Banniere;