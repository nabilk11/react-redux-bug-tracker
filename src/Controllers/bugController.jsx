import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({
        _id:23456789,
        name:"crash on load",
        details:"the app crashed after 3 seocnds of loading",
        steps: "open application and crash occurs on load",
        version:"v1.0",
        assigned: "Nabil Khan",
        creator: "Nick Khan",
        priority:1,
        time:"23:38",
    }))
    data.push(new bugModel({
        _id:23456789,
        name:"does not load",
        details:"the app doesnt load at all",
        steps: "open application does not load",
        version:"v1.0",
        assigned: "Nabil Khan",
        creator: "Nick Khan",
        priority:3,
        time:"15:25",
    }))
    let sortedData = data.sort((a, b) => {
        return a.priority - b.priority})
        return sortedData;
}