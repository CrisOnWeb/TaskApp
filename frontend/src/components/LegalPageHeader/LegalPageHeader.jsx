import './LegalPageHeader.scss';

const LegalPageHeader = ({ icon, title, subtitle, date }) => {
  return (
    <header className="legal-header central-column">
      <div className="legal-header__heading">
        <div className="legal-header__icon">{icon}</div>
        <h2 className="legal-header__title">{title}</h2>
      </div>
      <div className="legal-header__content">
        <p className="legal-header__subtitle">{subtitle}</p>

        {date && (
          <div className="legal-header__date">
            <span>Última actualización · {date}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default LegalPageHeader;
