<template>
    <div style="padding-left:50px;">
        <h1>The Sprint Route</h1>
        <h3>Sprint Page Component Ideas</h3>
        <ul>
            <li>Create Story Boards with Context</li>
            <li>Sprint Sizing</li>
            <li>Task Assigning</li>
            <li>Sprint Burndown Chart</li>
            <li>Screen Flows</li>
            <li>Test Cases</li>
            <li>Integration with github/zenhub</li>
        </ul>
    <!-- Left Right Scroll Container -->
        <div class="storyCardContainer">
            <div class="storyCardContainerDetails">
                <!-- Contains Element, Components and Tasks -->
                <div v-for="element in elements"  class="storyCardBlocks">
                    <!--  -->
                    <div class="storyCard">
                        <!--  -->
                        <div class="storyCardHeader">
                            <h3>{{ element.name }}</h3>
                        </div>
                        <!--  -->
                        <div class="storyCardBody">
                            <a>
                                <center>
                                    <img src="../../assets/images/logo.png" class="storyCardBodyImage">
                                </center>
                            </a>
                        </div>
                        <!--  -->
                        <div class="storyCardFooter">
                            <!-- Blue Footer that is always Visible -->
                            <div class="uk-grid storyCardFooter-uk-grid">
                                <div class="uk-width-1-5 storyCardFooter-uk-width">
                                    <center><span uk-navbar-toggle-icon @click="expandElement(element)" v-if="element.expand"></span>
                                    <span uk-navbar-toggle-icon v-else @click="expandElement(element)"></span></center>
                                </div>
                                <div class="uk-width-3-5" style="padding-left:0px !important; height:40px;">
                                    <div class="uk-grid storyCardFooter-uk-grid">
                                        <div class="uk-width-2-3 storyCardFooter-uk-width">
                                            <center>
                                                <span>{{ element.expand }}</span>
                                            </center>
                                        </div>
                                        <div class="uk-width-1-3 storyCardFooter-uk-width">
                                            <center>
                                                <span>100%</span>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-1-5 storyCardFooter-uk-width">
                                    <center>
                                        <span>6</span>
                                    </center>
                                </div>
                            </div>
                            <!-- Expanded Footer with with Spesific Breakdowns, dependent on Task kinds -->
                            <div v-if="element.expand" v-for="task in element.tasks_expand" class="uk-grid" style="color:black; height:40px; padding-left:0px !important; margin-left:0px; margin-top:0px; background-color: white; border-top:solid 2px #F0EFEB;">
                                <div class="uk-width-1-5" v-bind:style="{'border-left': 'solid 10px ' + task.color }" style="padding-left:0px !important; height:40px; font-size:20px; padding-top:5px;">
                                    
                                </div>
                                <div class="uk-width-3-5" style="padding-left:0px !important; height:40px; background-color:red">
                                    <div class="uk-grid storyCardFooter-uk-grid">
                                        <div class="uk-width-2-3" style="padding-left:0px !important; background-color:white; height:40px; font-size:20px; padding-top:5px;">
                                            <center>
                                                <span>{{ task.kind }}</span>
                                            </center>
                                        </div>
                                        <div class="uk-width-1-3" style="padding-left:0px !important; background-color:white; height:40px; font-size:20px; padding-top:5px;">
                                            <center>
                                                <span>{{ task.percentage_complete }}%</span>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-1-5 storyCardFooter-uk-width">
                                    <center>
                                        <span>{{ task.size }}</span>
                                    </center>
                                </div>
                            </div>
                            <!-- The Add Componet Expanded Footer that is always available -->
                            <div v-if="element.expand" class="uk-grid" style="color:black;  padding-left:0px !important; margin-left:0px; margin-top:0px; background-color: white; border-top:solid 2px #F0EFEB;">
                                <div @click="addComponent(element.id)" class="uk-width-5-5" style="height:40px; padding-left:0px !important; height:40px; font-size:20px; padding-top:5px;">
                                    <center>
                                        <a>
                                            + Component
                                        </a>
                                    </center>
                                </div>
                                <div @click="removeElement($index)" class="uk-width-5-5" style="height:40px; padding-left:0px !important; height:40px; font-size:20px; padding-top:5px; border-top:solid 2px #F0EFEB;">
                                    <center>
                                        <a>
                                            - Element
                                        </a>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Component Block -->
                    <div style="float: none; white-space: nowrap; vertical-align:top;">
                        <div v-for="component in element.components" style="display: inline-block; float: none; white-space: nowrap; vertical-align:top;">
                            <div class="storyCard">
                                <!--  -->
                                <div class="storyCardHeader">
                                    <h3>{{ component.name }}</h3>
                                </div>
                                <!--  -->
                                <div class="storyCardBody">
                                    <a>
                                        <center>
                                            <img src="../../assets/images/logo.png" class="storyCardBodyImage">
                                        </center>
                                    </a>
                                </div>
                                <!--  -->
                                <div class="storyCardFooter">
                                    <!-- Blue Footer that is always Visible -->
                                    <div class="uk-grid storyCardFooter-uk-grid">
                                        <div class="uk-width-1-5 storyCardFooter-uk-width">
                                            <center><span uk-navbar-toggle-icon @click="expandComponent(component)" v-if="component.expand"></span>
                                            <span uk-navbar-toggle-icon v-else @click="expandComponent(component)"></span></center>
                                        </div>
                                        <div class="uk-width-3-5" style="padding-left:0px !important; height:40px;">
                                            <div class="uk-grid storyCardFooter-uk-grid">
                                                <div class="uk-width-2-3 storyCardFooter-uk-width">
                                                    <center>
                                                        <span>{{ component.expand }}</span>
                                                    </center>
                                                </div>
                                                <div class="uk-width-1-3 storyCardFooter-uk-width">
                                                    <center>
                                                        <span>{{ component.percentage_complete }}%</span>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="uk-width-1-5 storyCardFooter-uk-width">
                                            <center>
                                                <span>{{ component.size }}</span>
                                            </center>
                                        </div>
                                    </div>
                                    <!-- Expanded Footer with with Spesific Breakdowns, dependent on Task kinds -->
                                    <div v-if="component.expand" v-for="task in component.tasks_expand" class="uk-grid" style="color:black; height:40px; padding-left:0px !important; margin-left:0px; margin-top:0px; background-color: white; border-top:solid 2px #F0EFEB;">
                                        <div class="uk-width-2-5" v-bind:style="{'border-left': 'solid 10px ' + task.color }" style="padding-left:0px !important; height:40px; font-size:20px; padding-top:5px;">
                                            <span style="padding-left: 5px;">{{ task.kind }}</span>
                                        </div>
                                        <div class="uk-width-2-5" style="padding-left:0px !important; height:40px;">
                                            <div class="uk-grid storyCardFooter-uk-grid">
                                                <div class="uk-width-2-3" style="padding-left:0px !important; background-color:white; height:40px; font-size:20px; padding-top:5px;">
                                                    <center>
                                                        
                                                    </center>
                                                </div>
                                                <div class="uk-width-1-3" style="padding-left:0px !important; background-color:white; height:40px; font-size:20px; padding-top:5px;">
                                                    <center>
                                                        <span>{{ task.percentage_complete }}%</span>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="uk-width-1-5 storyCardFooter-uk-width">
                                            <center>
                                                <span>{{ task.size }}</span>
                                            </center>
                                        </div>
                                    </div>
                                    <!-- The Add Componet Expanded Footer that is always available -->
                                    <div v-if="component.expand" class="uk-grid" style="color:black; padding-left:0px !important; margin-left:0px; margin-top:0px; background-color: white; border-top:solid 2px #F0EFEB;">
                                        <div @click="addTask(element.id, component)" class="uk-width-5-5" style="height:40px; padding-left:0px !important; height:40px; font-size:20px; padding-top:5px;">
                                            <center>
                                                <a>
                                                    + Task
                                                </a>
                                            </center>
                                        </div>
                                        <div @click="removeComponent(element.id,$index)" class="uk-width-5-5" style="height:40px; padding-left:0px !important; height:40px; font-size:20px; padding-top:5px; border-top:solid 2px #F0EFEB;">
                                            <center>
                                                <a>
                                                    - Component
                                                </a>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="drag-item" style="width:350px;" v-for="task in component.tasks">
                                <!-- Individual Task -->
                                <div class="drag-item-label" v-bind:style="{'background-color': task.color }">
                                    <center>
                                        <p style="writing-mode: vertical-lr; text-align: center;">{{task.kind}}</p>
                                    </center>
                                </div>
                                <div class="drag-item-body">
                                    <slot :name="task.id">
                                        <div class="uk-grid drag-item-body-title-container">
                                            <div class="uk-width-5-5 drag-item-body-title">
                                                #{{ task.project_id }}-{{ task.task_id }} : {{ task.name }}
                                            </div>
                                        </div>
                                        <div class="drag-item-body-middle-container">
                                            <div class="drag-item-body-middle-text">
                                                <span>P: {{ element.project_name }}<br/>
                                                E: {{ element.name }}<br/>
                                                C: {{ component.name }}</span>
                                            </div>
                                            <div class="drag-item-body-middle-img">
                                                <span><img src="../../assets/images/user.svg" width="50px;"></span>
                                            </div>
                                        </div>
                                        <div class="uk-grid drag-item-body-bottom-container">
                                            <div class="uk-width-1-5 drag-item-body-bottom-item">
                                                <img src="../../assets/images/bug.svg" width="20px;" v-if="task.type == 'Bug'"><img src="../../assets/images/new.svg" width="18px;" v-if="task.type == 'New Feature'"><img src="../../assets/images/enhance.svg" width="18px;" v-if="task.type == 'Enhancement'">
                                            </div>
                                            <div class="uk-width-1-5 drag-item-body-bottom-item">
                                                <img src="../../assets/images/comment.svg" width="20px;"> {{ task.comments }}
                                            </div>
                                            <div class="uk-width-1-5 drag-item-body-bottom-item">
                                                <img src="../../assets/images/file.svg" width="20px;"> {{ task.files }}
                                            </div>
                                            <div class="uk-width-1-5 drag-item-body-bottom-item">
                                                <img src="../../assets/images/size.svg" width="20px;"> {{ task.size }}</td>
                                            </div>
                                            <div class="uk-width-1-5 drag-item-body-bottom-item">
                                                {{ task.percentage_complete }}%
                                            </div>
                                        </div>
                                    </slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div @click="addElement" style="width:350px; height:180px; display: inline-block; margin: 10px; margin-top:50px; border-radius: 3px; box-shadow: 0 2px 18px 0px  rgba(0, 0, 0, 0.4), 0 2px 18px 0 rgba(0, 0, 0, 0.4);">
                    <img alt="+ Element">
                </div>
            </div>
        </div>
        <modal name="element_add" :height=250 @before-open="beforeOpen">
            <div class="row">
                <div class="col-xs-12">
                    <div class="panel" style="border: solid 1px #2ca0d5;">
                        <div class="panel-heading" style="background-color:#2ca0d5; color:white; ">
                            <h3 class="panel-title">Element Add</h3>
                        </div>
                        <div class="panel-body">
                            <vue-form-generator :schema="schemaElementAdd" :model="modelElementAdd" :formOptions="formOptionsElementAdd"></vue-form-generator>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>

