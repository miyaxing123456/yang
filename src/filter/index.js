
export default {
    filterPrice: (price) => {
        price = Number(price)
        return price.toFixed(2)
    },
    filterTime: (time) => {
        time=Number(time)
        let date = new Date(time);
        let year = date.getFullYear()
        let month = (date.getMonth() + 1 + "").padStart(2, '0');
        let day = (date.getDate() + "").padStart(2, "0")
        let hour = (date.getHours() + "").padStart(2, "0")
        let minutes = (date.getMinutes() + "").padStart(2, '0')
        let seconds = (date.getSeconds() + "").padStart(2, "0");
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
    }
}