import { create } from 'zustand';

// Types.
import { FormState, FormInitialValues, Frequency } from './form.types';

// Utilities.
import { formatCurrency, formatNumber, formatPercentage } from '@/utils';

const initialVaules : FormInitialValues = {
    amount: "",
    fees: "",
    feeFrequency: "monthly",
    interestRate: "",
    length: "",
    repaymentFrequency: "weekly",
}

export const useFormStore = create<FormState>()(set => ({
    ...initialVaules,
    setAmount: (amount : string) => set(() => ({ amount: formatCurrency(amount, 10000000) })),
    setFees: (fees : string) => set(() => ({ fees: formatCurrency(fees, 10000) })),
    setFeeFrequency: (feeFrequency : Frequency) => set(() => ({ feeFrequency })),
    setInterestRate: (interestRate : string) => set(() => ({ interestRate: formatPercentage(interestRate, 20.00) })),
    setLength: (length : string) => set(() => ({ length: String(formatNumber(length, 30)) })),
    setRepaymentFrequency: (repaymentFrequency : Frequency) => set(() => ({ repaymentFrequency })),
}));