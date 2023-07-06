import user from './data-folder/user.json';
import { Profile } from './profile/Profile';
import data from './data-folder/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './data-folder/friends.json';
import { FriendList } from './friend-list/FriendList';
import transactions from './data-folder/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <div className="user-container">
        <SectionTitle title={'User Profile'} />
        <Profile {...user} />
      </div>
      <div className="statistics-container">
        <SectionTitle title={'Statistics'} />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <div className="friends-container">
        <SectionTitle title={'Friends List'} />
        <FriendList friends={friends} />;
      </div>
      <div className="transaction-container">
        <SectionTitle title={'Transactions'} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

const SectionTitle = ({ title }) => {
  return (
    <h2 style={{ textAlign: 'center', width: '100%', marginTop: 10 }}>
      {title}
    </h2>
  );
};

export default App;
