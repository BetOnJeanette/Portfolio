import { Repeat } from "@solid-primitives/range";
import { createSignal } from "solid-js";
import HeaderCell from "./HeaderCell";
import styles from "./HeaderBackground.module.css"

const columnCount = 16;

function getCellCount(){
    const widthOfColumn = columnCount / window.innerWidth;
    return columnCount * Math.ceil(window.innerHeight * widthOfColumn);
}

export default function HeaderBackground() {
    const [cellCount, setCellCount] = createSignal<number>(getCellCount());
    return (
        <div class={styles.HeaderBackground}>
            <Repeat times={cellCount()}>{ n => <HeaderCell offset={Math.floor(n / columnCount) + (n % columnCount)}/>}</Repeat>
        </div>
    )
}