<script setup lang="ts">
import { ref, onUnmounted } from 'vue';

const visible = ref(false);

// 显示modal
const showModal = () => {
    visible.value = true;
};

// 隐藏modal
const hideModal = () => {
    visible.value = false;
};

onUnmounted(() => {
    visible.value = false;
});
</script>

<template>
    <div>
        <button @click="showModal" class="button">显示模态框</button>
        <div v-if="visible" class="modal-container">
            <div class="modal-overlay" @click="hideModal"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                    <button @click="hideModal" class="button">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    max-width: 500px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.modal-header {
    margin-bottom: 10px;
}

.modal-body {
    margin-bottom: 10px;
    min-width: 500px;
    min-height: 400px;
}

.modal-footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>