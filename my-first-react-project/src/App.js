import Expenses from "./components/ExpenseTracker/Expenses";
import DetailsPage from './components/OnlineForm/Details/DetailsPage';

function App() {
  const expense = [
    {
      title: "School Fee",
      date: new Date(2021, 11, 12),
      amount: 500,
    },
    {
      title: "Uniform",
      date: new Date(2021, 3, 15),
      amount: 400,
    },
    {
      title: "Books",
      date: new Date(2021, 4, 13),
      amount: 300,
    },
    {
      title: "Food",
      date: new Date(2021, 5, 15),
      amount: 100,
    },
  ];

  return (
    <div>
      <h1>This is the app component</h1>
      <Expenses item={expense} />
      <DetailsPage/>
    </div>
  );
}

export default App;
