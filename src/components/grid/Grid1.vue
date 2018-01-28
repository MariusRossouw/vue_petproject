<template>
    <div class="grid-container">
        <table>
            <tr>
                <th v-for="c in colTemplate" :style="{'width': c.width}" :key="c">{{ c.name }}</th>
            </tr>
            <tr v-if="gridTemplate.search === true">
                <th v-for="s in colTemplate">
                    <input type="text" v-if="s.searchType === 'Text'" v-bind:placeholder="s.name">
                    <select v-if="s.searchType === 'Select'">
                        <option v-for="option in s.selectOptions" v-bind:value="option">
                            {{ option }}
                        </option>
                    </select>
                </th>
                <!-- {{r[c.dataKey]}} -->
            </tr>
            <tr v-for="r in rowTemplate">
                <td v-for="c in colTemplate">
                    <span v-if="!c.operationsOptions">{{r[c.dataKey]}}</span>
                    <span v-else v-for="o in c.operationsOptions"> 
                        <span v-if="o.template" v-html="o.template">
                            <!-- {{r[o.dataKey]}} -->
                        </span>
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>


<script>

    export default {
        name: 'GridTable',

        props: {
            colTemplate: {},
            rowTemplate: {},
            gridTemplate: {},
        },
        data() {
            return {
            
            };
        },
    };
</script>

<style>
table, th, td {
  border: 1px solid lightgrey;
  border-collapse: collapse;
}
table tr:nth-child(even) {
  background-color: lightblue;
}
table tr:nth-child(odd) {
 background-color:#fff;
}
table th {
color: #ffffff;
background-color: #0092b0;
text-decoration: none;
}
tr:hover,tr.alt:hover
{
  background: #f7dcdf!important;
}
</style>