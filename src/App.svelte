<script>
  import { onMount } from "svelte";
  import Logo from "./assets/logo.svg";

  //   import {
  //     ChevronLeft,
  //     ChevronRight,
  //     DarkMode,
  //     GitHub,
  //     Menu
  //   } from "/icons/index.js";

  import { Readme } from "/book/index.js";

  let count = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
  }
  .App code {
    background: #0002;
    padding: 4px 8px;
    border-radius: 4px;
  }
  .App p {
    margin: 0.4rem;
  }

  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  .App-link {
    color: #ff3e00;
  }
</style>

<div class="App">
  <header class="App-header">
    <Logo />
    <p>
      Edit
      <code>src/App.svelte</code>
      and save to reload.
    </p>
    <p>
      Page has been open for
      <code>{count}</code>
      seconds.
    </p>
    <p>
      <a
        class="App-link"
        href="https://svelte.dev"
        target="_blank"
        rel="noopener noreferrer">
        Learn Svelte
      </a>
    </p>
  </header>
  <Readme />
</div>
