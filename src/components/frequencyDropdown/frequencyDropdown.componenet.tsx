'use client';

// Components.
import { Select } from '@westpac/ui'

// Types.
import { Frequency } from "../form/form.types"
import { FrequencyDropDownProps } from './frequencyDropdown.types';

export default function FrequencyDropdown({ value, onChange }: FrequencyDropDownProps) {
    return (
        <Select
            value={value}
            onChange={e => onChange(e.target.value as Frequency)}
            className="w-full"
        >
            <option value="yearly">Yearly</option>
            <option value="quaterly">Quaterly</option>
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
        </Select>
    );
}