export const raduArrived = () => {
    const arrivalDate =new Date(); 
    const arrivalTime=arrivalDate.getHours().toLocaleString()+':'+arrivalDate.getMinutes().toLocaleString();
    console.log(arrivalTime);
    return {
        type: 'RADU_ARRIVED',
        payload: arrivalTime
    }
};
