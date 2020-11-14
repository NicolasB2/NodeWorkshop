<template>
  <div>
    <h1>Edit user</h1>
    <task-form @createOrUpdate="createOrUpdate" :user=this.user></task-form>
  </div>
</template>

<script>
import userForm from '../components/UserForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    //'user-form': userForm
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    createOrUpdate: async function(user) {
      await api.updateuser(user);
      this.flash('User updated sucessfully!', 'success');
      this.$router.push(`/users/${user._id}`);
    }
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>