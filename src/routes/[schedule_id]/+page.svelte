<script lang="ts">
  import { onMount } from 'svelte';
  import { executarRoteiro, type Roteiro } from '$lib/func/roteiro';
  import type { PageData } from './$types';
  import Message from './Message.svelte';

  export let data: PageData;
  
  let chatNode: HTMLDivElement;
  let input_data = "";

  let chat = {
    id: data.schedule_id,
    msgs: [] as Array<{author: string, text: string}>,
  };

  const scrollToBottom = () => {
    chatNode.scroll({ top: chatNode.scrollHeight, behavior: 'smooth' });
  };

  const addMessage = (author: string, text: string) => {
    if (text.trim()) {
      chat.msgs = [...chat.msgs, { author, text }];
      input_data = "";
      scrollToBottom();
    }
  };

  const roteiro: Roteiro[] = [
    [() => addMessage("sys", "Sistema Foi Carregado"), 100],
    [() => addMessage("sys", "Você Conectou"), 500],
    [() => addMessage("sys", "Uma nova conexão foi detectada"), 1000],
    [() => addMessage("Vite", "Olá"), 2000],
    [() => addMessage("Vite", "Seja bem vindo"), 3000],
    [() => addMessage("Vite", "Essa é a agenda online"), 2000],
    [() => addMessage("Vite", "e eu sou Vite"), 2000],
    [() => addMessage("sys", "Um novo processo de agendamento foi aberto"), 500],
    [() => addMessage("Vite", "Qual é o seu nome?"), 2000],
  ];

  onMount(() => {
    executarRoteiro(roteiro);
  });
</script>

<div class="page">
  <header>
    <h1>A-ID: {chat.id}</h1>
  </header>
  <div class="chat" bind:this={chatNode}>
    {#each chat.msgs as {author, text}, index (index)}
      <Message {author} {text} />
    {/each}
  </div>
  <div class="input-area">
    <input type="text" bind:value={input_data} placeholder="Digite sua mensagem">
    <button on:click={() => addMessage("You", input_data)}>Enviar</button>
  </div>
</div>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  header {
    background-color: #5555ff;
    color: white;
    padding: 20px;
    text-align: center;
  }
  header h1 {
    margin: 0;
    font-size: 2rem;
  }
  .chat {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-area {
    display: flex;
    padding: 10px;
    background-color: #ccc;
  }
  .input-area input {
    flex: 1;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
  }
  .input-area button {
    padding: 10px 20px;
    margin-left: 10px;
    background-color: #5555ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .input-area button:hover {
    background-color: #3333ff;
  }
</style>
