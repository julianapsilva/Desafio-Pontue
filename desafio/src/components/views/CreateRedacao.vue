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
      @click.prevent="createRedacao()"
    />
  </form>
</div>

</template>

<script>
import api from "@/config/services"
export default {
  name: "CreateRedacao",
  

  methods: {
    createRedacao() {
      /*const form = new FormData()
      const file = this.$refs.file.files
      form.append(file[0].name, file[0])
      console.log("FORM: ", form)
      const body = {}
      body.file = file[0]
      body.name = file[0].name
      console.log("BODY: ", file[0])

*/

      var formData = new FormData();
var imagefile = this.$refs.file
formData.append("file[]", imagefile.files[0]);
console.log( imagefile.files[0])
console.log(formData)

const response = api.post('/alunos/redacao/create', formData)
response.then(alert('SUCESS'))
response.catch(error => console.log("ERR: ", error.response.data) )

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
#file{
  margin-left: 100px
}


</style>
