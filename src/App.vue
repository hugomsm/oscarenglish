<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
var db = null;

document.addEventListener("deviceready", function() {
  db = window.sqlitePlugin.openDatabase({
    name: "oscarenglish.db",
    location: "default"
  });
});

export default {
  name: "App"
};
</script>

<style>
</style>
