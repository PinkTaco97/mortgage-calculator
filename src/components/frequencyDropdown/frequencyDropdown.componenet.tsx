'use client';

// Types.
import { Frequency } from "../form/form.types"
import { FrequencyDropDownProps } from './frequencyDropdown.types';

export default function FrequencyDropdown({ value, onChange }: FrequencyDropDownProps) {
    return (
        <select value={value} onChange={e => onChange(e.target.value as Frequency)} className="border p-2 w-lg">
            <option value="yearly">Yearly</option>
            <option value="quaterly">Quaterly</option>
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
        </select>
    );
}