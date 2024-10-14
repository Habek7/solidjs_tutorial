import { createSignal, mergeProps } from "solid-js";


export default function Pvp() {
    const [name, setName] = createSignal();

    return(
        <>
            <Local greeting="Dobar dan" name="Pero" />
            <Local name="Jozo" />
            <Local greeting="Bogdaj" />
            <Local name={name()} />

            <button onClick={() => setName("Jura")}>Promijeni</button>
        </>
    );
}

function Local(props) {
    const merged = mergeProps({gretting: "Bok", name: "Ivan"}, props);

    //const merged = {...{name:"Ivan", gretting: "Bok"}, ... props, };

    return(
        <h1>
            {merged.gretting} {merged.name}
        </h1>
    )
}