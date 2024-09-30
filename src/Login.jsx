import { createSignal, Show } from "solid-js"

export default function Login() {
    const [loggedin, SetLoggedin] = createSignal(false);
    const toggle = () => SetLoggedin(!loggedin());

    return (
        <div>
            <Show when={loggedin()}
                fallback = {<button onclick={toggle}> Log in</button>}></Show>
                <button onclick={toggle}>Log out</button>
        </div>
    );
}