<template>
    <div>
        <div class="carousel">
            <div v-for="(image, index) in images" :key="index" :class="{ active: index === activeIndex }">
                <span>{{ index + 1 }}</span>
            </div>
        </div>
        <div class="pagination">
            <div>
                <span v-for="(image, index) in images" :key="index" @click="changeSlide(index)"
                    :class="{ active: index === activeIndex }"></span>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'TestTest3',
    data() {
        return {
            activeIndex: 0,
            images: [
                "1",
                "2",
                "3",
                "4",
            ],
        };
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeDestroy() {
        this.stopAutoPlay();
    },
    methods: {
        changeSlide(index) {
            this.activeIndex = index;
            this.stopAutoPlay();
            this.startAutoPlay();
        },
        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.activeIndex = (this.activeIndex + 1) % this.images.length;
                console.log(this.activeIndex);
            }, 1500);
        },
        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
        },
    },
};
</script>
  
<style scoped>
.carousel {
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px pink solid;
}

.carousel span {
    display: inline-block;
    margin-left: 49%;
    margin-top: 10%
}

.carousel div {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.carousel div.active {
    display: block;
}

.carousel div span {
    font-size: 48px;
}

.pagination {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
}

.pagination span {
    display: inline-block;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
}

.pagination span.active {
    background-color: #ff0000;
}
</style>