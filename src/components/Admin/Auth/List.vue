<template>
  <section class="container">
    <div class="card">
      <div class="card-header">
        <h3>Admin list</h3>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">F Name</th>
              <th scope="col">L Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(admin, index) in admins" :key="admin._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ admin.f_name }}</td>
              <td>{{ admin.l_name}}</td>
              <td>{{ admin.email}}</td>
              <td>
                  <a href="">Edit</a>
                  <button class="btn btn-sm btn-danger" @click="admindelete(admin._id)" >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      admins: [],
    };
  },

  methods: {
    /**list of admin */
    adminList() {
      axios
        .get("/admin")
        .then((response) => {
          console.log(response.data.data);
          this.admins = response.data.data
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /**delete of admin */
    admindelete(id){
      axios.delete(`/admin/${id}`).then((res) => {
        console.log(res)
        this.adminList()
      }).catch((error)=> {
        console.log(error)
      })
    }
    
  },
  mounted() {
    this.adminList();
  },
};
</script>