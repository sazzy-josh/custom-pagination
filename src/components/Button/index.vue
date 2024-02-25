<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :type="type"
    class="border shadow px-6 flex justify-center items-center max-h-[100px] py-3 rounded-md cursor-pointer !text-sm font-semibold text-center transition duration-200 btn_class"
    :class="[
      { '!cursor-not-allowed': disabled },
      { '!py-1': loading },
      btnClass,
    ]"
    @click="handleClick()"
  >
    <SpinnerIcon v-if="loading" />
    <p v-else>{{ text }}</p>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import SpinnerIcon from "~/components/icons/Spinner/index.vue";

export default Vue.extend({
  name: "Button",
  components: { SpinnerIcon },
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
    btnClass: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
    to: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit("handleAction");
      }
      return;
    },
  },
});
</script>

<style scoped>
.btn_class:hover {
  filter: brightness(1.2);
}
</style>
