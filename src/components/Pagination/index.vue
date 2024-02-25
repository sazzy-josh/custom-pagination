<template>
  <div>
    <div class="flex justify-between items-center">
      <Button
        text="Previous"
        btnClass="text-purple-700"
        :disabled="meta.currentPage === 1"
        @handleAction="$emit('refresh', 'prev')"
      />

      <div class="flex md:hidden items-center text-black text-sm">
        Page {{ meta.currentPage || 1 }} of {{ meta.totalPages || 1 }}
      </div>

      <div class="hidden md:flex space-x-1" v-if="visiblePages?.length > 1">
        <div
          class="px-3 py-1 text-black rounded-lg cursor-pointer"
          v-for="(item, idx) in visiblePages"
          :key="idx"
          :class="{
            '!bg-white border font-medium !border-purple-200 !text-purple-700':
              meta.currentPage === item,
            '!cursor-default !border-none !items-baseline': item === '...',
          }"
          @click="item !== '...' && $emit('refresh', item)"
        >
          {{ item }}
        </div>
      </div>

      <Button
        text="Next"
        btnClass="text-purple-700"
        :disabled="meta.currentPage === meta.totalPages"
        @handleAction="$emit('refresh', 'next')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "~/components/Button/index.vue";

export default Vue.extend({
  name: "Pagination",
  components: {
    Button,
  },
  props: {
    meta: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    visiblePages() {
      const { totalPages, currentPage } = this.meta;
      const pages = [] as any;
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
        return pages;
      }
      if (totalPages > 5 && currentPage < 5) {
        for (let i = 1; i < (i < 4 ? 4 : currentPage + 1); i++) {
          pages.push(i);
        }
        return totalPages - currentPage <= 2
          ? [...new Set(pages.concat(currentPage + 1, totalPages))]
          : [...new Set(pages.concat(currentPage + 1, "...", totalPages))];
      }
      if (totalPages > 5 && currentPage >= 5) {
        if (currentPage > totalPages - 3) {
          return [
            1,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ];
        } else {
          if (totalPages - currentPage <= 3) {
            for (let i = currentPage; i <= totalPages; i++) {
              pages.push(i);
            }
            pages.unshift(1, "...", currentPage - 1);
            return pages;
          } else {
            pages[0] = 1;
            pages[1] = "...";
            pages[2] = currentPage - 2;
            pages[3] = currentPage - 1;
            pages[4] = currentPage;
            pages[5] = currentPage + 1;
            pages[6] = currentPage + 2;
            pages[7] = "...";
            pages[8] = totalPages;
          }

          return pages;
        }
      }
    },
  },
});
</script>

<style scoped></style>
