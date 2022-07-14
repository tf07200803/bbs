<template>
  <!-- Style switcher -->
  <div id="style-switcher" class="bg-light border p-3 pt-2 pb-2" onclick="toggleSwitcher()">
      <div class="content">
          <h6 class="title text-center">Select Your Color</h6>
          <ul class="pattern">
              <li class="list-inline-item">
                  <a class="color1" href="javascript: void(0);" onclick="setColor('default')"></a>
              </li>
              <li class="list-inline-item">
                  <a class="color2" href="javascript: void(0);" onclick="setColor('yellow')"></a>
              </li>
              <li class="list-inline-item">
                  <a class="color3" href="javascript: void(0);" onclick="setColor('green')"></a>
              </li>
              <li class="list-inline-item">
                  <a class="color4" href="javascript: void(0);" onclick="setColor('red')"></a>
              </li>
              <li class="list-inline-item">
                  <a class="color5" href="javascript: void(0);" onclick="setColor('purple')"></a>
              </li>
              <li class="list-inline-item">
                  <a class="color6" href="javascript: void(0);" onclick="setColor('saffron')"></a>
              </li>
              <li class="list-inline-item">
                  <a class="color7" href="javascript: void(0);" onclick="setColor('pink')"></a>
              </li>
          </ul>

          <h6 class="title text-center pt-3 mb-0 border-top">Theme Option</h6>
          <ul class="text-center list-unstyled mb-0">
              <li class="d-grid"><a href="javascript:void(0)" class="btn btn-sm btn-block btn-dark dark-version t-dark mt-2" onclick="setTheme('style-dark')">Dark</a></li>
              <li class="d-grid"><a href="javascript:void(0)" class="btn btn-sm btn-block btn-dark light-version t-light mt-2" onclick="setTheme('style')">Light</a></li>
          </ul>
      </div>
      <div class="bottom p-0">
          <a href="javascript: void(0);" class="settings bg-white title-bg-dark shadow d-block"><i class="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary"></i></a>
      </div>
  </div>
  <!-- end Style switcher -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StyleSwitcher',
  setup() {
    // onMounted(() => {

    // })
    // onBeforeUnmount(() => {

    // })
    return {}
  }
});
</script>

<style lang="scss" scoped>
</style>
