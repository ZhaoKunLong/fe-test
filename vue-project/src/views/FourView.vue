<template>
  <div class="modal-demo">
    <button @click="showModal = true">显示Modal</button>
    <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    <div class="modal" v-if="showModal">
      <div class="modal-header">
        <div v-if="!editingHeader">
          <slot name="header">{{ headerText }}</slot>
          <button class="modal-edit" @click="editingHeader = true">编辑</button>
        </div>
        <div v-else>
          <textarea v-model="headerText"></textarea>
          <button class="modal-save" @click="editingHeader = false">保存</button>
        </div>
        <button class="modal-close" @click="showModal = false">&times;</button>
      </div>
      <div class="modal-body">
        <div v-if="!editingBody">
          <slot>{{ bodyText }}</slot>
          <button class="modal-edit" @click="editingBody = true">编辑</button>
        </div>
        <div v-else>
          <textarea v-model="bodyText"></textarea>
          <button class="modal-save" @click="editingBody = false">保存</button>
        </div>
      </div>
      <div class="modal-footer">
        <div v-if="!editingFooter">
          <slot>{{ footerText }}</slot>
          <slot name="footer">
            <button @click="showModal = false">关闭</button>
          </slot>
          <button class="modal-edit" @click="editingFooter = true">编辑</button>
        </div>
        <div v-else>
          <textarea v-model="footerText"></textarea>
          <button class="modal-save" @click="editingFooter = false">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      editingHeader: false,
      editingBody: false,
      editingFooter: false,
      headerText: 'Modal头',
      bodyText: 'Modal身体',
      footerText: 'Modal脚',
    };
  },
};
</script>

<style>
.modal-demo {
  position: relative;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  z-index: 2;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.modal-header .modal-close {
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
}

.modal-header textarea,
.modal-body textarea,
.modal-footer textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

.modal-body {
  padding: 10px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.modal-footer button {
  background-color: #03A9F4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}
</style>