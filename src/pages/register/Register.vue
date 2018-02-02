<template>
    <div class="hello">
        <register-component
        :errorMessage="errorMessage"
        v-on:registerCredentials="submit"
        passwordPattern=".{2,20}" 
        passwordMessage="Greater than 1 and less than 21"
        ></register-component>
    </div>
</template>

<script>
    import RegisterComponent from '../../components/register/Register.vue'
    export default {
        name: 'hello',
        components: {
            RegisterComponent,
            'register-component': RegisterComponent
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
                // this.$http.post('//canserve-api.stratech.co.za/register', request)
                //     .then(response => {
                //         console.log(response);
                //         this.profile = response.body.data;
                //         this.$router.push("/kanbanExample/12");
                //     }, error => {
                //         console.log(error);
                //     }
                // );
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
