<template>
    <div class="hello">
        <login-component
        :errorMessage="errorMessage"
        v-on:loginCredentials="submit"
        passwordPattern=".{2,20}" 
        passwordMessage="Greater than 1 and less than 21"
        ></login-component>
    </div>
</template>

<script>
    import LoginComponent from '../../components/login/Login.vue'
    export default {
        name: 'hello',
        components: {
            LoginComponent,
            'login-component': LoginComponent
        },
        data () {
            return {
                errorMessage: ''
            }
        },
        methods: {
            submit: function(event) {
                let request = event;
                console.log(request);
                this.$http.post('//canserve-api.stratech.co.za/login', request)
                    .then(response => {
                        console.log(response);
                        this.profile = response.body.data;
                        this.$router.push("/kanbanExample/12");
                    }, error => {
                        console.log(error);
                    }
                );
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
