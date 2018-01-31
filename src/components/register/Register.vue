<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Register</h3>
                    </div>
                    <div class="panel-body">
                        <form @submit.prevent="submitRegister">
                            <div class="form-group has-feedback" v-bind:class="[firstNameSuccessClass]">
                                <label for="firstName" class="control-label sr-only">Add your First Name.</label>
                                <input ref="txtFirstName" type="text" class="form-control" @input="checkFirstNameValidation" id="firstName" placeholder="First Name" autofocus required>
                                <span v-bind:class="[firstNameIconClass]"></span>
                            </div>
                            <div class="form-group has-feedback" v-bind:class="[lastNameSuccessClass]">
                                <label for="lastName" class="control-label sr-only">Add your Last Name.</label>
                                <input ref="txtLastName" type="text" class="form-control" @input="checkLastNameValidation" id="lastName" placeholder="Last Name" required>
                                <span v-bind:class="[lastNameIconClass]"></span>
                            </div>
                            <div class="form-group has-feedback" v-bind:class="[emailSuccessClass]">
                                <label for="email" class="control-label sr-only">Add your email address.</label>
                                <input ref="txtEmail" type="email" class="form-control" @input="checkEmailValidation" id="email" placeholder="Email" required>
                                <span v-bind:class="[emailIconClass]"></span>
                            </div>
                            <div class="form-group has-feedback" v-bind:class="[mobileSuccessClass]">
                                <label for="mobile" class="control-label sr-only">Add your Mobile Number.</label>
                                <input ref="txtMobile" type="number" class="form-control" @input="checkMobileValidation" id="mobile" placeholder="Mobile Number" required>
                                <span v-bind:class="[mobileIconClass]"></span>
                            </div>
                            <div class="form-group has-feedback" v-bind:class="[passwordSuccessClass]">
                                <label for="password" class="control-label sr-only">Add your password.</label>
                                <input ref="txtPassword" type="password" class="form-control" @input="checkPasswordValidation" id="password" placeholder="Password" required :pattern="passwordPattern" aria-describedby="passwordHelpSpan">
                                <span v-bind:class="[passwordIconClass]"></span>
                                <small id="passwordHelpSpan">{{ passwordMessage }}</small>
                            </div>
                            <div v-if="errorMessage" class="text-center text-danger">{{ errorMessage }}</div>
                            <div>
                                <button :disabled="submitBtnDisabled" class="btn btn-primary pull-right">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
  export default {
    name: 'RegisterComponent',
    props: {
      errorMessage: {
        type: String,
        required: false,
        default: ''
      },
      passwordMessage: {
        type: String,
        required: false,
        default: "Password length must be greater than 4 but not longer than 10"
      },
      passwordPattern: {
        type: String,
        required: false,
        default: '.{5,10}'
      }
    },
    data() {
      return {
        emailSuccessClass: '',
        mobileSuccessClass: '',
        firstNameSuccessClass: '',
        lastNameSuccessClass: '',
        passwordSuccessClass: '',
        emailIconClass: '',
        mobileIconClass: '',
        firstNameIconClass: '',
        lastNameIconClass: '',
        passwordIconClass: '',
        submitBtnDisabled: true,
        rememberMe: false
      }
    },
    mounted: function () {
    },
    methods: {
      checkFirstNameValidation: function () {
        if (this.$refs.txtFirstName.checkValidity()) {
          this.firstNameSuccessClass = 'has-success'
          this.firstNameIconClass = 'glyphicon glyphicon-ok form-control-feedback'
          if(this.$refs.txtPassword.checkValidity()) this.submitBtnDisabled = false
        } else {
          this.firstNameSuccessClass = 'has-error'
          this.firstNameIconClass = 'glyphicon glyphicon-remove form-control-feedback'
          this.submitBtnDisabled = true
        }
      },
      checkLastNameValidation: function () {
        if (this.$refs.txtLastName.checkValidity()) {
          this.lastNameSuccessClass = 'has-success'
          this.lastNameIconClass = 'glyphicon glyphicon-ok form-control-feedback'
          if(this.$refs.txtPassword.checkValidity()) this.submitBtnDisabled = false
        } else {
          this.lastNameSuccessClass = 'has-error'
          this.lastNameIconClass = 'glyphicon glyphicon-remove form-control-feedback'
          this.submitBtnDisabled = true
        }
      },
      checkEmailValidation: function () {
        if (this.$refs.txtEmail.checkValidity()) {
          this.emailSuccessClass = 'has-success'
          this.emailIconClass = 'glyphicon glyphicon-ok form-control-feedback'
          if(this.$refs.txtPassword.checkValidity()) this.submitBtnDisabled = false
        } else {
          this.emailSuccessClass = 'has-error'
          this.emailIconClass = 'glyphicon glyphicon-remove form-control-feedback'
          this.submitBtnDisabled = true
        }
      },
      checkMobileValidation: function () {
        if (this.$refs.txtMobile.checkValidity()) {
          this.mobileSuccessClass = 'has-success'
          this.mobileIconClass = 'glyphicon glyphicon-ok form-control-feedback'
          if(this.$refs.txtPassword.checkValidity()) this.submitBtnDisabled = false
        } else {
          this.mobileSuccessClass = 'has-error'
          this.mobileIconClass = 'glyphicon glyphicon-remove form-control-feedback'
          this.submitBtnDisabled = true
        }
      },
      checkPasswordValidation: function () {
        if (this.$refs.txtPassword.checkValidity()) {
          this.passwordSuccessClass = 'has-success'
          this.passwordIconClass = 'glyphicon glyphicon-ok form-control-feedback'
          if(this.$refs.txtEmail.checkValidity()) this.submitBtnDisabled = false
        } else {
          this.passwordSuccessClass = 'has-error'
          this.passwordIconClass = 'glyphicon glyphicon-remove form-control-feedback'
          this.submitBtnDisabled = true
        }
      },
      submitRegister: function () {
        let first_name = this.$refs.txtFirstName.value.trim()
        let last_name = this.$refs.txtLastName.value.trim()
        let email = this.$refs.txtEmail.value.trim()
        let mobile = this.$refs.txtMobile.value.trim()
        let password = this.$refs.txtPassword.value.trim()
        this.$emit('registerCredentials',
          {
            'first_name' : first_name,
            'last_name' : last_name,
            'email': email,
            'mobile': mobile,
            'password': password
          }
        )
      }
    }
  }
</script>

<style scoped>
</style>