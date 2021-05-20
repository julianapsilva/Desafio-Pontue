<template>
  <div class= "update-container">
    <h2>Atualizar redação</h2>
    <form class="update-redacao">
      <label for="file"></label>
      <input type="file" name="file" id="file" ref="file" required />
      <input
        class="btn"
        type="button"
        value="Atualizar arquivo"
        @click.prevent="update()"
      />
    </form>
  </div>
</template>

<script>
import api from "@/config/services";
export default {
  name: "Update-Redacao",
  props: ["id"],

  methods: {
    async update() {
      let updated = false;
      let res = await api.get(`/redacao/${this.id}`);
      const url = res.data.data.urls[0].id;
      console.log(res.data.data);

      var formData = new FormData();
      var imagefile = this.$refs.file;
      formData.append("urls[]", url);
      formData.append("file[]", imagefile.files[0]);

      const response = api.post(`/redacao/${this.id}/update`, formData);
      response.then((updated = true));
      response.catch((error) => console.log("ERR: ", error.response.data));

      if (updated) {
        alert("Redação atualizada com sucesso! Você será redirecionado.");
          this.$router.push({ name: "redacao", params: { id: this.id } });
      }
    },
  },
};
</script>

<style scoped>
.update-redacao {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
#file {
  margin-left: 100px;
  margin-bottom: 10px;
}

@media (max-width: 500px){
  .update-container{
    margin-top: -200px;
  }

}
</style>
