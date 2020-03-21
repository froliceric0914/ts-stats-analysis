export const dateStringToDate = (dateString: string) => {
    const dateParse = dateString
        .split('/')
        .map((value: string): number => parseInt(value));
    return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
