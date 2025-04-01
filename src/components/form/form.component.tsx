'use client';

// Components.
import { Heading, Input, InputGroup } from "@westpac/ui";
import { FrequencyDropdown } from '@/components'

// State.
import { useFormStore } from './form.store';

// Types.
import { Frequency } from './form.types'

export default function Form() {
    const store = useFormStore();
    return (
        <div className="bg-white p-5">
            <Heading tag="h1" size={3} brandHeading>Mortgage Calculator</Heading>
            <br/>
            <div className="flex flex-row gap-2 justify-start">
                <div className="flex flex-col gap-2 basis-1/3">
                    <InputGroup
                        label="Amount borrowed:"
                        before="$"
                    >
                        <Input
                            value={store.amount}
                            onChange={e => store.setAmount(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup
                        label="Length of loan:"
                        after="years"
                    >
                        <Input
                            value={store.length}
                            onChange={e => store.setLength(e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="flex flex-col gap-2 basis-1/3">
                    <InputGroup
                        label="Interest rate:"
                        after="%"
                    >
                        <Input
                            value={store.interestRate}
                            onChange={e => store.setInterestRate(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup
                        label="Fees:"
                        before="$"
                    >
                        <Input
                            value={store.fees}
                            onChange={e => store.setFees(e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="flex flex-col gap-2 basis-1/3"> 
                    <InputGroup
                        label="Repayment frequency:"
                    >
                        <FrequencyDropdown
                            value={store.repaymentFrequency}
                            onChange={(value: Frequency) => store.setRepaymentFrequency(value)}
                        />
                    </InputGroup>
                    <InputGroup
                        label="Fees frequency:"
                    >
                        <FrequencyDropdown
                            value={store.feeFrequency}
                            onChange={(value: Frequency) => store.setFeeFrequency(value)}
                        />
                    </InputGroup>
                </div>
            </div>
        </div>
    );
}