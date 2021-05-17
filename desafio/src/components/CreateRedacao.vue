<template>
<div>
  <div>
      <h2>Adicionar uma nova redação</h2>
</div>

  <form class="create-redacao">

    <label for="file"></label>
    <input type="file" name="file" id="file" ref="file" />
    <input
      class="btn"
      type="button"
      value="Adicionar nova redação"
      @click.prevent="createRedacao"
    />
  </form>
</div>

</template>

<script>
import axios from "axios";
export default {
  name: "CreateRedacao",

  methods: {
    createRedacao() {
      const form = new FormData()
      const file = this.$refs.file.files
      console.log(file[0])
      form.append(file[0].name, file[0])

      //console.log(document.getElementById('file').files[0])

      axios.post(
        "https://desafio.pontue.com.br/alunos/redacao/create",
        form
      );
    },
  },
};
</script>

<style>
h2{
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
}
.create-redacao{
  padding-top: 40px;
  padding-bottom: 40px;
    border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  margin-top: 20px;
}


</style>
