import {FunctionComponent, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import '../styles/Page.css'

const hostname = "http://localhost:8000"


const Home: FunctionComponent<{ name: string }> = ({name}) => {
    const [text, setText] = useState<string>();


    const getHitCount = () => {
        axios
            .get<string>(`${hostname}/${name}`)
            .then((res: AxiosResponse<string>) => setText(res.data))
            .catch((reason: string) => console.log(`Cannot connect to backend on ${hostname}. ${reason}`))
    };

    useEffect(getHitCount, [name]);

    return (
        <div className={"body"}>{text}</div>
    )
};

export default Home;