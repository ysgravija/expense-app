const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export interface Transaction {
  id : string;
  type : 'Income'| 'Expense';
  category : string;
  amount : number;
  date : Date;
}

export interface Category {
  name: string;
  color : string;
};

export const incomeCategories : Category[] = [
  { name: 'Business', color: incomeColors[0] },
  { name: 'Investments', color: incomeColors[1] },
  { name: 'Extra income', color: incomeColors[2] },
  { name: 'Deposits', color: incomeColors[3] },
  { name: 'Lottery', color: incomeColors[4] },
  { name: 'Gifts', color: incomeColors[5] },
  { name: 'Salary', color: incomeColors[6] },
  { name: 'Savings', color: incomeColors[7] },
  { name: 'Rental income', color: incomeColors[8] },
];

export const expenseCategories : Category[] = [
  { name: 'Bills', color: expenseColors[0] },
  { name: 'Car', color: expenseColors[1] },
  { name: 'Clothes', color: expenseColors[2] },
  { name: 'Travel', color: expenseColors[3] },
  { name: 'Food', color: expenseColors[4] },
  { name: 'Shopping', color: expenseColors[5] },
  { name: 'House', color: expenseColors[6] },
  { name: 'Entertainment', color: expenseColors[7] },
  { name: 'Phone', color: expenseColors[8] },
  { name: 'Pets', color: expenseColors[9] },
  { name: 'Other', color: expenseColors[10] },
];