</template>

<script>
import {_} from 'vue-underscore';
import VueFormGenerator from "vue-form-generator";
export default {
    components: {
        "vue-form-generator": VueFormGenerator.component
    },
    data() {
        return {
            modelElementAdd: {
                name: "Element Name",
                project_name: 'Canserve',
                project_id: 12,
                expand: false,
                image: ''
            },
            schemaElementAdd: {
                fields: [{
                        type: "input",
                        inputType: "text",
                        label: "Element Name",
                        model: "name",
                        placeholder: "Element Name"
                    },
                    {
                        type: "upload",
                        label: "Image",
                        model: "image",
                        inputName: "image",
                        onChanged(model, schema, event) {
                            console.log(model, schema, event);
                        }
                    },
                    {
                        type: "submit",
                        label: "",
                        buttonText: "Submit",
                        onSubmit: this.saveElement,
                    }

                ]
            },

            formOptionsElementAdd: {
                validateAfterLoad: false,
                validateAfterChanged: false
            },
            elements: [
                {
                    name: "Element 1",
                    id: 1,
                    project_name: 'Canserve',
                    project_id: 12,
                    expand: false,
                    components: [
                        {
                            name: "Component 1",
                            id: 2,
                            element_id: 1,
                            percentage_complete: 80,
                            size: 7,
                            expand: false,
                            tasks: [
                                {
                                    name: "Task 1",
                                    task_id: 3,
                                    project_id: 12,
                                    kind: 'UX',
                                    percentage_complete: 100,
                                    size: 1,
                                    color: '#73f9fd',
                                },
                                {
                                    name: "Task 2",
                                    task_id: 4,
                                    project_id: 12,
                                    kind: 'Design',
                                    percentage_complete: 90,
                                    size: 1,
                                    color: '#6afc76',
                                },
                                {
                                    name: "Task 3",
                                    task_id: 5,
                                    project_id: 12,
                                    kind: 'BackEnd',
                                    percentage_complete: 20,
                                    size: 1,
                                    color: '#fdbc68',
                                },
                                {
                                    name: "Task 4",
                                    task_id: 6,
                                    project_id: 12,
                                    kind: 'UX',
                                    percentage_complete: 50,
                                    size: 1,
                                    color: '#73f9fd',
                                },
                            ]
                        },
                        {
                            name: "Component 2",
                            id: 7,
                            element_id: 1,
                            percentage_complete: 20,
                            size: 12,
                            expand: false,
                            tasks: [
                                {
                                    name: "Task 5",
                                    task_id: 8,
                                    project_id: 12,
                                    kind: 'FrontEnd',
                                    percentage_complete: 30,
                                    size: 1,
                                    color: '#fd9fe1',
                                },
                                {
                                    name: "Task 6",
                                    task_id: 9,
                                    project_id: 12,
                                    kind: 'BackEnd',
                                    percentage_complete: 60,
                                    size: 1,
                                    color: '#fdbc68',
                                },
                                {
                                    name: "Task 7",
                                    task_id: 10,
                                    project_id: 12,
                                    kind: 'UX',
                                    percentage_complete: 50,
                                    size: 1,
                                    color: '#73f9fd',
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods : {
        saveElement() {
            let request = this.modelElementAdd;
            console.log(request);
            // this.$http.post('//canserve-api.stratech.co.za/login', request)
            //     .then(response => {
            //         console.log(response);
            //         this.$modal.hide('element_add');
            //     }, error => {
            //         console.log(error);
            //     }
            // );
        },
        addElement(){
            this.$modal.show('element_add', { type: "element",
                name: "Untitled Element",
                project_name: "Untitled",
                img: "logo.png",
                id: null,
                expand: false,
                components: []
            });
        },
        beforeOpen (event) {
            console.log(event.params);
            this.elements.push(event.params);
            this.modelElementAdd = event.params
        },
        removeElement(index){
            this.elements.splice(index, 1);
        },
        addComponent(element_id){
            for(var i = 0; i < this.elements.length; i++){
                if(this.elements[i].id === element_id){
                    var o = {
                        type: "component",
                        name: "Untitled Component",
                        img: "logo.png",
                        id: null,
                        element_id: element_id,
                        description: "",
                        expand: false,
                        tasks: []
                    }
                    this.elements[i].components.push(o);
                }
            }
        },
        removeComponent(element_id,index){
            for(var i = 0; i < this.elements.length; i++){
                if(this.elements[i].id === element_id){
                    this.elements[i].components.splice(index, 1);
                }
            }
        },
        addTask(element_id, component){
            for(var i = 0; i < this.elements.length; i++){
                if(this.elements[i].id === element_id){
                    for(var j = 0; j < this.elements[i].components.length; j++){
                        if(this.elements[i].components[j].id === component.id){
                            var o = {
                                type: "task",
                                name: "Untitled Task",
                                id: null,
                                status: "",
                                size: "",
                                type: "",
                                description: "",
                                priority: "",
                                kind: "None",
                                color: "",
                                comments: '',
                                files: '',
                                percentage_complete: 0,
                                element_id: element_id,
                                component_id: component.id
                            }
                            this.elements[i].components[j].tasks.push(o);
                            component.expand = false;
                        }
                    }
                }
            }
        },
        removeTask(element_id, component_id, index){
            for(var i = 0; i < this.elements.length; i++){
                if(this.elements[i].id === element_id){
                    for(var j = 0; j < this.elements[i].components.length; j++){
                        if(this.elements[i].components[j].id === component_id){
                            this.elements[i].components[j].tasks.splice(index, 1);
                        }
                    }
                }
            }
        },
        expandElement(element){
            var task_list = [];
            for(var i = 0; i < element.components.length; i++){
                for(var j = 0; j < element.components[i].tasks.length; j++){
                    task_list.push(element.components[i].tasks[j]);
                }
            }
            var groups = _(task_list).groupBy('kind');

            var out = _(groups).map(function(g, key) {
            return { kind: key, 
                    size: _(g).reduce(function(m,x) { return m + x.size; }, 0) };
            });

            for(var i = 0; i < task_list.length; i++){
                var total_size = 0;
                for(var j = 0; j < out.length; j++){
                    total_size = total_size + out[j].size;
                    var p = 0;
                    if(out[j].kind == task_list[i].kind){
                        task_list[i].weighted_percentage = (task_list[i].size/out[j].size)*(task_list[i].percentage_complete/100);
                        if(out[j].percentage_complete){
                            p = Math.floor(out[j].percentage_complete + (task_list[i].weighted_percentage*100));
                            out[j].percentage_complete = p;
                        } else{
                            p = Math.floor(task_list[i].weighted_percentage*100);
                            out[j].percentage_complete = p;
                        }
                    }
                }
            }
            element.tasks_expand = out;
            element.total_size = total_size;
            element.expand = !element.expand;
            console.log(JSON.stringify(element));
        },
        expandComponent(component){
            var groups = _(component.tasks).groupBy('kind');

            var out = _(groups).map(function(g, key) {
            return { kind: key, 
                    size: _(g).reduce(function(m,x) { return m + x.size; }, 0) };
            });

            for(var i = 0; i < component.tasks.length; i++){
                var total_size = 0;
                for(var j = 0; j < out.length; j++){
                    total_size = total_size + out[j].size;
                    var p = 0;
                    if(out[j].kind == component.tasks[i].kind){
                        component.tasks[i].weighted_percentage = (component.tasks[i].size/out[j].size)*(component.tasks[i].percentage_complete/100);
                        if(out[j].percentage_complete){
                            p = Math.floor(out[j].percentage_complete + (component.tasks[i].weighted_percentage*100));
                            out[j].percentage_complete = p;
                        } else{
                            p = Math.floor(component.tasks[i].weighted_percentage*100);
                            out[j].percentage_complete = p;
                        }
                    }
                }
            }
            component.tasks_expand = out;
            component.total_size = total_size;
            component.expand = !component.expand;
        },
    },
    computed: {

    },
    watch: {
        
    }
}
</script>

<style>

    @import '../../assets/css/kanban.scss';
    .storyCardContainer {
        overflow-y: auto;
        padding-bottom: 30px;
    }
    .storyCardContainerDetails {
        display: inline-block; 
        float: none; 
        overflow-x: auto; 
        white-space: nowrap; 
        vertical-align:top;
    }
    .storyCardBlocks {
        display: inline-block; 
        float: none; 
        white-space: nowrap; 
        vertical-align:top; 
        margin-left: 25px;
    }
    .storyCard {
        color: white;
        width:350px; 
        display: inline-block; 
        margin: 10px; 
        border-radius: 3px;
        box-shadow: 0 2px 18px 0px  rgba(0, 0, 0, 0.4), 0 2px 18px 0 rgba(0, 0, 0, 0.4);
    }
    .storyCardHeader {
        width: 100%; 
        background-color: #2ca0d5; 
        height:40px; 
        border-top-left-radius: 3px; 
        border-top-right-radius: 3px;
    }
    .storyCardHeader h3 {
        color: white;
        text-transform: uppercase; 
        text-overflow: ellipsis;
        letter-spacing: 2px;
        text-align: center;
        margin-top: 0px;
    }
    .storyCardBody {
        height:180px; 
        background-color:white;
    }
    .storyCardBodyImage {
        max-height:180px; 
        max-width:330px;
    }
    .storyCardFooter {
        color: white;
        /* height:35px; */
        vertical-align:top; 
        word-wrap: break-word; 
        background-color: #2ca0d5; 
        border-bottom-left-radius: 3px; 
        border-bottom-right-radius: 3px;
    }
    .storyCardFooter-uk-grid {
        height:40px; 
        padding-left:0px !important; 
        margin-left:0px;
    }
    .storyCardFooter-uk-width {
        padding-left:0px !important; 
        height:40px; 
        font-size:20px; 
        padding-top:5px;
    }
    .storyCardExpand {
        width:350px;
    }
    .storyCardExpand table {
        width:100%;
        margin-top:5px;
        box-shadow: 0 2px 18px 0px  rgba(0, 0, 0, 0.4), 0 2px 18px 0 rgba(0, 0, 0, 0.4);
    }
    .storyCardExpand tr {
        height:40px; 
        background-color: white;
        border: none;
    }
    .storyCardFooter td {
        height:40px; 
        background-color: white;
    }
    
</style>

