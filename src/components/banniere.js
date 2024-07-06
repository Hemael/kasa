import banniere from '../datas/banniere.png';

const Banniere = () => {
  return (
    <div className="boxBanniere">
      <h1>Chez vous, partout et ailleurs</h1>
      <img src={banniere} alt="img montagne" className="banniereImg"/> 
    </div>
  );
};

export default Banniere;