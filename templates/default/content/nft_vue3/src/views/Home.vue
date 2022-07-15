<template>
	<div>
		<!-- Start Home -->



					<div class="width1200">

						<div>

							<div class="list d-inline-block w-100" v-for="(infor,index) in list" :key="index" :id="'v-'+infor.id">
								<router-link  :to="{ path: '/content', query: { id: infor.id }}">
								<!--<div class="float-start listimg" style="background-image: url('./uploadfile/images/{{infor.imgsrc}}.png');"></div>-->
								<div class="float-start listimg" v-bind:style="{ backgroundImage: 'url(./uploadfile/images/' + infor.imgsrc + ')' }"></div>
								<div class="listtitle">{{infor.title}}</div>
								<div class="listdetail">{{infor.intro}}</div>
								</router-link>
							</div>

							

						</div>


						<div class="pagestyle">

							<paginate v-model="nowpage"
									:page-count="totalpage"
									:page-range="3"
									:margin-pages="1"
									:click-handler="clickCallback"
									:prev-text="'Prev'"
									:next-text="'Next'"
									:container-class="'pagination justify-content-center'"
									:page-class="'page-item'"
							>
							</paginate>

						</div>



					</div>



		<!-- End -->
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, computed} from 'vue';
import axios from 'axios';
import Paginate from "vuejs-paginate-next";
import $ from 'jquery';

export default defineComponent({
  name: 'Home',
    data () {
        return {
			count:0,
			list:'',
			pagelist:'',
			totaldata:'',
			nowpage:this.$route.query.page ? this.$route.query.page : 1,
			totalpage:0,


        }
    },
    props:{
        value:String,

    },
    methods: {



        /*testapi(){
            var bodyFormData = new FormData();
            bodyFormData.set('imgurl', 'https://i4.disp.cc/t/s2/cdn2.ettoday.net/images_2F5517_2Fd5517415.jpg');
            axios({
                method: 'post',
                url: 'index.php?m=content&c=index&a=download',
                data: bodyFormData,
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then(function (response) {

                    console.log(response)

                })
                .catch(function (response) {

                    console.log(response);
                });
		},*/

        getapi(page){
            var self=this
            axios.get('index.php?m=content&c=index&a=getorder&page='+page, {
            }).then(function (response) {
                var res=response.data.data.data;
                self.list=res
				self.pagelist=response.data.data.pages

				const $mc=$(self.pagelist)
				self.totaldata=$mc.find('.totalnum').html()

                self.totalpage=Math.ceil(parseInt(self.totaldata) / 30);




            }).catch(function (err) {
                console.log(err);
            });
		},
        clickCallback(pageNum){
            this.$emit('change-money','');

            var self=this
            self.getapi(pageNum)
            self.$router.push('/home?page='+pageNum);
		},

    },
    mounted() {
        // DOM 渲染完成後
        var self=this
        const test = self.nowpage;
        if (typeof test === 'string') {
            self.nowpage = parseInt(test);
        }
        setTimeout(() => {
            this.getapi(self.nowpage)
        }, 100);
    },
  components: {
      paginate: Paginate,
	},
	setup(props,{emit}) {



        const computedFun = computed(()=>{

            return "computed Fn"
        })



        const changeMoney=(id)=>{
            emit('change-money',id)
        }

        const idx = ref(0);


        onBeforeMount(() => {
            // DOM 渲染前

        });

        onMounted(() => {
            // DOM 渲染完成後

        });

        onBeforeUpdate(() => {
            // 在資料更改導致virtual DOM重新渲染前調用

        });

        onUpdated(() => {
            // 在資料更改導致virtual DOM重新渲染後調用

            if($('#v-'+props.value).attr("id")){
                var position = $('#v-'+props.value).offset();

                if(position.top){
                    var y = position.top;
                    window.scrollTo(0, y);

                }
            }

        });



		return {idx,computedFun,changeMoney}
	}

});
</script>
<style lang="css">

	html{
		background: url('~@/assets/images/bg/bg.jpg') no-repeat center top fixed;
		/*background: url('~@/assets/images/work/1.jpg') no-repeat center top fixed;*/
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
	body{
		background-color: transparent;
	}
	.width1200{
		max-width: 1200px;
		width: 100%;
		position: relative;
		margin: auto;
		padding: 10px;
		margin-top: 10px;
	}
	.list{
		background-color: rgba(255,255,255,0.1);
		padding: 10px;
		margin-bottom: 10px;
	}
	.list a{
		text-decoration: none;
	}
	.listimg{
		width: 100px;
		height: 100px;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		margin-right: 10px;
		margin-bottom: 0px;
	}
	.listtitle{
		margin-bottom: 10px;
		color:#e5ff72;
	}
	.listdetail{
		color:#fff;
	}

</style>
