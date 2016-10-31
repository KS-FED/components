<template>
  <div style="margin: 100px;">

<div id="validation-container">
  <validator name="validation" :groups="['child1', 'child2','common']">

    <form novalidate>
        <input type="text" name="" value="" v-validate:a="['required']" group="common" >
        <input type="text" name="" value="" v-validate:b="['required']" group="common" >
      <div class="radio-field">
        <label for="rd1">rd1:</label>
        <input id="rd1" type="radio" value="child1" v-model="radio">
        <label for="rd2">rd2:</label>
        <input id="rd2" type="radio" value="child2" v-model="radio">
      </div>
      <div class="username-field">
        <label for="username">username:</label>
        <input id="username" type="text" group="child1" v-validate:username="['required']">
      </div>
      <input type="button" value="send" v-on:click="submit()">
    </form>
  </validator>
</div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'child1'
      }
    },

    watch: {
      radio () {
        console.log(this.$validation)
      }
    },

    methods: {
      submit(){
            // ($validation[radio].valid)
            console.log(this.$validation[this.radio].valid)
            console.log(this.$validation['common'].valid)
            console.log(this.$validation.valid && this.$validation[this.radio].valid)

            // console.log(this.$validation.valid)
      }
    }
  }
</script>