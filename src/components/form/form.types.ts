export type Frequency = 'weekly' | 'fortnightly' | 'monthly' | 'quaterly' | 'yearly';

export type FormState = {
    amount: string | null;
    fees: string | null;
    feeFrequency: Frequency;
    interestRate: string | null;
    length: string | null;
    repaymentFrequency: Frequency;
    setAmount: (amount: string) => void;
    setFees: (fees: string) => void;
    setFeeFrequency: (feeFrequency: Frequency) => void;
    setInterestRate: (interestRate: string) => void;
    setLength: (length: string) => void;
    setRepaymentFrequency: (repaymentFrequency: Frequency) => void;
  };