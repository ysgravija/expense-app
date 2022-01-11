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
  type : 'Income' | 'Expense'
};

export const categories : Category[] = [
  { name: 'Business', color: incomeColors[0], type : 'Income' },
  { name: 'Investments', color: incomeColors[1], type : 'Income' },
  { name: 'Extra income', color: incomeColors[2], type : 'Income' },
  { name: 'Deposits', color: incomeColors[3], type : 'Income' },
  { name: 'Lottery', color: incomeColors[4], type : 'Income' },
  { name: 'Gifts', color: incomeColors[5], type : 'Income' },
  { name: 'Salary', color: incomeColors[6], type : 'Income' },
  { name: 'Savings', color: incomeColors[7], type : 'Income' },
  { name: 'Rental income', color: incomeColors[8], type : 'Income' },
  { name: 'Bills', color: expenseColors[0], type : 'Expense' },
  { name: 'Car', color: expenseColors[1], type : 'Expense'  },
  { name: 'Clothes', color: expenseColors[2], type : 'Expense'  },
  { name: 'Travel', color: expenseColors[3], type : 'Expense'  },
  { name: 'Food', color: expenseColors[4], type : 'Expense'  },
  { name: 'Shopping', color: expenseColors[5], type : 'Expense'  },
  { name: 'House', color: expenseColors[6], type : 'Expense'  },
  { name: 'Entertainment', color: expenseColors[7], type : 'Expense'  },
  { name: 'Phone', color: expenseColors[8], type : 'Expense'  },
  { name: 'Pets', color: expenseColors[9], type : 'Expense'  },
  { name: 'Other', color: expenseColors[10], type : 'Expense'  },
];
