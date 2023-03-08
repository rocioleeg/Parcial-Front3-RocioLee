import styles from "./Card.module.css";

const Card = ({name, comidaFav}) => {
  return <div className={styles.container}>
    Hola {name}! <br></br> 
  Sabemos que tu comida preferida es {comidaFav}</div>;
};

export default Card;
