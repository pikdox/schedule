<script lang="ts">
    import { fly } from 'svelte/transition';
  
    export let author: string;
    export let text: string;
  </script>
  
  <div class="bubble {author}" transition:fly={{ duration: 700, y: author === 'sys' ? -500 : 500, opacity: 0 }}>
    <label for="p" hidden={author === 'sys'}>{author}</label>
    <p>{text}</p>
  </div>
  
  <style scoped>
    .bubble {
      background-color: #ccaaff;
      padding: 15px 10px;
      border-radius: 10px;
    }
    .bubble.sys {
      background-color: #ddd;
      text-align: center;
    }
    .bubble.You {
      background-color: #aaccff;
      text-align: right;
    }
    .bubble label {
      color: #555;
      font-size: 1rem;
    }
    .bubble p {
      color: #222;
      font-size: 1.5rem;
      margin: 5px 0 0 0;
    }
  </style>
  