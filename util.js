/**
 *
 * @param date
 * @returns {`${string}${string}`}
 */
export default function getDaySuffix(date) {

        let day = date;
        let suffix = getSuffix(day)
        return `${day}${suffix}`

    function getSuffix(day) {
        if (day >= 11 && day <= 13) {
            return `th`
        }
        switch (day % 10) {
            case 1 :
                return `st`;
            case 2 :
                return `nd`;
            case 3:
                return 'rd'
            default:
                return 'th';
        }
    }
}