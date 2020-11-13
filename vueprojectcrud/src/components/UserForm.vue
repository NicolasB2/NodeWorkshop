<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="calendar plus icon"></i>Name
      </div>
      <input type="text" placeholder="Enter name" v-model="user.name" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="info circle icon"></i> Firstname
      </div>
      <input type="text" placeholder="Enter firstname" v-model="user.firstname" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="info circle icon"></i> Lastname
      </div>
      <input type="text" placeholder="Enter lastname" v-model="user.lastname" />
    </div>
    
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="info circle icon"></i> Username
      </div>
      <input type="text" placeholder="Enter username" v-model="user.username" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="info circle icon"></i> Identification
      </div>
      <input type="text" placeholder="Enter identification" v-model="user.identification" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="info circle icon"></i> Password
      </div>
      <input type="text" placeholder="Enter password" v-model="user.password" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="info circle icon"></i> Photo
      </div>
      <input type="text" placeholder="Enter the url" v-model="user.photo" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="info circle icon"></i> Active
      </div>
      <input type="checkbox" v-model="user.active" />
    </div>


    <button class="positive ui button">Add user</button>
  </form>
</template>

<script>
export default {
  name: 'user-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
          firstname: '',
          lastname: '',
          username: '',
          identification: '',
          password: '',
          photo: '',
          active: true,
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },

  methods: {
    onSubmit: function() {
      if (this.user.name === '' || this.user.firstname === '' || this.user.lastname === '' || this.user.username === '' || this.user.identification === '' || this.user.password === '' || this.user.photo === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.user);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>