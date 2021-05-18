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
      let res = await api.get(
        `/redacao/${this.id}` );
      const url = res.data.data.urls[0].id;

      var formData = new FormData();
      var imagefile = this.$refs.file;
      formData.append("urls[]",url);
      formData.append("file[]", imagefile.files[0])
      const response = api.post(`/redacao/${this.id}/update`, formData)
        response.then(alert("SUCESS"));
          response.catch(error => console.log("ERR: ", error.response.data) )
    },
  },
};
</script>

<style scoped>
.update-redacao{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

    padding-top: 40px;
  padding-bottom: 40px;
    border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0 1px 5px rgba(0,0,0,0.15);
}
#file{
  margin-left: 100px;
  margin-bottom: 10px;
}


</style>
