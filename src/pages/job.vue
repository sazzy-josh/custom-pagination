<template>
  <div class="container mx-auto">
    <div class="px-4">
      <h2 class="font-semibold my-5 text-2xl">Jobs</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between mb-10"
      >
        <JobCard
          v-for="(job, idx) in visibleItems"
          :key="idx"
          :jobDetails="job"
        />
      </div>
      <Pagination :meta="meta" @refresh="paginate" class="mb-10" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JobCard from "~/components/JobCard/index.vue";
import JOBSDATA from "~/assets/db/MOCK_DATA.js";
import Pagination from "~/components/Pagination/index.vue";

export default Vue.extend({
  name: "Jobs",
  components: {
    JobCard,
    Pagination,
  },
  data() {
    return {
      jobs: JOBSDATA,
      currentPage: 1,
    };
  },
  computed: {
    meta(): any {
      const perPage = 17;
      const totalPages = Math.ceil(this.jobs.length / perPage);
      let currentPage = this.currentPage;

      return {
        perPage,
        totalPages,
        currentPage,
      };
    },
    visibleItems(): Array<any> {
      const startIndex = this.meta.perPage * (this.meta.currentPage - 1); // 10 * (2 - 1) = 10 assuming currenPage is 2
      const endIndex = startIndex + this.meta.perPage; // 20
      return this.jobs.slice(startIndex, endIndex);
    },
  },
  methods: {
    paginate(param: any) {
      switch (param) {
        case "next":
          this.currentPage += 1;
          break;
        case "prev":
          this.currentPage -= 1;
          break;
        default:
          this.currentPage = param;
          break;
      }
    },
  },
});
</script>

<style scoped></style>
