<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
  >
    <q-toolbar slot="header">
      <q-toolbar-title>
        Raha Platform
        <div slot="subtitle">Under Maintenance</div>
      </q-toolbar-title>
    </q-toolbar>
    <div class="layout-padding row justify-center items-center" style="min-height: inherit;">
      <div class="main column items-center">
        <span>Site is under maintenance</span>
        <span>please come back later</span>
      </div>
    </div>
  </q-layout>
</template>

<script>
  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'

  export default {
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain
    },
  }
</script>

<style lang="stylus">
  .main
    span
      font-size 2rem
</style>

<style></style>
