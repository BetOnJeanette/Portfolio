import { createSignal, onMount } from "solid-js"
import styles from "./gridCell.module.css"

interface IHeaderCellProps{
    offset: number
}

export default function HeaderCell({offset: offsetPos}: IHeaderCellProps){
    const [classes, setClasses] = createSignal<string[]>([styles.GridCellVisible, styles.GridCellClosed])
    const spinTime = 125; // current spin animation time is 125ms
    const howManySpinCycles = 2
    onMount(() => {
        setTimeout(() => {
            setClasses([styles.GridCellVisible])
        }, spinTime * offsetPos / howManySpinCycles)
    })

    return (
        <div class={styles.GridCell}>
            <div class={classes().join(" ")}></div>
        </div>
    )
}