export type Frequency = 'weekly' | 'fortnightly' | 'monthly' | 'quaterly' | 'yearly';

export type FormInitialValues = {
  amount: string;
  fees: string;
  feeFrequency: Frequency;
  interestRate: string;
  length: string;
  repaymentFrequency: Frequency;
}

export type FormState = {
    amount: string;
    fees: string;
    feeFrequency: Frequency;
    interestRate: string;
    length: string;
    repaymentFrequency: Frequency;
    initialValues?: FormInitialValues;
    setAmount: (amount : string) => void;
    setFees: (fees : string) => void;
    setFeeFrequency: (feeFrequency : Frequency) => void;
    setInterestRate: (interestRate : string) => void;
    setLength: (length : string) => void;
    setRepaymentFrequency: (repaymentFrequency : Frequency) => void;
  };