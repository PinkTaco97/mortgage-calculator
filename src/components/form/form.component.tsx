'use client';

// Components.
import { Heading, Input } from "@westpac/ui";
import { FrequencyDropdown } from '@/components'

// State.
import { useFormStore } from './form.store';

// Types.
import { Frequency } from './form.types'

export default function Form() {
    const store = useFormStore();

    console.log("@TEST/STORE", store);
    return (
        <div className="bg-white p-5">
            <Heading tag="h1" size={3} brandHeading>Mortgage Calculator</Heading>
            <br/>
            <div className="flex flex-row gap-2 justify-start">
                <div className="flex flex-col gap-2">
                    <p className="typography-body-10 text-muted">Amount borrowed:</p>
                    <Input
                        value={store.amount}
                        onChange={e => store.setAmount(e.target.value)}
                    />
                    <p className="typography-body-10 text-muted">Length of loan:</p>
                    <Input type="number"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="typography-body-10 text-muted">Interest rate:</p>
                    <Input
                        value={store.interestRate}
                        onChange={e => store.setInterestRate(e.target.value)}/>
                    <p className="typography-body-10 text-muted">Fees:</p>
                    <Input  type="number"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="typography-body-10 text-muted">Repayment frequency:</p>
                    <FrequencyDropdown
                        value={store.repaymentFrequency}
                        onChange={(value: Frequency) => store.setRepaymentFrequency(value)}
                    />
                    <p className="typography-body-10 text-muted">Fees frequency:</p>
                    <FrequencyDropdown
                        value={store.feeFrequency}
                        onChange={(value: Frequency) => store.setFeeFrequency(value)}
                    />
                </div>
            </div>
        </div>
    );
}