import PropTypes from "prop-types";

export default function CurrencySelector({ localCurrency, setLocalCurrency }) {
  function onSelectCurrency(event) {
    const currency = event.target.value;

    setLocalCurrency(currency);
  }

  return (
    <div>
      <label>
        Currency:
        <select
          className="u-full-width"
          onChange={onSelectCurrency}
          value={localCurrency}
        >
          <option value="usd">USD</option>
          <option value="rupee">Rupee</option>
          <option value="yuan">Yuan</option>
        </select>
      </label>
    </div>
  );
}

CurrencySelector.propTypes = {
  localCurrency: PropTypes.string.isRequired,
  setLocalCurrency: PropTypes.func.isRequired,
};