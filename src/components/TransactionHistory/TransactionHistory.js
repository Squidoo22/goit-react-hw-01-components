import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory} border="1">
      <thead>
        <tr className={styles.transactionRow}>
          <th className={styles.transactionHead}>Type</th>
          <th className={styles.transactionHead}>Amount</th>
          <th className={styles.transactionHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={styles.transactionRow}>
            <td className={styles.transactionCol}>{transaction.type}</td>
            <td className={styles.transactionCol}>{transaction.amount}</td>
            <td className={styles.transactionCol}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
