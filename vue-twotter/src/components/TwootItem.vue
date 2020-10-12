<template>
  <div class="twoot-item" @click="favoriteTwoot(twoot.id)">
    <div class="twoot">
      <div class="user">@{{ username }}</div>
      <div class="content">
        {{ twoot.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwootItem',
  props: {
    username: {
      type: String,
      required: true
    },
    twoot: {
      type: Object,
      required: true
    }
  },
  setup(props, ctx) {
    function favoriteTwoot(id) {
      ctx.emit('favorite', id);
    }

    return {
      favoriteTwoot
    };
  }
};
</script>

<style lang="scss" scoped>
.twoot-item {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  .user {
    font-weight: bold;
  }
}
</style>
