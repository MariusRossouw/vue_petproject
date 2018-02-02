<template>
    <div>
        <h1>The GridExample Route</h1>
        <div>
            <hr/>
            <div>
                <h3>Result</h3>
                <GridTable1 :colTemplate="colTemplate" :rowTemplate="rowTemplate" :gridTemplate="gridTemplate" :one="Test"></GridTable1>
            </div>
            <hr/>
            <div>
                <h3>Component</h3>
                <pre>{{ component }}</pre>
            </div>
            <hr/>
            <div>
                <h3>Data</h3>
                <div style="width:30%; display:inline-block; white-space: nowrap; vertical-align:top;">
                    <h4>Table Header (colTemplate)</h4>
                    <pre>{{ colTemplate }}</pre>
                </div>
                <div style="width:30%; display:inline-block; white-space: nowrap; vertical-align:top;">
                    <h4>Table Body (rowTemplate)</h4>
                    <pre>{{ rowTemplate }}</pre>
                </div>
                <div style="width:30%; display:inline-block; white-space: nowrap; vertical-align:top;">
                    <h4>General (gridTemplate)</h4>
                    <pre>{{ gridTemplate }}</pre>
                </div>
                <pre>{{test}}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import GridTable1 from '../../components/grid/Grid1.vue';
    export default {
        components: {
            GridTable1,
        },
        data: function() {
            return {
                colTemplate: [
                    {name:'Operations', operationsOptions:[
                            {type:'Custom',dataKey:'id',template: '<button @click="openWow">Open</button>'}
                        ],width:'auto'},
                    {name:'First Name', dataKey:'first_name', width:'130px', searchType:'Text'},
                    {name:'Last Name', dataKey:'last_name', width:'130px'},
                    {name:'Email', dataKey:'email', width:'230px'},
                    {name:'Mobile Number', dataKey:'mobile_number', width:'130px'},
                    {name:'Status', dataKey:'status', width:'100px', searchType:'Select',selectOptions:['Active','Created','Declined']}
                ],
                rowTemplate: [
                    {id:'1',first_name:'Marius',last_name:'Rossouw',email:'marius@stratech.co.za',mobile_number:'0793328258',status:'Pa'},
                    {id:'2',first_name:'Hymne',last_name:'Rossouw',email:'hymnect@gmail.com',mobile_number:'0636601501',status:'Ma'},
                    {id:'3',first_name:'Yentl',last_name:'Rossouw',email:'yentl@gmail.com',mobile_number:'0820854082',status:'Baba'},
                    {id:'4',first_name:'Deaglan',last_name:'Rossouw',email:'deaglan@gmail.com',mobile_number:'0282141584',status:'Hond'}
                ],
                gridTemplate: {
                    search: true,
                },
                component: '<GridTable1 :colTemplate="colTemplate" :rowTemplate="rowTemplate" :gridTemplate="gridTemplate"></GridTable1>',
                Test:'Hallo Test',
            }
        },
        methods : {
            openWow: function(){
                console.log('id');
            }
        },
    }
</script>

<style lang="scss">
    // @import '../../assets/css/kanban.scss';
</style>

