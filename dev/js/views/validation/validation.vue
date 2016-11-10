<template>
  <div style="margin: 100px;">

<div id="validation-container">
  <p>
    rd1: username 必须输入
    rd2: username tow 都必须输入
  </p>
  <validator name="validation" :groups="['child1', 'child2']">
    <form novalidate>
      <div class="radio-field">
        <label for="rd1">rd1:</label>
        <input id="rd1" type="radio" value="child1" group="child1" v-model="radio" v-validate:condition1="['required']">
        <label for="rd2">rd2:</label>
        <input id="rd2" type="radio" value="child2" group="child2" v-model="radio" v-validate:condition2="['required']">
      </div>
      <div class="username-field">
        <label for="username">username:</label>
        <input id="username" type="text" group="child1" v-validate:username="['required']">
      </div>
      <div class="username-field">
        <label for="tow">tow:</label>
        <input id="tow" type="text" group="child2" v-validate:tow="['required']">
      </div>
      <div class="comment-field">
        <label for="comment">comment:</label>
        <input id="comment" type="text" v-validate:comment="{ maxlength: 256 }">
      </div>
      <div class="errors">
        <p v-if="$validation.username.required">Required your name.</p>
        <p v-if="$validation.comment.maxlength">Your comment is too long.</p>
      </div>
      <input type="submit" value="send" v-if="$validation[radio].valid">
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

    methods: {
    }
  }
</script>
