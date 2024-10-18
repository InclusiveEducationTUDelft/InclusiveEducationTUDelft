import styles from "./InclusiveButton.module.css";

interface InclusiveButtonProps {
    alignSelf?: string;
    href?: string;
    text?: string;
    marginTop?: string;
    target?: string;
}

function InclusiveButton(props: InclusiveButtonProps) {
    return <>
        <button className={styles.inclusiveButton} style={{
            alignSelf: !props.alignSelf ? "flexEnd" : props.alignSelf,
            marginTop: !props.marginTop ? "0" : props.marginTop
        }}><a
            className={styles.inclusiveTag}
            href={!props.href ? "" : props.href}
            target={!props.target ? "" : props.target}
        >{props.text ? props.text : "Read More"}
            </a>
        </button >
    </>
}

export default InclusiveButton;