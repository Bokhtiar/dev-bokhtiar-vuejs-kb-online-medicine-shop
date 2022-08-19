<template>
    <section>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row">
                    <div class="card">
                        <div class="reg-title">
                            Login
                        </div> 
                        <div class="card-body my-4">
                            <form class="row" action=""  @submit.prevent="login" >
                                <div class="col-md-12 col-lg-12 col-sm-12">
                                    <label for="">E-mail <span class="text-danger">*</span></label>
                                    <input type="email" v-model="email" name="email" id="" class="form-control" placeholder="email">
                                </div>

                                <div class="col-md-12 col-lg-12 col-sm-12">
                                    <label for="">Password <span class="text-danger">*</span></label>
                                    <input type="password" v-model="password" name="password" id="" class="form-control" placeholder="password">
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 text-center my-4">
                                    <input type="submit" class="btn btn-danger btn-submit" name="" value="Login" id="">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },

    /*all methods*/
    methods: {
        login(e){
            e.preventDefault()

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData()
            formData.append('email', this.email)
            formData.append('password', this.password)

            axios.post('/admin/login', formData, config).then((res)=> {
                localStorage.setItem('token', res.data.token);
                this.$router.push("/");
                console.log('Login Successfully')
            }).catch((error) =>{
                console.log(error.response.data)
            })  
        }
    }
}
</script>