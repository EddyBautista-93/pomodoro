import { useRef, useState, useEffect } from "react";

const Timer = () => {
// // useref because we are dealing with intervals
// // useRef() -- returns a mutable ref object who's current prop is
// // initialized to the passed argument. The returned object 
// // will persist for the full lifetime of the component.

// const Ref = useRef(null);

// //set the state of out timer
// const [timer, setTimer] = useState('00:00:00');

// const getTimeRemaining = (e) =>{
//     const total = Date.parse(e) - Date.parse(new Date());
//     const secs = Math.floor((total / 1000) % 60);
//     const mins = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / 1000 * 60 * 60) % 24);
//     console.log()
//     return {
//         total, hours, mins, secs
//     };
// }

// const startTimer = (e) => {
//     let { total ,hours ,mins,secs } = getTimeRemaining(e);
//     if(total >= 0){
//     // update timer
//     setTimer(
//         (hours > 9 ? hours : '0' + hours) + ':' +
//         (mins > 9 ? mins : '0' + mins) + ':'
//         + (secs > 9 ? secs : '0' + secs)
//     )
//     }
// }

// const clearTimer = (e) => {
//     setTimer('00:00:00');

//     if (Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//         startTimer(e);
//     }, 1000)
//     Ref.current = id;
// }

// const getDeadTime = () => {
//     let deadline = new Date();

//     deadline.setSeconds(deadline.getSeconds() + 1500);
//     return deadline;
// }
// useEffect(() => {
//     clearTimer(getDeadTime());
// }, []);

// const onClickReset = () => {
//     clearTimer(getDeadTime());
// }


    return (
        <div>
            <main>Test</main>
            
        </div>
      );
}
 
export default Timer;