import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import "virtual:uno.css";
import "tailwindcss-preflight/preflight.css";

const styles = ":uno: h-screen w-screen";

export default component$(() => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body class={styles}>hello world</body>
    </>
  );
});
