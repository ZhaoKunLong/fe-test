<template>
  <div>
    <Modal>
      <template v-slot:header>
        <h2>Popup Modal</h2>
      </template>
      <template>
        <p>This is the modal content.</p>
        <p>Click outside the modal to close it.</p>
      </template>
      <template v-slot:footer>
        <button @click="customAction" class="custom-button">
          Custom Action
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  methods: {
    customAction() {
      console.log('Custom action executed.');
    }
  }
};
</script>

<style></style>
