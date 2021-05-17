<template>
<div>
      <h2>Atualizar redação</h2>
  <form class="update-redacao">
    <label for="file"></label>
    <input type="file" name="file" id="file" ref="file" />
    <input
      class="btn"
      type="button"
      value="Atualizar arquivo"
      @click.prevent="update"
    />
  </form>
</div>
  
</template>

<script>
import axios from "axios"
export default {
  name: 'Update-Redacao',
  methods: {
    update(){
        axios.post(`https://desafio.pontue.com.br/redacao/${this.id}/update`)
    }

  }




}
</script>

<style>

</style>