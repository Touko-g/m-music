new Vue({
    el:'.app',
    data:{
        mes:'MGK',
        musicList:[],
        musicUrl:'',
        musicCover:'',
        hotComment:[],
        isPlaying:true,
        mvUrl:'',
        isShow:false,
        rotate:0,
        timer:null,
        imgMes:null
    },
    methods:{
        searchMusic:function (){
            var that=this;
            axios.get('https://autumnfish.cn/search?keywords='+this.mes).then(
                function (response) {
                    console.log(response);
                    that.musicList=response.data.result.songs;
                }
            ).catch(function (err) {
                console.log(err)
            })
        },
        playMusic:function (musicId){
            clearInterval(this.timer)
            var that=this;
            // console.log(musicId)
            axios.get('https://autumnfish.cn/song/url?id='+musicId).then(
                function (response){
                    // console.log(response)
                    that.musicUrl=response.data.data[0].url;
                }
            ).catch(function (err) {
                console.log(err)
            })
            axios.get('https://autumnfish.cn/song/detail?ids='+musicId).then(
                function (response){
                    // console.log(response)
                    that.musicCover=response.data.songs[0].al.picUrl;
                }
            ).catch(function (err) {
                console.log(err)
            })
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+musicId).then(
                function (response){
                    // console.log(response)
                    that.hotComment=response.data.hotComments;
                }
            ).catch(function (err) {
                console.log(err)
            })
        },
        play() {
            // this.isPlaying=true;
            this.imgMes=document.querySelector('.xz');
            console.log('开启定时器');
            this.timer=setInterval(()=>{
                this.imgMes.style.transform='rotate(' + (this.rotate += 100) + 'deg)';
                this.imgMes.style.transition = 'all 1s linear';
                console.log(this.rotate)
            },1000)
            console.log(this.timer)
        },
        pause(){
            clearInterval(this.timer);
            console.log('关闭定时器');
            // let imgMes=document.querySelector('img');
            // let computedStyle = document.defaultView.getComputedStyle(imgMes, null);
            // this.rotate=computedStyle.transform;
            // // this.isPlaying=false;
            // imgMes.style.transform=this.rotate;
        },
        playMv:function (mvId){
            var that=this;
            axios.get('https://autumnfish.cn/mv/url?id='+mvId).then(
                function (response){
                    that.isShow=true;
                    that.mvUrl=response.data.data.url;
                }
            ).catch(function (err) {
                console.log(err)
            })
        },
        hideMv:function (){
            this.isShow=false;
        }
    }
})