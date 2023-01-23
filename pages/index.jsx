import Tabuleiro from '../components/tabuleiro';
import Subdivisao from '../components/Subdivisao/index';
import Linha from '../components/Linha/index';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Tabuleiro />
    </div>
  )
};




export default Home;