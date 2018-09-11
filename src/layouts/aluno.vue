<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header class='row'>
      <q-toolbar color='white'>
        <q-btn
          flat
          round
          dense
          icon="menu"
          color='indigo-8'
          size='xl'
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title class='q-pl-xl'>
          <img alt="Oscar English" src="~assets/oscarenglish.jpg" width="60%" height="60%">
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
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
.cor-oscarenglish{
  color: #2C2F91;
}
</style>
