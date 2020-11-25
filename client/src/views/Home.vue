<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    <transition name="slide-fade"></transition>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>&nbsp;&nbsp;
    <a class="next" style = "margin:5px;" @click="next" href="#">&#10095; Next</a>
    <center><router-link to="/signup">
    <button class="button is-info is-rounded">Get Started</button></router-link></center>
   
    <br><br><br><br>
    <section id="section-a">
    <p>Online Store</p><br>
        <img src="https://image.flaticon.com/icons/png/512/1021/1021745.png" alt="outfit1" width="60" height="45">
        <img src="https://image.flaticon.com/icons/png/512/1021/1021747.png" alt="outfit2" width="60" height="45">
        <img src="https://www.soba-store.com/wp-content/uploads/2018/05/roupas.jpg" alt="shirt" width="60" height="45">
        <img src="https://cdn1.iconfinder.com/data/icons/fitness/500/Shoes_soccer_sport_fitness-512.png" alt="sneakers" width="60" height="45">

  </section>
  <section id="section-b">
    <p>Featured Trainers</p><br>
    <h1>COMING SOON</h1>
      </section>
<section id="section-c">
    <p>Group Classes</p><br>
    <img src="https://images.assetsdelivery.com/compings_v2/bsd555/bsd5551603/bsd555160300070.jpg" alt="workout classes" width="80" height="80">
    <img src="https://www.netclipart.com/pp/m/246-2460709_fruit-bowl-project-angel-heart-healthy-food-icon.png" alt="diet" width="60" height="45">
    <img src="https://play-lh.googleusercontent.com/gEnz6YtDv9TZnl4CfZUHKbdFtZcih67K6MpYMT7MqIYOd6b6XMrDyDDY41ZvRoPYPmA" alt="yoga" width="60" height="45">

  </section>
  <section id="section-d">
    <p>Locations</p><br>
        <img src="https://cdn4.iconfinder.com/data/icons/fitness-lino-color/100/fitness_gym_health-22-512.png" alt="gym" width="60" height="45">

      </section>
      <section id="section-e">
    <p>Workout Categories For You</p><br>
        <img src="https://www.flaticon.com/svg/static/icons/svg/1312/1312938.svg" alt="treadmill" width="60" height="45">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRmOaHHsPVm5tADDS_u-ywLJ0twLmU55XDVQ&usqp=CAU" alt="dumbbell" width="60" height="45">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcm6ZIhsj-c3YLM0wWYaJxAzpjlk-lglCXVQ&usqp=CAU" alt="eliptical" width="60" height="45">
        <img src="https://www.iconbunny.com/icons/media/catalog/product/2/0/2022.12-bicycle-icon-iconbunny.jpg" alt="bike" width="60" height="45">

  </section>
   
 </div>
  
</template>

<script>
import LoginBadge from "@/components/LoginBadge";

export default {
  name: "Slider",
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
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5500);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style>
    #Slider{
    background-size:cover;
    background-position:center;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:0 20px;
    animation: 
    animate 20s ease-in-out infinite;
    
    

}
#section-a{
   padding:20px;
  background: #ffffff;
  text-align:center;
  border-radius: 25px;
  border: 2px solid #1275ed;
  padding: 20px; 
  width: 1160px;
  height: 150px;
}

#section-b{
   padding:20px;
  background: #ffffff;
  text-align:center;
  border-radius: 25px;
  border: 2px solid #1275ed;
  padding: 20px; 
  width: 1160px;
  height: 150px;
}
#section-c{
   padding:20px;
  background: #ffffff;
  text-align:center;
  border-radius: 25px;
  border: 2px solid #1275ed;
  padding: 20px; 
  float: left;
  width: 386px;
  height: 180px;
}
#section-d{
  padding:20px;
  background: #ffffff;
  text-align:center;
  border-radius: 25px;
  border: 2px solid #1275ed;
  padding: 20px; 
  float: left;
  width: 386px;
  height: 180px;
}
#section-e{
    padding:20px;
  background: #ffffff;
  text-align:center;
  border-radius: 25px;
  border: 2px solid #1275ed;
  padding: 20px; 
  float: left;
  width: 386px;
  height: 180px;
}


    .slide-fade-enter-active {
    transition: all 2s ease;
}
    .slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(30px);
    opacity: 0;
}


    form{
        margin-top: 30px;
    }

</style>

