const dayjs = require('dayjs')

const formatDate = function(date) {
    return dayjs(date).format("DD MMM YYYY")
};

module.exports = formatDate;