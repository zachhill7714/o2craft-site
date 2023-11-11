import { useState } from 'react';


function Login() {
    const [data, setData] = useState("");

    async function submit() {
        const url = "https://rqkyd6clquruvc3grd6f62fvie0urero.lambda-url.us-east-1.on.aws/";
        const method = "POST";
        const headers = {"Content-Type": "application/json"};
        const body = JSON.stringify({username:"Kuroko"});
        const response = await fetch(url, {method: method, headers: headers, body: body});
        const responseData = await response.json();
        setData(responseData);
    }

    return (
        <>
            <button onClick={submit}>Login</button>
            <p>{data}</p>
        </>
    );
}

export default Login;