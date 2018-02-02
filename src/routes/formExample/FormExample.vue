<template>
  <div class="panel-body">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </div>
</template>

<script>
    import VueFormGenerator from "vue-form-generator";
    export default {
        components: {
            "vue-form-generator": VueFormGenerator.component
        },
        data: function() {
            return {
                model: {
                    id: 1,
                    user: {name: "John Doe hhhh",
                        email: "john.doe@gmail.com",
                        },
                    password: "J0hnD03!x4",
                    skills: "Javascript",
                    
                    status: true
                },
                schema: {
                    fields: [
                        {
                            type: "input",
                            inputType: "text",
                            label: "ID",
                            model: "id",
                            inputName: "id",
                            readonly: true,
                            featured: false,
                            disabled: true
                        },
                        {
                            type: "select",
                            label: "Type",
                            model: "type",
                            values: [
                                { id: "personal", name: "Personal" },
                                { id: "business", name: "Business" }
                            ]
                        },{
                            type: "input",
                            inputType: "text",
                            label: "Company name",
                            model: "company.name",
                            placeholder: "Business name",
                            visible: function(model) {
                                //visible if business is selected
                                return model && model.type == "business";
                            }
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "User Name",
                            model: "user.name",
                            inputName: "name",
                            styleClasses: 'user-name-class',
                            readonly: false,
                            featured: true,
                            required: true,
                            disabled: false,
                            placeholder: "User's name",
                            validator: VueFormGenerator.validators.string,
                            visible: function(model) {
                                //visible if personal is selected
                                return model && model.type == "personal";
                            }
                        },
                        {
                            type: "checklist",
                            label: "Skills",
                            model: "skills",
                            multi: true,
                            required: true,
                            multiSelect: true,
                            values: ["HTML5", "Javascript", "CSS3", "CoffeeScript", "AngularJS", "ReactJS", "VueJS"],
                            visible: function(model) {
                                //visible if personal is selected
                                return model && model.type == "personal";
                            }
                        }, 
                        {
                            type: "switch",
                            label: "Status",
                            model: "status",
                            multi: true,
                            readonly: false,
                            featured: false,
                            disabled: false,
                            default: true,
                            textOn: "Active",
                            textOff: "Inactive"
                        },
                        {
                            type: "checklist",
                            label: "Roles",
                            model: "roles",
                            values: [
                                { value: "admin", name: "Administrator"},
                                { value: "moderator", name: "Moderator"},
                                { value: "user", name: "Registered User"},
                                { value: "visitor", name: "Visitor"}
                            ]
                        },
                        {
                            type: "radios",
                            label: "Very best friend",
                            model: "friend",
                            values: [
                                "James",
                                "Nadia",
                                "Paul",
                                "Christelle",
                                "Marc",
                                "Marie"
                            ]
                        },
                        {
                            type: "input",
                            inputType: "password",
                            label: "Password",
                            model: "password",
                            inputName: "password",
                            min: 6,
                            required: true,
                            hint: "Minimum 6 characters",
                            validator: VueFormGenerator.validators.string,
                            textTooSmall: "Password must be at least {1} characters"
                        },
                        {
                            type: "input",
                            inputType: "email",
                            label: "E-mail",
                            model: "user.email",
                            inputName: "email",
                            placeholder: "User's e-mail address",
                            validator: VueFormGenerator.validators.email
                        },
                        {
                            type: "textArea",
                            label: "Biography",
                            model: "bio",
                            hint: "Max 500 characters",
                            max: 500,
                            placeholder: "User's biography",
                            rows: 4,
                            validator: VueFormGenerator.validators.string
                        },
                        {
                            type: "select",
                            label: "Skills",
                            model: "skills",
                            inputName: "skills",
                            required: true,
                            values: [
                                "HTML5",
                                "Javascript",
                                "CSS3",
                                "CoffeeScript",
                                "AngularJS",
                                "ReactJS",
                                "VueJS"
                            ],
                            validator: VueFormGenerator.validators.string
                        }, {
                            type: "upload",
                            label: "Photo",
                            model: "photo",
                            inputName: "photo",
                            onChanged(model, schema, event) {
                                console.log(model, schema, event);
                            }
                        },
                        {
                            type: "checkbox",
                            label: "Status",
                            model: "status",
                            inputName: "status",
                            multi: true,
                            readonly: false,
                            featured: false,
                            disabled: false,
                            default: true
                        },
                        {
                            type: "submit",
                            label: "",
                            buttonText: "Submit",
                            validateBeforeSubmit: true
                        }

                    ]
                },

                formOptions: {
                    validateAfterLoad: false,
                    validateAfterChanged: false
                }
            }
        },
        methods : {
        },
    }
</script>

<style lang="scss">
.field-checklist .wrapper {
	width: 100%;
}
.user-name-class input {
    border-radius: 50px !important;
}
    // @import '../../assets/css/kanban.scss';
</style>

