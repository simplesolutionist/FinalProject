
<template>
<form>
  <div>
    <transition-group name='fade' tag='div'>
      <div v-for="i in [currentIndex]" :key='i'>
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href='#'>&#10094;</a>
  <a class="next" @click="next" href='#'>&#10095;</a>
  </div>

 
  </form>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: [
        'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1840394/pexels-photo-1840394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/939716/pexels-photo-939716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/378442/pexels-photo-378442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3766209/pexels-photo-3766209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2150109/pexels-photo-2150109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ],
      timer: null,
      currentIndex: 0,
    }
  },
  
    mounted: function() {
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 4000);
      },
  
  
      next: function() {
        this.currentIndex += 1
      },
      prev: function() {
        this.currentIndex -= 1
      }
    },
  
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 0;
}
.prev {
  left: 0;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>

<style>
    form{
        margin-top: 30px;
    }

</style>

