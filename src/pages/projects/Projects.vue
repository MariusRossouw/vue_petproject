<template>
    <div>
        <div class="spacing_left spacing_right" style="margin-left:100px;">   
            <table id="users">
                <tr>
                    <th>
                        View
                    </th>
                    <th>
                        Project Name
                    </th>
                </tr>

                <tr v-for="project in project_list">
                    <td @click="view_project(project.id)" style="cursor: pointer;">o</td>
                    <td>{{project.project_name}}</td>
                </tr>
            </table>
        </div>
        <button @click="addProject">Add Project</button>
        <button @click="projectList">List Projects</button>
        <modal name="Project_add" height="auto" :scrollable="true">
            <div class="row">
                <div class="col-xs-12">
                    <div class="panel" style="border: solid 1px #2ca0d5;">
                        <div class="panel-heading" style="background-color:#2ca0d5; color:white; ">
                            <h3 class="panel-title">Project Add
                                <span style="float:right;">
                                    <a @click="$modal.hide('Project_add')">
                                        ❌
                                    </a>
                                </span>
                            </h3>
                        </div>
                        <div class="panel-body">
                            <vue-form-generator :schema="schemaProjectAdd" :model="modelProjectAdd" :formOptions="formOptionsProjectAdd"></vue-form-generator>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>


<script>
    import VueFormGenerator from "vue-form-generator";
    export default {
        name: 'Projects',
        components: {
            "vue-form-generator": VueFormGenerator.component
        },
        data() {
            return {
                project_list: [],
                modelProjectAdd: {
                    project_name: '',
                    project_fe_repo_url: 'https://github.com/stratech-team/',
                    project_be_repo_url: 'https://github.com/stratech-team/',
                    project_staging_fe_url: 'https://',
                    project_staging_be_url: '//',
                    project_staging_db_url: '',
                    project_staging_server: '',
                    project_production_fe_url: 'https://',
                    project_production_be_url: '//',
                    project_production_db_url: '',
                    project_production_server: '',
                    project_image: '',
                    project_description: '',
                },
                schemaProjectAdd: {
                    fields: [
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Name",
                            model: "project_name",
                            placeholder: "Project Name"
                        },
                        {
                            type: "textArea",
                            label: "Description",
                            model: "project_description",
                            hint: "Max 500 characters",
                            max: 500,
                            placeholder: "Description",
                            rows: 4,
                            validator: VueFormGenerator.validators.string
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Front End Repo URL",
                            model: "project_fe_repo_url",
                            placeholder: "https://github.com/stratech-team/"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project back End Repo URL",
                            model: "project_be_repo_url",
                            placeholder: "https://github.com/stratech-team/"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Staging Front End URL",
                            model: "project_staging_fe_url",
                            placeholder: "https://"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Staging Back End URL",
                            model: "project_staging_be_url",
                            placeholder: "//"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Staging DB End URL",
                            model: "project_staging_db_url",
                            placeholder: ""
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Staging Server",
                            model: "project_staging_server",
                            placeholder: ""
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Production Front End URL",
                            model: "project_production_fe_url",
                            placeholder: "https://"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project production Back End URL",
                            model: "project_production_be_url",
                            placeholder: "//"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Production DB End URL",
                            model: "project_production_db_url",
                            placeholder: ""
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Project Production Server",
                            model: "project_production_server",
                            placeholder: ""
                        },
                        {
                            type: "submit",
                            label: "",
                            buttonText: "Submit",
                            onSubmit: this.saveProject,
                        }

                    ]
                },

                formOptionsProjectAdd: {
                    validateAfterLoad: false,
                    validateAfterChanged: false
                }
            }
        },
        methods: {
            projectList() {
                let request = {};
                request.limit = 9999;
                request.search = {};
                console.log(request);
                this.$http.post(this.$store.state.remoteUrl + '/project_list', request)
                    .then(response => {
                        console.log(response);
                        this.project_list = response.body.data.records;
                    }, error => {
                        console.log(error);
                    }
                );
            },
            view_project(id){
                this.$router.push("/project/" + id);
            },
            saveProject() {
                let request = this.modelProjectAdd;
                console.log(request);
                this.$http.post(this.$store.state.remoteUrl + '/project_add', request)
                    .then(response => {
                        console.log(response);
                        this.projectList();
                        this.$modal.hide('Project_add');
                    }, error => {
                        console.log(error);
                    }
                );
            },
            addProject(){
                this.$modal.show('Project_add');
            }
        },
        computed: {

        },
        watch: {
            
        },
        beforeMount(){
            this.projectList()
        },
    }

</script>


<style>
table#users {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  width: auto;
}
table#users, th, td {
  border: 1px solid lightgrey;
  border-collapse: collapse;
}
#users th, td {
  padding: 5px;
  text-align: left;
  /* white-space: nowrap; */
  text-overflow:ellipsis;
  /* overflow: hidden; */
}
table#users tr:nth-child(even) {
  background-color: #F5F5F5;
}
table#users tr:nth-child(odd) {
 background-color:#fff;
}
table#users th {
color: #ffffff;
background-color: #0092b0;
text-decoration: none;
}

table#users th a {
  color: #ffffff;
  background-color: #0092b0;
  text-decoration: none;
  }

  #users tr:hover,tr.alt:hover
{
  background: #f7dcdf!important;
}





  #pagination th, td {
    padding: 5px;
    /* text-align: center; */
    max-width: 150px;
    min-width: 30px;
  }

  #pagination th:hover {
    background-color: #F5F5F5;
  }

.right_float {
  float: right;
}

.right_float_padding {
  float: right;
  padding-right: 35px;
}

</style>


