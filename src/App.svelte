<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  const name = 'Todos';
  let todos = [];
  let value = '';
  // $: console.log(value);
  // $: console.log(todos);

  const fetchTodos = () => {
    return Promise.resolve([
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ]);
  };

  const addTodo = ({ keyCode, target }) => {
    if (keyCode !== 13) return;
    const content = target.value;
    todos = [...todos, { id: generateId(), content, completed: false }];
    value = '';
  };

  const removeTodo = id => () => {
    todos = todos.filter(todo => todo.id !== id);
  };

  const generateId = () => Math.max(...todos.map(({ id }) => id)) + 1;

  onMount(async () => {
    console.log('the component has mounted');
    todos = await fetchTodos();
    return () => console.log('the component has unmounted');
  });
</script>

<main>
  <input type="text" placeholder="Enter Todo" bind:value on:keyup={addTodo} />
  <ul>
    {#each todos as { id, content, completed } (id)}
      <li {id} transition:fade>
        <input type="checkbox" bind:checked={completed} />
        <span class:completed>{content}</span>
        <button on:click={removeTodo(id)}>X</button>
      </li>
    {:else}
      <p>No tasks today!</p>
    {/each}
  </ul>
  <pre>{JSON.stringify(todos, null, 2)}</pre>
</main>

<style>
	main {
		color: #333;
		max-width: 300px;
		margin: 0 auto;
	}
  ul {
    padding-left: 0;
  }
  li {
		position: relative;
		list-style: none;
		padding: 6px 10px;
		border-bottom: 1px solid #ddd;
		line-height: 2.5em;
	}
	li input[type=checkbox] {
		margin: 0 10px 0 0;
	}
	li button {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate3d(0, -50%, 0);
	}
  .completed {
    text-decoration: line-through;
  }
  /* Tree Shaking */
  .completed-x {
    text-decoration: line-through;
  }
</style>
