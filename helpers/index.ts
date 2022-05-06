export const formatMoney = (value: number) => {
    return `R$${Intl.NumberFormat().format(value)}`;
};