export const toFixed = (num : number | string, precision : number) => (+`${Math.round(+`${num}e${precision}`)}e${-precision}`).toFixed(precision);

export const formatNumber = (value : string, max? : number) => {
    const number = value.replace(/\D+/g, "");
    if(max && parseInt(number) > max) return String(max);
    return number;
}

export const formatCurrency =  (value : string, max? : number) => {
    const number : number = parseInt(formatNumber(value, max));
    if(isNaN(number)) return '';
    return Intl.NumberFormat('en-AU').format(number);
}

export const formatPercentage =  (value : string, max : number = 100.00) => {
    if(value.startsWith('.')) return '0.';
    if(value.endsWith('..')) return value.substring(0, value.length - 1);
    if(value.endsWith('.')) return value;
    if(value.includes('.')) return Number(value).toLocaleString("en-AU", { maximumFractionDigits: 2 });
    const number : number = parseFloat(formatNumber(value, max));
    if(isNaN(number)) return '';
    return String(number);
}


