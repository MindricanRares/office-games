const initialState={
    entries:[

    ],
    todaysWinner:[
        {

        }
    ],
    currentTime:''    
};

//TODO: Refactor it
let calculateWinner= (entries,arrivalTime)=>{
    let arrivalDate=createDate(arrivalTime);
    let entriesWithDate=[]
    entries.forEach(function(entry){
        entriesWithDate.push({name:entry.name,time:createDate(entry.time)});        
    });
    let entriesWithTimeDifference=[];
    entriesWithDate.forEach(function(entry){
        entriesWithTimeDifference.push({
            name:entry.name,
            time:entry.time,
            difference:Math.abs(entry.time-arrivalDate)
        })
    });

    entriesWithTimeDifference.sort(function(a,b){
        if (a.difference < b.difference)
            return -1;
        if (a.difference > b.difference)
            return 1;
        return 0;
    });
    return {
        name:entriesWithTimeDifference[0].name,
        time:entriesWithTimeDifference[0].time.toString().split(' ')[4]
    }
}

//TODO: refactor it
let createDate = (time) =>{
    const today=new Date();
    const todaysYear=today.getFullYear();
    const todaysMonth=today.getMonth();
    const todayDay=today.getDay();
    const entryHour=time.split(':')[0];
    const entryMin=time.split(':')[1];
    let day=new Date(todaysYear,todaysMonth,todayDay,entryHour,entryMin);
    return day;
}

export default function (state=initialState,action) {
    switch (action.type) {
        case 'NEW_ENTRY':
            return{
                ...state,
                entries:[...state.entries,{
                    name:action.payload.name,
                    time:action.payload.time
                }]
            };
        case 'RADU_ARRIVED':
            debugger
            const winner=calculateWinner(state.entries,action.payload)
            debugger;
            return {
                ...state,
                todaysWinner:[...state.todaysWinner,{
                    name:winner.name,
                    time:winner.time,
                    actualTime:action.payload
                   
                }]};
        case 'CHECK_GAME':
            const currentTime=new Date().getHours()+":"+new Date().getMinutes()
            console.log(currentTime);
            return {
                ...state,
                currentTime:currentTime
            };
                
        default:
        return state;
    }
}
