import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from '../components/IconButton';
import { GlobalStyles } from '../styles';
import { CustomButton } from '../components/CustomButton';
import { ExpenseContext } from '../store/ExpensesContext';
import { ExpneseForm } from '../components/ExpenseForm';
import { updateData } from '../util/datautil';
import { WaitingSpinner } from '../components/WaitingSpinner';

export const ManageExpense = ({route, navigation}) => {
    const id = route.params?.expenseId;
    const isEditing = !!id;
    const ctx = useContext(ExpenseContext);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const selectedExpense = ctx.expneses.find((expense) => {
        return expense.id === id;
    });

    useLayoutEffect( () => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        ctx.deleteExpenes(id);
        navigation.goBack();
    };

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {

        if (isEditing) {
            setIsSubmitting(true);
            const updated = await updateData(id, expenseData); ;

            if (updated) {
                ctx.updateExpenes(id, expenseData);

            }
        } else {
            ctx.addExpenes(expenseData);
        }
        navigation.goBack();

    }

    if (isSubmitting) {
        return <WaitingSpinner></WaitingSpinner>
    }

    return (
        <View style={styles.container}>
            <ExpneseForm onCancel={cancelHandler} 
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmHandler}
                defaultValue={selectedExpense}
            ></ExpneseForm>
           
            { isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton 
                        name='trash' 
                        color={GlobalStyles.colors.error500} 
                        size={36} 
                        onPress={deleteExpenseHandler}></IconButton>
                </View>
            )}    
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: GlobalStyles.colors.primary800,

        },
        deleteContainer: {
            marginTop: 16,
            paddingTop: 8,
            borderTopWidth: 2,
            borderTopColor: GlobalStyles.colors.primary200,
            alignItems: 'center',

        },
       
    }
);