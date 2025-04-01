import { create } from 'zustand';

// Types.
import { FormState } from './form.types';

export const useFormStore = create<FormState>()(set => ({
    amount: null,
    fees: null,
    feeFrequency: "monthly",
    interestRate: null,
    length: null,
    repaymentFrequency: "weekly",
    setAmount: (amount: string) => set(() => ({ amount })),
    setFees: (fees: string) => set(() => ({ fees })),
    setFeeFrequency: (feeFrequency) => set(() => ({ feeFrequency })),
    setInterestRate: (interestRate: string) => set(() => ({ interestRate })),
    setLength: (length: string) => set(() => ({ length })),
    setRepaymentFrequency: (repaymentFrequency) => set(() => ({ repaymentFrequency })),
}));