import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useRolesStore = defineStore('roles', () => {
  const roles = ref<string[]>([]);

  function initRoles(roleList: string[]) {
    roles.value = roleList;
  }
  return { roles, initRoles };
});
