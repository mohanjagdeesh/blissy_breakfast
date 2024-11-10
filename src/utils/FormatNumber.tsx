export const formatNumberToIndianFormat = (cost: number) => {
    return `₹ ${cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /-`;
  };
  