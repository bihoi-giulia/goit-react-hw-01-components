import PropTypes from 'prop-types';

export const Transaction = ({ transaction }) => {
  const { type, amount, currency } = transaction;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.prototype = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
