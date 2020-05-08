//action creators

//book a car
// export const bookCar = (car) => {
//     //return action
//     return {
//         type: 'BOOK_CAR',
//         payload: car
//     };
// };

//car details
// export const carDetails = (car) => {
//     //return action
//     return {
//         type: 'CAR_DETAILS',
//         payload: car
//     };
// };

//selected car
export const selectedCar = (car) => {
    //return action
    return {
        type: 'CAR_SELECTED',
        payload: car
    };
};

export const bookCar = (details) => {
    return {
        type: 'BOOK_CAR',
        payload: details
    }
}