<template>
    <div>
        <h1>The Dashboard Route</h1>
        <Kanban :stages="stages" :blocks="blocks" @update-block="updateBlock"></Kanban>
    </div>
</template>

<script>
    import Kanban from '../../components/kanban/Kanban.vue';
    export default {
        components: {
            Kanban,
        },
        data: function() {
            return {
                stages: ['on-hold', 'groomed', 'in-progress', 'needs-review', 'approved', 'deployed'],
                blocks: [
                    {
                        id: 1,
                        project_id: 5,
                        project_name: 'CanServe',
                        element_name: 'Project Add',
                        component_name: 'Image Uploader',
                        element_id: 113,
                        component_id: 4562,
                        percentage_complete: 70,
                        task_id: 12,
                        kind: 'Design',
                        name: 'Create Icons',
                        status: 'on-hold',
                        title: 'Icon',
                        user: 'Marius',
                        color: 'red',
                        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                        size: 5,
                        files: 1,
                        comments: 3,
                        type: 'Bug',
                        route: 'Login',
                        component: 'Input Fields',
                    },
                    {
                        id: 2,
                        project_id: 5,
                        project_name: 'CanServe',
                        element_id: 113,
                        component_id: 4562,
                        percentage_complete: 70,
                        task_id: 12,
                        kind: 'Back End',
                        name: 'Create Image',
                        status: 'on-hold',
                        title: 'Image',
                        user: 'Marius',
                        color: 'blue',
                        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                        size: 3,
                        files: 4,
                        comments: 1,
                        type: 'Bug',
                        route: 'Register',
                        component: 'Input Fields',
                    },
                    {
                        id: 3,
                        project_id: 5,
                        project_name: 'CanServe',
                        element_id: 113,
                        component_id: 4562,
                        percentage_complete: 70,
                        task_id: 12,
                        kind: 'Front End',
                        name: 'Reinhance Layout',
                        status: 'in-progress',
                        title: 'Layout',
                        user: 'Marius',
                        color: 'green',
                        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                        size: 1,
                        files: 1,
                        comments: 1,
                        type: 'Enhancement',
                        route: 'Dashboard',
                        component: 'Wallet Widget',
                    },
                    {
                        id: 4,
                        project_id: 5,
                        project_name: 'CanServe',
                        element_id: 113,
                        component_id: 4562,
                        percentage_complete: 70,
                        task_id: 12,
                        kind: 'UX',
                        name: 'Change UX',
                        status: 'approved',
                        title: 'UX',
                        user: 'Hymne',
                        color: 'red',
                        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                        size: 7,
                        files: 5,
                        comments: 3,
                        type: 'New Feature',
                        route: 'Dashboard',
                        component: 'Profile Details',
                    },
                ],
            }
        },
        methods: {
            updateBlock(id, status) {
            this.blocks.find(b => b.id === Number(id)).status = status;
            },
        }
    }
</script>

<style lang="scss">
    @import '../../assets/css/kanban.scss';
</style>
