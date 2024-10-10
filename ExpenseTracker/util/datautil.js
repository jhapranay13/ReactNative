const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'pair of shoes',
        amount: 59.91,
        date: new Date('2023-12-19')
    },
    {
        id: 'e2',
        title: 'pair of trousers',
        amount: 89.29,
        date: new Date('2024-10-05')
    },
    {
        id: 'e3',
        title: 'some banana',
        amount: 5.99,
        date: new Date('2023-12-01')
    },
    {
        id: 'e4',
        title: 'a book',
        amount: 15.99,
        date: new Date('2024-09-29')
    },
    {
        id: 'e5',
        title: 'book',
        amount: 15.99,
        date: new Date('2024-09-18')
    },
];

export const getData = () => {

    return new Promise(
        (resolve) => {
            return setTimeout(() => {
                resolve(DUMMY_EXPENSES);
            }, 2000);
        }
    );
}

export const updateData = (id, expenses) => {
    return new Promise(
        (resolve) => {
            return setTimeout(() => {
                const index = DUMMY_EXPENSES.findIndex(
                    (expense) => { return expense.id === id }
                );
                const updateStateExpense = DUMMY_EXPENSES[index];
                const updateItem = {...updateStateExpense, ...expenses , id: id}; 
                DUMMY_EXPENSES[index] = updateItem;
                resolve(true);
            },5000);
        }
    );
}