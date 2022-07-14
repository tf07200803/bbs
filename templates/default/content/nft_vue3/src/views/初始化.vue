<template>
	<div>
		<!-- Start Home -->



					<div class="width1200">

						<div>

							<div class="list d-inline-block">

								<div class="float-start listimg" style="background-image: url('./uploadfile/images/2022070920091992.png');"></div>
								<div class="listtitle">{{idx}}[新聞] 夏克立友人不忍了！控訴黃嘉千5大罪狀喊：外配弱勢 - Gossiping板{{computedFun}}</div>
								<div class="listdetail">{{count}}(b10485762000.) 〔記者蕭方綺／台北報導〕黃嘉千、夏克立16日爆出婚變，正準備打離婚官司，黃嘉千透 過律師坦承有此事，人在加拿大的夏克立對離婚一事沒發表意見，友人卻為他抱不平。一 名聲稱是夏克立好友的女性「Naiyua…</div>
							</div>

						</div>




						<div class="buttonstyle" @click="increment()">我是按鈕XXX</div>

					</div>



		<!-- End -->
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, computed} from 'vue';
export default defineComponent({
  name: 'Home',
    data () {
        return {
			count:0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    },
    mounted() {
        // DOM 渲染完成後

        setTimeout(() => {
            this.increment()
        }, 3000);
    },
  components: {

	},
	setup() {

        console.log("當Vue掛載到app上面後執行");

        const computedFun = computed(()=>{
            console.log("computedFun")
            return "computed Fn"
        })



        const idx = ref(0);
        setTimeout(() => {
            idx.value = 1;
            console.log(idx.value);
        }, 3000);

        onBeforeMount(() => {
            // DOM 渲染前
            console.log("DOM 渲染前");
        });

        onMounted(() => {
            // DOM 渲染完成後
            console.log("DOM 渲染完成後");
        });

        onBeforeUpdate(() => {
            // 在資料更改導致virtual DOM重新渲染前調用
            console.log("資料更改前");
        });

        onUpdated(() => {
            // 在資料更改導致virtual DOM重新渲染後調用
            console.log("資料更改後");
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
	.list{
		background-color: rgba(255,255,255,0.3);
		padding: 10px;
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
