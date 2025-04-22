import styles from "./Code.module.css";

interface Props {
  children: string;
}

function deindent(code: string) {
  const minimumIndent = code
    .split("\n")
    .map((line) => line.search(/\S/))
    .reduce((accum: number, current: number) =>
      accum < current ? accum : current,
    );
  return code.split("\n").map((line) => `${line.substring(minimumIndent)}\n`);
}

export default function Code({ children }: Props) {
  // We are likely using template literal with empty first and last line.
  // Clean this up to prevent code block vertical margins from blowing out.
  const formattedCode = children.replace(/^\n/, "").trimEnd();
  return (
    <div className={styles.root}>
      <pre>{deindent(formattedCode)}</pre>
    </div>
  );
}
