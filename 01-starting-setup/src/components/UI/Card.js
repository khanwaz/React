import "./Card.css";

function Card(datas) {
  const classes = 'card ' + datas.className;

  return <div className={classes}>{datas.children}</div>;
}

export default Card;
