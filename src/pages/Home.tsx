import {FunctionComponent, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import '../styles/Page.css'

const hostname = "http://localhost:8000"


const Home: FunctionComponent<{ name: string }> = ({name}) => {
    const [text, setText] = useState<string>();

    interface Response {
        message: string,
    }

    const getHitCount = () => {
        axios
            .get<Response>(`${hostname}/${name}`)
            .then((res: AxiosResponse<Response>) => setText(res.data.message))
            .catch((reason: string) => console.log(`Cannot connect to backend on ${hostname}. ${reason}`))
    };

    useEffect(getHitCount, [name]);

    return (
        <div className={"body"}>{text}</div>
    )
};

export default Home;