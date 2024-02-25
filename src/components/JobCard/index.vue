<template>
  <div
    class="rounded-2xl border border-gray-200 bg-white py-10 px-6 text-black relative"
  >
    <p class="text-purple-700 text-[12px] font-semibold">
      {{ jobDetails?.companyName }}
    </p>

    <h3 class="text-gray-900 text-[18px] font-semibold">
      {{ jobDetails?.title }}
    </h3>

    <hr class="my-5 border-gray-200" />

    <p class="text-gray-600 text-sm leading-6 mb-6">
      {{
        jobDetails?.description.length > 150
          ? jobDetails?.description.slice(0, 150) + "..."
          : jobDetails?.description
      }}
    </p>

    <div class="flex gap-x-4 absolute bottom-6">
      <div class="flex items-center">
        <LocationIcon />

        <p class="text-gray-500 text-[12px] ml-2">
          {{ jobDetails.location }}
        </p>
      </div>

      <div class="flex items-center">
        <BriefCaseIcon />

        <p class="text-gray-500 text-[12px] ml-2">
          {{ jobDetails.category }}
        </p>
      </div>

      <div class="flex items-center">
        <ClockIcon />

        <p class="text-gray-500 text-[12px] ml-2">
          {{ jobDetails.duration }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LocationIcon from "~/components/icons/LocationXs/index.vue";
import BriefCaseIcon from "~/components/icons/Briefcase/index.vue";
import ClockIcon from "~/components/icons/Clock/index.vue";

export default Vue.extend({
  name: "JobCard",
  components: { LocationIcon, BriefCaseIcon, ClockIcon },
  props: {
    jobDetails: {
      type: Object,
      default: () => {},
    },
  },
});
</script>

<style scoped></style>
