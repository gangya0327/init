<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{date}}</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import moment from 'moment'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  date = moment().format('YYYY/MM/DD')

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
