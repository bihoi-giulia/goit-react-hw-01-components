import css from './TransactionHistory.module.css';
import { Transaction } from './Transaction/transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(trans => (
          <Transaction key={trans.id} transaction={trans} />
        ))}
      </tbody>
    </table>
  );
};
