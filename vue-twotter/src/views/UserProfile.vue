<template>
  <div class="user-profile">
    <div class="sidebar">
      <div class="userpanel">
        <h2 class="username">{{ state.user.username }} - {{ fullName }}</h2>
        <div class="admin" v-if="state.user.isAdmin">Admin</div>
        <!-- v-else-if and v-else -->
        <div class="follower-count">
          <strong>Followers: {{ state.followers }}</strong>
        </div>
      </div>
      <CreateTwoot @add-twoot="addTwoot" />
    </div>
    <div class="twoots-wrapper">
      <!-- <div class="twoot" v-for="twoot in user.twoots" :key="twoot.id">
         v-for="(twoot, index) in user.twoots"
        {{ twoot.content }}
      </div> -->
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
        @favorite="toggleFavorite"
      />
    </div>
    <button class="add" @click="followUser">Follow</button>
  </div>
</template>

<script>
import { reactive, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '@/assets/users';
import CreateTwoot from '@/components/CreateTwoot';
import TwootItem from '@/components/TwootItem';

export default {
  name: 'UserProfile',
  components: { TwootItem, CreateTwoot },
  setup() {
    const route = useRoute();

    const userId = computed(() => route.params.userId);

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    });

    watch(
      () => state.followers,
      (newCount, oldCount) => {
        if (oldCount < newCount) {
          console.log(`${state.user.username} has gained a follower!`);
        }
      }
    );

    onMounted(() => {
      console.log('Component loaded');
    });

    const fullName = computed(
      () => `${state.user.firstName} ${state.user.lastName}`
    );

    function followUser() {
      state.followers++;
    }

    function toggleFavorite(id) {
      console.log(`Favorited Twoot #${id}`);
    }

    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot
      });
    }

    return {
      state,
      fullName,
      userId,
      followUser,
      toggleFavorite,
      addTwoot
    };
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

  .twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>
