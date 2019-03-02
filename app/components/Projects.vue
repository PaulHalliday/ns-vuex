<template>
  <Page>
    <ActionBar title="Projects">
      <ActionItem
        ios.systemIcon="4"
        ios.position="right"
        android.systemIcon="btn_plus"
        android.position="actionBar"
        @tap="addProject"
      />
    </ActionBar>
    <ListView for="project in projects" class="list-group" @itemTap="navigateToProject">
      <v-template>
        <Label class="list-group-item" :text="project.name"/>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import * as dialogs from "tns-core-modules/ui/dialogs";

import TodoList from "./TodoList";
import * as fromProject from "../store/modules/Project/mutation-types";

export default {
  created() {
    this.GET_PROJECTS();
  },
  methods: {
    ...mapActions("Project", [
      fromProject.ADD_PROJECT,
      fromProject.GET_PROJECTS
    ]),
    navigateToProject(event) {
      const selectedProject = event.item;
      this.$navigateTo(TodoList, { props: { selectedProject } });
    },
    addProject() {
      prompt({
        title: "New Project",
        message: "Project name:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        defaultText: "",
        inputType: dialogs.inputType.text
      }).then(result => {
        this.ADD_PROJECT({ name: result.text });
      });
    }
  },
  computed: {
    ...mapState({
      projects: state => state.Project.projects
    })
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
