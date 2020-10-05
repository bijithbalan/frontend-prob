<template>
  <div class="user-profile">
    <div class="sidebar">
      <div class="userpanel">
        <h2 class="username">{{ user.username }} - {{ fullName }}</h2>
        <div class="admin" v-if="user.isAdmin">Admin</div>
        <!-- v-else-if and v-else -->
        <div class="follower-count">
          <strong>Followers: {{ followers }}</strong>
        </div>
      </div>
      <CreateTwoot @add-twoot="addTwoot" />
    </div>
    <div class="twoots-wrapper userpanel">
      <!-- <div class="twoot" v-for="twoot in user.twoots" :key="twoot.id">
         v-for="(twoot, index) in user.twoots"
        {{ twoot.content }}
      </div> -->
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favorite="toggleFavorite"
      />
    </div>
    <button class="add" @click="followUser">Follow</button>
  </div>
</template>

<script>
import TwootItem from './TwootItem';
import CreateTwoot from './CreateTwoot';

export default {
  name: 'UserProfile',
  components: { TwootItem, CreateTwoot },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'Admin',
        firstName: 'Vue',
        lastName: 'Tutorial',
        email: 'admin@test.com',
        isAdmin: true,
        twoots: [
          {
            id: 1,
            content: 'Hello World'
          },
          {
            id: 2,
            content: 'Hello World Again'
          },
          {
            id: 3,
            content: 'New Hello World'
          }
        ]
      }
    };
  },
  watch: {
    followers(newCount, oldCount) {
      if (oldCount < newCount) {
        console.log(`${this.user.username} has gained a follower!`);
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavorite(id) {
      console.log(`Favorited Twoot #${id}`);
    },
    addTwoot(twoot) {
      this.user.twoots.unshift({
        id: this.user.twoots.length + 1,
        content: twoot
      });
    }
  },
  mounted() {
    console.log('Component loaded');
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .userpanel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #cccccc;
    border-radius: 5px;
    border: 1px solid#dfe3e8;

    h2 {
      margin: 0;
    }

    .admin {
      background-color: #663399;
      color: #ffffff;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }

  .add {
    width: 100px;
    cursor: pointer;
  }
}
</style>
