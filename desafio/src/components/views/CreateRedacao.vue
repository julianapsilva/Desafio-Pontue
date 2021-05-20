<template>
  <div class="create-container">
    <div>
      <h2>Adicionar uma nova redação</h2>
    </div>

    <form class="create-redacao">
      <label for="file"></label>
      <input type="file" name="file" id="file" ref="file" />
      <input
        class="btn"
        type="submit"
        value="Adicionar nova redação"
        @click.prevent="createRedacao()"
      />
    </form>
  </div>
</template>

<script>
import api from "@/config/services";
//import {required} from 'vuelidate/lib/validators';
export default {
  name: "CreateRedacao",
  // data: function() {
  //   return {
  //     file = null

  //   }
  // },
  // validations: {

  // },

  methods: {
    createRedacao() {
      const formData = new FormData();
      const imagefile = this.$refs.file;
      formData.append("file[]", imagefile.files[0]);
      console.log(imagefile.files[0]);
      console.log(formData);

      const response = api.post("/alunos/redacao/create", formData);
      response.then(
        function (){
          alert("Redação enviada com sucesso! Você será redirecionado.")
        setTimeout(function() {
          window.location.href = `/`;
        }, 2000)
        }  );
      response.catch((error) => console.log("ERR: ", error.response.data));
    },
  },
};
</script>

<style>
.create-container{
  margin-top: -300px;
}
h2 {
  margin-bottom: 40px;
  text-align: center;
}
.create-redacao {
  padding-top: 40px;
  padding-bottom: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  margin-top: 20px;
}
#file {
  margin-left: 100px;
}

@media (max-width:500px){
  h2{
    margin-top: 10px;
    font-size: 16px;
  }
}

</style>
