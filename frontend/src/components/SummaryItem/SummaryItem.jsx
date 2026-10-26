import './SummaryItem.scss';

const SummaryItem = ({ icon, number, text }) => {
  return (
    <li className="summary__item">
      {icon}
      <p className="summary__text">{text}</p>
      <span className="summary__number">{number}</span>
    </li>
  );
};

export default SummaryItem;
