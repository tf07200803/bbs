<template>
	<div>
		<!-- Start Home -->



					<div class="width1200">

						<div v-html="detail" id="tread_content">



						</div>






					</div>



		<!-- End -->
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, computed} from 'vue';
import axios from 'axios';
import $ from 'jquery';
import { useRoute } from "vue-router";
export default defineComponent({
  name: 'Content',
    data () {
        return {
			count:0,
            id:this.$route.query.id,
			detail:''
        }
    },
    methods: {
        getapi(){
            var self=this
            axios.get('index.php?m=content&c=index&a=getlist&id='+self.id, {
            }).then(function (response) {
                var res=response.data.data;

				const $mc=$(res['detail'])
				$mc.find(".ptt-push-group  a").attr("href","javascript:void(0)").attr("target","_self")
                $mc.find(".text-author  a").attr("href","javascript:void(0)").attr("target","_self")
                $mc.find(".re-row  a").attr("href","javascript:void(0)").attr("target","_self")

				$mc.find("div").attr("style","")
                $mc.find("img").attr("style","")
                var $li=$mc.find("img")
                $li.each(function(this:any) {
                    $(this).attr("src",$(this).attr("data-src"))
                });
                res['detail']=$mc.html()
                self.detail=res['detail']

            }).catch(function (err) {
                console.log(err);
            });
        },
        increment() {
            this.count++
        }
    },
    mounted() {
        // DOM 渲染完成後

        setTimeout(() => {
            this.getapi()
        }, 100);
    },
  components: {

	},
	setup(props,{emit}) {


        const route = useRoute();
        const computedFun = computed(()=>{

            return "computed Fn"
        })

        const changeMoney=(id)=>{
            emit('change-money',id)
        }

        const idx = ref(0);
        setTimeout(() => {
            idx.value = 1;
            changeMoney(route.query.id)
        }, 100);

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

        });



		return {idx,computedFun}
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
	}

	#tread_content{
		color:#fff;
		overflow-wrap: break-word;

	}
	hr{
		margin: 0;
	}
	.TH_div{
		padding-top: 1rem;
		padding-bottom: 1rem;
		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,1e5799+100&0+0,1+100 */
		background: -moz-linear-gradient(top, rgba(30,87,153,0) 0%, rgba(30,87,153,1) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(top, rgba(30,87,153,0) 0%,rgba(30,87,153,1) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(30,87,153,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */
		padding-left: 10px;
		padding-right: 10px;
	}
	div img {
		max-width: 100%;
	}
	#tread_content div{
		max-width: 100%;
	}
	.push_row{
		padding-bottom: 10px;
		padding-top: 10px;
		border-bottom: 1px solid #3c3c3c;
		display: inline-block;
		width: 100%;
	}
	.push-right{
		float: right;
		color:#404040;
	}
</style>
