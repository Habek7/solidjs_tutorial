import { createSignal, For, Index} from "solid-js";

export default function Flow() {
    const [users, SetUsers] = createSignal([
        { id: "42198421098420918", name: "Pero Perić"},
        { id: "421421654z6565122", name: "Ana Anić"},
        { id: "84721809742091791", name: "Ivo Ivić"},
        { id: "53109283412907421", name: "Marko Marić"},
    ]);
        

    return(
        <div>
            <ul>
                <For each={users()}>
                    {
                        (user, i) => 
                        <li>
                            /{i}/ {user.id}: {user.name}
                        </li>
                    } 
                </For>
            </ul>
            <ul>
                <Index each={users()}>
                    {
                        (user, i) => 
                        <li>
                            /{i}/ {user().id}: {user().name}
                        </li>
                    } 
                </Index>
            </ul>
        </div>
    )
}