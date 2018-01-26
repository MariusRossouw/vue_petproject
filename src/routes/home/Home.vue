<template>
    <div>
        <h1>The Dashboard Route</h1>
        <Grid :colTemplate="colTemplate" :rowTemplate="rowTemplate" ></Grid>
    </div>
</template>

<script>
    import Grid from '../../components/grid/Grid.vue';
    export default {
        components: {
            Grid,
        },
        data: function() {
            return {
                colTemplate: [
                    {name:'View', dataKey:'id', width:'70px'},
                    {name:'First Name', dataKey:'first_name', width:'130px'},
                    {name:'Last Name', dataKey:'last_name', width:'130px'},
                    {name:'Email', dataKey:'email', width:'230px'},
                    {name:'Mobile Number', dataKey:'mobile_number', width:'130px'},
                    {name:'Status', dataKey:'status', width:'100px'}
                ],
                rowTemplate: [
                    {id:'1',first_name:'Marius',last_name:'Rossouw',email:'marius@stratech.co.za',mobile_number:'0793328258',status:'Pa'},
                    {id:'2',first_name:'Hymne',last_name:'Rossouw',email:'hymnect@gmail.com',mobile_number:'0636601501',status:'Ma'},
                    {id:'3',first_name:'Yentl',last_name:'Rossouw',email:'yentl@gmail.com',mobile_number:'0820854082',status:'Baba'},
                    {id:'4',first_name:'Deaglan',last_name:'Rossouw',email:'deaglan@gmail.com',mobile_number:'0282141584',status:'Hond'}
                ],
                gridTemplate: {
                    
                }
            }
        }
    }
</script>

<style lang="scss">
    // @import '../../assets/css/kanban.scss';
</style>

