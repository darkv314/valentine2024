import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const Cancun = () => {
    const countDownDate = new Date("Mar 7, 2025 00:00:00").getTime();
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(setTime());
    }, []);

    const setTime = () => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        setMessage(time);
        return time;
    }


    setInterval(setTime, 1000);

    return (
        <div className="flex flex-col gap-8 items-center justify-center bg-slate-100 rounded-lg p-5">
            <h1 className="text-4xl">There is...</h1>
            <h1 className="text-6xl">{message}</h1>
            <h1 className="text-4xl">left :3</h1>
            <p className="text-2xl">💜🩷🧡💚🩵💟<span className="text-sm">Awi :3</span>💟🩵💚🧡🩷💜</p>
        </div>
    )
}

export const Route = createFileRoute('/cancun')({
    component: Cancun
})