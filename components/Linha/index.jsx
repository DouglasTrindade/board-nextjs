import Subdivisao from "../Subdivisao/index";
import styles from "./styles.module.css";

const Linha = ({preta}) => {
  return (
    <div className={styles.linha}>
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
    </div>
  )
}


export default Linha;