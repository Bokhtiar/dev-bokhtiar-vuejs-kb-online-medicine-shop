<template>
    <section>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row">
                    <div class="card">
                        <div class="reg-title">
                            Registration
                        </div> 
                        <div class="card-body my-4">
                            <form class="row" action="" @submit.prevent="registration">
                                <div class="col-md-6 col-lg-6 col-sm-12">
                                    <label for="">First Name <span class="text-danger">*</span></label>
                                    <input type="text" v-model="f_name" name="f_name" id="" class="form-control" placeholder="first name">
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12">
                                    <label for="">Last Name <span class="text-danger">*</span></label>
                                    <input type="text" v-model="l_name" name="l_name" id="" class="form-control" placeholder="last name">
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12">
                                    <label for="">E-mail <span class="text-danger">*</span></label>
                                    <input type="email" v-model="email" name="email" id="" class="form-control" placeholder="email">
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12">
                                    <label for="">Profile Image <span class="text-danger">*</span></label>
                                    <input type="file" v-on:change="onImageChange" name="image" id="" class="form-control">
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12">
                                    <label for="">Password <span class="text-danger">*</span></label>
                                    <input type="password" v-model="password" name="password" id="" class="form-control" placeholder="password">
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 text-center my-4">
                                    <input type="submit" class="btn btn-danger btn-submit" name="" value="Registration" id="">
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
        return{
            f_name: '',
            l_name: '',
            email: '',
            image: '',
            password: '',
        }
    },
    methods: {
        onImageChange(e){
            console.log(e.target.files[0]);
            this.image = e.target.files[0];
        },

        registration(e){
            e.preventDefault();
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData()
                formData.append('f_name', this.f_name)
                formData.append('l_name', this.l_name)
                formData.append('email', this.email)
                formData.append('password', this.password)
                formData.append('image', this.image)

            axios.post('/admin/register', formData, config).then((response)=> {
                console.log(response.data)
            }).catch((error)=> {
                console.log(error.response.data)
            })
                
        }

    }
}
</script>
