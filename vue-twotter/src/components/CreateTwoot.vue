<template>
  <form
    class="twoot-form"
    @submit.prevent="createTwoot"
    :class="{ exceeded: newTwootCharCount > 180 }"
  >
    <label for="newTwoot">
      <strong>New Twoot</strong> ({{ newTwootCharCount }}/180)
    </label>
    <textarea id="newTwoot" rows="4" v-model="state.twootContent" />
    <div class="twoot-submit">
      <div class="twoot-type">
        <label for="twootType"><strong>Type: </strong></label>
        <select id="twootType" v-model="state.selectedTwootType">
          <option
            :value="option.value"
            v-for="(option, index) in state.twootTypes"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <button>Twoot It!</button>
    </div>
  </form>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'CreateTwoot',
  setup(props, ctx) {
    const state = reactive({
      twootTypes: [
        {
          value: 'draft',
          name: 'Draft'
        },
        {
          value: 'instant',
          name: 'Instant Twoot'
        }
      ],
      selectedTwootType: 'draft',
      twootContent: ''
    });

    const newTwootCharCount = computed(() => state.twootContent.length);

    function createTwoot() {
      if (state.twootContent && 'draft' !== state.selectedTwootType) {
        ctx.emit('add-twoot', state.twootContent);
        state.twootContent = '';
      }
    }

    return {
      state,
      newTwootCharCount,
      createTwoot
    };
  }
};
</script>

<style lang="scss" scoped>
.twoot-form {
  display: flex;
  flex-direction: column;
  border-top: 1px solid#dfe3e8;
  margin-top: 10px;
  padding-top: 10px;

  &.exceeded {
    border-color: #ff0000;
  }

  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
  }

  .twoot-submit {
    display: flex;
    justify-content: space-between;

    .twoot-type {
      padding: 10px 0;
    }

    button {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      color: #ffffff;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0px 10px 14px -7px #276873;
      background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
      background-color: #599bb3;
      text-shadow: 0px 1px 0px #3d768a;
      outline: none;

      &:hover {
        background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
        background-color: #408c99;
      }

      &:active {
        position: relative;
        top: 1px;
      }
    }
  }
}
</style>
