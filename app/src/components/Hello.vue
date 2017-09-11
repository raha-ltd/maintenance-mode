<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
  >
    <q-toolbar slot="header">
      <!--<q-btn-->
        <!--flat-->
        <!--@click="$refs.layout.toggleLeft()"-->
      <!--&gt;-->
        <!--<q-icon name="menu" />-->
      <!--</q-btn>-->

      <q-toolbar-title>
        Raha Platform
        <div slot="subtitle">Under Maintenance</div>
      </q-toolbar-title>
    </q-toolbar>
    <div class="layout-padding row justify-center items-center" style="min-height: inherit;">
      <div class="main column items-center">
        <span>Our platform is under maintenance</span>
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
  name: 'index',
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
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .main
    span
      font-size 2rem
  .logo-container
    width 255px
    height 242px
    perspective 800px
    position absolute
    top 50%
    left 50%
    transform translateX(-50%) translateY(-50%)
  .logo
    position absolute
    transform-style preserve-3d
</style>
