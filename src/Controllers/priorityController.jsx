

const colors = ["crimson", "orange", "cornflowerblue"];

export default (priority)=> {
    const level = ["High", "Medium", "Low"]
    return {
        level:(level[priority-1]),
        color:colors[priority-1],
    }
}