<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header class='row gutter-md'>
      <q-toolbar color='white'>
        <q-btn
          flat
          round
          dense
          icon="menu"
          color='indigo-8'
          class=''
          size='xl'
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title class=''>
          <img alt="Oscar English" src="~assets/oscarenglish.jpg" width="60%" height="60%">
        </q-toolbar-title>
         <q-btn
          flat
          class=''
          round
          dense
          icon="help_outline"
          color='indigo-8'
          size='xl'
        />
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <q-list-header>Navigation</q-list-header>
        <q-item to='/'>
          <q-item-side icon="home" />
          <q-item-main label="Home" sublabel="Back to class list" />
        </q-item>
        <q-item to='/exercises'>
          <q-item-side icon="explore" />
          <q-item-main label="Exercises" sublabel="Exercises list" />
        </q-item>
        <q-item to='/settings'>
          <q-item-side icon="settings" />
          <q-item-main label="Settings" sublabel="Settings for the app" />
        </q-item>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
export default {
  data() {
    return {
      leftDrawer: true
    };
  },

  methods: {
    openURL
  }
};
</script>

<style>
.cor-oscarenglish {
  color: #2c2f91;
}
</style>
