<template>
	<div class="loader" style="background: red;">
        <div class="loader-inner line-spin-fade-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
</template>

<script>
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('main').className += 'loaded';
    });
</script>