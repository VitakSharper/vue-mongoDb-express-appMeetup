import moment from "moment";

export default function formatDate(value, formatType = 'LL') {
    if (!value) return '';
    return moment(value).format(formatType)
}



