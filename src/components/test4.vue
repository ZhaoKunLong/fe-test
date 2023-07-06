<template>
    <div>
        <button @click="showModal">打开Modal</button>
        <div v-if="isModalVisible" class="modal-overlay" @click="hideModal">
            <div class="modal" @click.stop>
                <div class="modal-header">
                    <slot name="header">Default Header</slot>
                    <button class="close-button" @click="hideModal">关闭</button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">Default Footer</slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'TestTest4',
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        hideModal() {
            this.isModalVisible = false;
        },
    },
};
</script>
  
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    background-color: #fff;
    padding: 20px;
    width: 400px;
    border-radius: 4px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.close-button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

.modal-body {
    margin-bottom: 10px;
}

.modal-footer {
    text-align: right;
}

button {
    margin-bottom: 10px;
}
</style>