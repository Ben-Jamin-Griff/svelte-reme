<script>
        import pell from 'pell'
        import { createEventDispatcher, onMount } from 'svelte'
        const dispatch = createEventDispatcher()

        export let project = {}
        export let buttonText

        onMount(() => {
  const editor = pell.init({
    element: document.getElementById('editor'),
    onChange: html => project.description = html,
    defaultParagraphSeparator: 'p',
    styleWithCSS: false,
    actions: [
      {
      name: 'bold',
      icon: '<div style="background-color:black;">b</div>',
      },
      {
      name: 'underline',
      icon: '<div style="background-color:black;">u</div>',
      },
      {
        name: 'italic',
        icon: '<div style="background-color:black;">i</div>',
        result: () => pell.exec('italic')
      },
    ]
  })
  editor.content.innerHTML = project.description || ''

  document.querySelector('#fileUpload').addEventListener('change', event => {
  handleImageUpload(event)
})
})

  const submit = () => {
                dispatch('submit', {
                        'project': project
                })
  }


  const handleImageUpload = event => {
  const files = event.target.files
  const formData = new FormData()
  formData.append('image', files[0])

  fetch('/user/image', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    project.picture = data.path
  })
  .catch(error => {
    console.error(error)
  })
}

</script>

<style>
        form p {
                display: grid;
        }
</style>

  <form on:submit|preventDefault={submit}>
          <p>
            <label>University</label>
            <input required bind:value={project.university} type="text" placeholder="University" />
          </p>
          <p>
            <label>Project title</label>
            <input required bind:value={project.title} type="text" placeholder="Project title" />
          </p>
          <div>
            <label>House description</label>
            <div id="editor"></div>
          </div>
          <p>
            <label>Project picture URL</label>
            <input type="file" id="fileUpload" accept="image/*" />
                {#if project.picture}
                    <img src={project.picture} width="200" alt="Project image" />
                {/if}
          </p>
          <button>{buttonText}</button>
  </form>

