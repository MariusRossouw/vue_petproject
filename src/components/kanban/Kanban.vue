<template>
	<div class="drag-container">
		<ul class="drag-list" style="overflow-y:scroll;">
			<li v-for="stage in stages" class="drag-column" :class="{['drag-column-' + stage]: true}" :key="stage">
				<span class="drag-column-header">
					<h2>{{ stage }}</h2>
				</span>
				<div class="drag-options"></div>
				<ul class="drag-inner-list" ref="list" :data-status="stage">
			<li class="drag-item" v-for="block in getBlocks(stage)" :data-block-id="block.id" :key="block.id">
                <div class="drag-item-label" v-bind:style="{'background-color': block.color }">
                    <center>
                        <p style="writing-mode: vertical-lr; text-align: center;">{{block.kind}}</p>
                    </center>
                </div>
			    <div class="drag-item-body">
				    <slot :name="block.id">
				        <div class="uk-grid drag-item-body-title-container">
					        <div class="uk-width-5-5 drag-item-body-title">
						        #{{ block.project_id }}-{{ block.task_id }} : {{ block.name }}
					        </div>
				        </div>
				        <div class="drag-item-body-middle-container">
					        <div class="drag-item-body-middle-text">
					            <span>P: {{ block.project_name }}<br/>
                                    E: {{ block.element_name }}<br/>
                                    C: {{ block.component_name }}
                                </span>
					        </div>
					        <div class="drag-item-body-middle-img">
					            <img src="../../assets/images/user.svg" width="50px;">
					        </div>
				        </div>
				        <div class="uk-grid drag-item-body-bottom-container">
					        <div class="uk-width-1-5 drag-item-body-bottom-item">
						        <img src="../../assets/images/bug.svg" width="20px;" v-if="block.type == 'Bug'"><img src="../../assets/images/new.svg" width="18px;" v-if="block.type == 'New Feature'"><img src="../../assets/images/enhance.svg" width="18px;" v-if="block.type == 'Enhancement'">
					        </div>
					        <div class="uk-width-1-5 drag-item-body-bottom-item">
						        <img src="../../assets/images/comment.svg" width="20px;"> {{ block.comments }}
					        </div>
					        <div class="uk-width-1-5 drag-item-body-bottom-item">
						        <img src="../../assets/images/file.svg" width="20px;"> {{ block.files }}
					        </div>
					        <div class="uk-width-1-5 drag-item-body-bottom-item">
						        <img src="../../assets/images/size.svg" width="20px;"> {{ block.size }}</td>
					        </div>
					        <div class="uk-width-1-5 drag-item-body-bottom-item">
						        {{ block.percentage_complete }}%
					        </div>
				        </div>
				    </slot>
			    </div>
			</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import dragula from 'dragula';

	export default {
	    name: 'KanbanBoard',

	    props: {
            stages: {},
            blocks: {},
        },
	    data() {
		    return {
		    };
	    },

	    computed: {
		    localBlocks() {
		        return this.blocks;
		    },
	    },

	    methods: {
		    getBlocks(status) {
		        return this.localBlocks.filter(block => block.status === status);
		    },
	    },

	    filters: {
		    truncate: function(value, length) {
		        if(value.length < length) {
			        return value;
		        }
		        length = length - 3;
		        return value.substring(0, length) + '...';
            }
	    },

	    mounted() {
        dragula(this.$refs.list)
            .on('drag', (el) => {
                el.classList.add('is-moving');
            })
            .on('drop', (block, list) => {
                let index = 0;
                for (index = 0; index < list.children.length; index += 1) {
                    if (list.children[index].classList.contains('is-moving')) break;
                }
                this.$emit('update-block', block.dataset.blockId, list.dataset.status, index);
            })
            .on('dragend', (el) => {
                el.classList.remove('is-moving');

                window.setTimeout(() => {
                    el.classList.add('is-moved');
                    window.setTimeout(() => {
                        el.classList.remove('is-moved');
                    }, 600);
                }, 100);
            });
        },
    
    };
</script>
